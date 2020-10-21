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
   }
}

export default options