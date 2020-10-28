const sharp = require('sharp')
const path = require('path')
const fs = require('fs')
const imagemin = require('imagemin');
const imageminPngquant = require('imagemin-pngquant');
const imageminJpegtran = require('imagemin-jpegtran');

const createOptimizedImages = () => {
   const inputDirectory = '/public/portfolio-full'
   const outputDirectory = './public/output'
   // const sizes = [{ name: 'desktop', width: 1440 }, { name: 'tablet', width: 720 }, { name: 'mobile', width: 420 }, { name: 'lazy', width: 64 },]
   const sizes = [{ name: 'lazy', width: 64 }]

   const directory = path.join(process.cwd(), inputDirectory)
   const fileNames = fs.readdirSync(directory).filter(file => file !== '.DS_Store').map(fileName => fileName.split('.jpg')[0])
   const images = fileNames.map(fileName => path.join(process.cwd(), `${inputDirectory}/${fileName}`))

   images.forEach((image, i) => {
      sizes.forEach(size => {
         sharp(image + '.jpg')
            .resize(size.width)
            .toFile(`${outputDirectory}/${fileNames[i]}-${size.name}.jpg`);
      })
   })
}

createOptimizedImages()
   // (async () => {
   //    const files = await imagemin(['img/*.{jpg,png}'], {
   //       destination: 'build/images',
   //       plugins: [
   //          imageminJpegtran(),
   //          imageminPngquant({
   //             quality: [0.6, 0.8]
   //          })
   //       ]
   //    });

   //    console.log(files);
   //    //=> [{data: <Buffer 89 50 4e …>, destinationPath: 'build/images/foo.jpg'}, …]
   // })();