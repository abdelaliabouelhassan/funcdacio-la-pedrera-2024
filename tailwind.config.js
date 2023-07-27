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
        },
        colors:{
          'Turquoise':'#99B5B6'
        },
        
        
      },
    },
    plugins: [],
  }
  
  