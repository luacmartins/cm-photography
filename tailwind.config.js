module.exports = {
   future: {
      removeDeprecatedGapUtilities: true,
   },
   purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         colors: {
            'theme-grey-900': '#292929',
            'theme-grey-800': '#383838',
            'theme-grey-600': '#454545',
            'theme-grey-400': '#a1a1a1'
         },
         fontSize: {
            '2xs': '.5rem'
         },
         zIndex: {
            '-10': '-10',
            '-100': '-100'
         },
         height: {
            32: '8rem',
            64: '16rem',
            72: '18rem',
            84: '21rem',
            96: '24rem',
            128: '32rem',
         },
         width: {
            72: '18rem',
            84: '21rem',
            96: '24rem'
         },
         inset: {
            'header': '77px'
         },
         maxHeight: {
            '96': '22rem',
            '128': '32rem',
            '156': '39rem'
         },
         minHeight: {
            '128': '32rem'
         },
         inset: {
            '1/2': '50%',
            '1/4': '25%'
         },
      }
   },
   variants: {
      display: ['responsive', 'hover', 'focus', 'group-hover'],
      backgroundColor: ['responsive', 'hover', 'focus', 'checked'],
   },
   plugins: [require('tailwindcss-multi-column')()],
}
