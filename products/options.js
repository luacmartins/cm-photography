const options = {
   description: {
      Canvas: 'Curated 400gsm canvas stretched with 1 1/2"   knotless pine frame.',
      Print: 'Printed on premium 240gsm photographic paper with satin lustre finish.'
   },
   sizes: ['8x12"', '12x18"', '16x24"', '20x30"', '24x36"'],
   material: ['Print', 'Canvas'],
   prices: {
      from: 19,
      list: {
         Canvas: {
            '8x12"': 59,
            '12x18"': 89,
            '16x24"': 99,
            '20x30"': 119,
            '24x36"': 139
         },
         Print: {
            '8x12"': 19,
            '12x18"': 29,
            '16x24"': 39,
            '20x30"': 49,
            '24x36"': 59
         }
      }
   },
   backgrounds: {
      landscape: [{
         src: '/rooms/room-blank.jpg',
         css: 'w-2/3 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
      }, {
         src: '/rooms/landscape-1.jpg',
         css: 'w-40 sm:w-72 lg:w-84 mt-6 sm:mt-10 top-0 left-1/2 transform -translate-x-1/2'
      }, {
         src: '/rooms/landscape-2.jpg',
         css: 'w-40 sm:w-72 lg:w-84 mt-8 sm:mt-16 lg:mt-12 left-1/2 transform -translate-x-1/2'
      }, {
         src: '/rooms/landscape-3.jpg',
         css: 'w-32 sm:w-72 lg:w-72 mt-4 sm:mt-6 lg:mt-8 top-0 left-1/2 transform -translate-x-1/2'
      }, {
         src: '/rooms/landscape-4.jpg',
         css: 'w-32 sm:w-64 mt-4 sm:mt-10 lg:mt-12 top-0 left-1/2 transform -translate-x-1/2'
      }],
      portrait: [{
         src: '/rooms/room-blank.jpg',
         css: 'h-48 sm:h-96 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
      }, {
         src: '/rooms/portrait-1.jpg',
         css: 'h-40 sm:h-72 mt-8 sm:mt-16 transform top-0 right-1/4 translate-x-1/2'
      }, {
         src: '/rooms/portrait-2.jpg',
         css: 'h-24 sm:h-48 mt-6 top-0 left-1/4 transform -translate-x-1/2'
      }, {
         src: '/rooms/portrait-3.jpg',
         css: 'h-32 sm:h-64 mt-6 sm:mt-8 top-0 right-1/4 transform translate-x-4 sm:translate-x-10'
      }, {
         src: '/rooms/portrait-4.jpg',
         css: 'h-20 sm:h-48 mt-8 ml-2 sm:ml-4 top-0 left-1/2 transform -translate-x-1/2'
      }]
   }
}

export default options