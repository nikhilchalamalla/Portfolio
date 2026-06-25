import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import styles from "./ThreeCanvas.module.css";

export const ThreeCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const container = containerRef.current;
    const canvas = canvasRef.current;

    // Dimensions
    let width = container.clientWidth;
    let height = container.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0b0f19, 0.015);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.z = 28;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);

    // Particles Configuration
    const particleCount = 120;
    const particlesData: Array<{
      velocity: THREE.Vector3;
      origin: THREE.Vector3;
      current: THREE.Vector3;
    }> = [];

    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    // Generates a subtle cyan-to-purple gradient for the particles
    const colorCyan = new THREE.Color(0x0ea5e9);
    const colorPurple = new THREE.Color(0xa855f7);

    for (let i = 0; i < particleCount; i++) {
      // Random coordinates inside a bounding box
      const x = (Math.random() - 0.5) * 45;
      const y = (Math.random() - 0.5) * 45;
      const z = (Math.random() - 0.5) * 40;

      const origin = new THREE.Vector3(x, y, z);
      const current = origin.clone();
      
      // Random velocities
      const velocity = new THREE.Vector3(
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02
      );

      particlesData.push({ origin, current, velocity });

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Color interpolation based on position
      const ratio = (x + 22.5) / 45;
      const mixedColor = colorCyan.clone().lerp(colorPurple, ratio);
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    // Particle Geometry
    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    particleGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(colors, 3)
    );

    // Custom round point texture using Canvas
    const createCircleTexture = () => {
      const size = 64;
      const canvasTex = document.createElement("canvas");
      canvasTex.width = size;
      canvasTex.height = size;
      const ctx = canvasTex.getContext("2d");
      if (ctx) {
        // Draw glow
        const gradient = ctx.createRadialGradient(
          size / 2, size / 2, 0,
          size / 2, size / 2, size / 2
        );
        gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
        gradient.addColorStop(0.2, "rgba(255, 255, 255, 0.8)");
        gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.2)");
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, size, size);
      }
      const texture = new THREE.CanvasTexture(canvasTex);
      return texture;
    };

    // Material
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.8,
      vertexColors: true,
      map: createCircleTexture(),
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    // Points Mesh
    const pointCloud = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(pointCloud);

    // Constellation lines setup
    const maxConnections = 250;
    const linePositions = new Float32Array(maxConnections * 2 * 3);
    const lineColors = new Float32Array(maxConnections * 2 * 3);

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(linePositions, 3)
    );
    lineGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(lineColors, 3)
    );

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.15,
      blending: THREE.AdditiveBlending,
    });

    const linesMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(linesMesh);

    // Interaction values
    const mouse = new THREE.Vector2(-9999, -9999);
    const mouseTarget = new THREE.Vector2(-9999, -9999);
    const raycaster = new THREE.Raycaster();
    const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);

    const onMouseMove = (event: MouseEvent) => {
      // Calculate normalized device coordinates
      mouseTarget.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseTarget.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    const onMouseLeave = () => {
      mouseTarget.set(-9999, -9999);
    };

    const onTouchMove = (event: TouchEvent) => {
      if (event.touches.length > 0) {
        mouseTarget.x = (event.touches[0].clientX / window.innerWidth) * 2 - 1;
        mouseTarget.y = -(event.touches[0].clientY / window.innerHeight) * 2 + 1;
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("touchmove", onTouchMove);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const time = clock.getElapsedTime();

      // Smooth mouse interpolation
      if (mouseTarget.x !== -9999) {
        if (mouse.x === -9999) {
          mouse.copy(mouseTarget);
        } else {
          mouse.x += (mouseTarget.x - mouse.x) * 0.1;
          mouse.y += (mouseTarget.y - mouse.y) * 0.1;
        }
      } else {
        mouse.set(-9999, -9999);
      }

      // Check mouse intersection with the plane
      let mouse3D = new THREE.Vector3();
      if (mouse.x !== -9999) {
        raycaster.setFromCamera(mouse, camera);
        raycaster.ray.intersectPlane(plane, mouse3D);
      }

      const positionAttr = particleGeometry.getAttribute("position") as THREE.BufferAttribute;

      // Update Particle Coordinates
      for (let i = 0; i < particleCount; i++) {
        const data = particlesData[i];

        // Idle movement
        data.current.add(data.velocity);

        // Keep inside bounds
        const boundaryX = 25;
        const boundaryY = 25;
        const boundaryZ = 20;

        if (Math.abs(data.current.x) > boundaryX) data.velocity.x *= -1;
        if (Math.abs(data.current.y) > boundaryY) data.velocity.y *= -1;
        if (Math.abs(data.current.z) > boundaryZ) data.velocity.z *= -1;

        // Interaction: pull/push effect on mouse hover
        if (mouse.x !== -9999) {
          const distToMouse = data.current.distanceTo(mouse3D);
          if (distToMouse < 8) {
            // Push particles slightly away
            const forceDirection = new THREE.Vector3()
              .subVectors(data.current, mouse3D)
              .normalize();
            
            const force = (8 - distToMouse) * 0.05;
            data.current.addScaledVector(forceDirection, force);
          } else {
            // Faint return force to original position
            data.current.lerp(data.origin, 0.01);
          }
        } else {
          // Faint return force to original drift
          data.current.lerp(data.origin, 0.005);
        }

        // Apply back to attribute arrays
        positionAttr.setXYZ(i, data.current.x, data.current.y, data.current.z);
      }

      positionAttr.needsUpdate = true;

      // Update lines linking close particles
      let lineIndex = 0;
      const linePosAttr = lineGeometry.getAttribute("position") as THREE.BufferAttribute;
      const lineColorAttr = lineGeometry.getAttribute("color") as THREE.BufferAttribute;

      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          if (lineIndex >= maxConnections) break;

          const pA = particlesData[i].current;
          const pB = particlesData[j].current;
          const dist = pA.distanceTo(pB);

          if (dist < 7.5) {
            const alpha = 1 - dist / 7.5;

            // Draw line start
            linePosAttr.setXYZ(lineIndex * 2, pA.x, pA.y, pA.z);
            // Draw line end
            linePosAttr.setXYZ(lineIndex * 2 + 1, pB.x, pB.y, pB.z);

            // Fetch color from particles
            const colorA_R = colors[i * 3];
            const colorA_G = colors[i * 3 + 1];
            const colorA_B = colors[i * 3 + 2];
            
            const colorB_R = colors[j * 3];
            const colorB_G = colors[j * 3 + 1];
            const colorB_B = colors[j * 3 + 2];

            // Set color with alpha fade (modulated via line basic material opacity or custom vertex alphas)
            // Since LineBasicMaterial opacity is global, we scale colors down to fade lines based on distance
            lineColorAttr.setXYZ(lineIndex * 2, colorA_R * alpha, colorA_G * alpha, colorA_B * alpha);
            lineColorAttr.setXYZ(lineIndex * 2 + 1, colorB_R * alpha, colorB_G * alpha, colorB_B * alpha);

            lineIndex++;
          }
        }
      }

      linePosAttr.needsUpdate = true;
      lineColorAttr.needsUpdate = true;
      lineGeometry.setDrawRange(0, lineIndex * 2);

      // Faint orbital rotation
      pointCloud.rotation.y = time * 0.03;
      linesMesh.rotation.y = time * 0.03;
      pointCloud.rotation.x = Math.sin(time * 0.01) * 0.05;
      linesMesh.rotation.x = Math.sin(time * 0.01) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!containerRef.current) return;
      width = container.clientWidth;
      height = container.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("touchmove", onTouchMove);
      resizeObserver.disconnect();

      // Dispose resources
      scene.remove(pointCloud);
      scene.remove(linesMesh);
      particleGeometry.dispose();
      particleMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={containerRef} className={styles.canvasContainer}>
      <canvas ref={canvasRef} className={styles.canvas} />
    </div>
  );
};
