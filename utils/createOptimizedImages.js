const sharp = require('sharp')
const path = require('path')
const fs = require('fs')

const createOptimizedImages = () => {
   const inputDirectory = '../public/img'
   const outputDirectory = '../public/output'
   const sizes = [{ name: 'desktop', width: 1440 }, { name: 'tablet', width: 720 }, { name: 'mobile', width: 420 }, { name: 'lazy', width: 64 },]

   const directory = path.join(process.cwd(), inputDirectory)
   const fileNames = fs.readdirSync(directory).filter(file => file !== '.DS_Store').map(fileName => fileName.split('.jpg')[0])
   const filePaths = fileNames.map(fileName => path.join(process.cwd(), `${inputDirectory}/${fileName}`))
   const images = filePaths

   images.forEach((image, i) => {
      sizes.forEach(size => {
         sharp(image + '.jpg')
            .resize(size.width)
            .toFile(`${outputDirectory}/${fileNames[i]}-${size.name}.jpg`);
      })
   })
}

createOptimizedImages()