module.exports = {
    content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./nuxt.config.{js,ts}",
    ],
    theme: {
      extend: {
        screens: {
          'xs': '475px',
        },
        fontFamily: {
          'reenie-beanie': ['Reenie Beanie', 'sans-serif'],
          'super-rotesk-comp': ['SuperGroteskComp', 'sans-serif'],
          'super-grotesk-ot':['SuperGroteskOT','sans-serif'],
          
        },
        colors:{
          'Turquoise':'#99B5B6',
          'Agave':'#A3BDBE',
          'Brown':'#80676B',
          'Olive-Green':'#9DA17C',
          'Ocre':'#D2B569',
          'Beige':'#DFD3BB',
        },
        
        
      },
    },
    plugins: [],
  }
  
  