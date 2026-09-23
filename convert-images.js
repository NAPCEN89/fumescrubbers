const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Update this to your actual images directory
const parentDir = path.join(__dirname, 'public/assets/images/products');

function walkDir(dir) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            walkDir(filePath); // Recurse into subfolders
        } else {
            const ext = path.extname(file).toLowerCase();
            if (['.jpg', '.jpeg', '.png'].includes(ext)) {
                const newFilePath = filePath.replace(ext, '.webp');
                
                sharp(filePath)
                    .webp({ quality: 80 })
                    .toFile(newFilePath)
                    .then(() => console.log(`✅ Converted: ${file}`))
                    .catch(err => console.error(`❌ Error converting ${file}:`, err));
            }
        }
    });
}

console.log('🚀 Starting conversion to WebP...');
walkDir(parentDir);