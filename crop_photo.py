from PIL import Image

source_path = "C:/Users/Nikhil/.gemini/antigravity/scratch/nikhilchalamalla/source-photo.jpg"
target_path = "C:/Users/Nikhil/.gemini/antigravity/scratch/dev-portfolio/public/profile.jpg"

img = Image.open(source_path)
width, height = img.size
print(f"Original image size: {width}x{height}")

# Crop parameters to isolate head, face, glasses, mustache, tie, and suit jacket
# The upper wall is located in top 0-25% of image height
left = int(width * 0.05)
top = int(height * 0.22) # Trim top wall
right = int(width * 0.95)
bottom = int(height * 0.95) # Include suit & tie

cropped = img.crop((left, top, right, bottom))
cropped.save(target_path, "JPEG", quality=95)
print(f"Cropped image saved successfully. New size: {cropped.size}")
