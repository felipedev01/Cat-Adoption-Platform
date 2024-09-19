module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.{vue,js}',
    './pages/**/*.{vue,js}',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        main: '#4E2096',
        textPrimary: '#262038',
        textSecondary: '#4D4F4F',
        stroke: '#DDF4F8',
        placeholder: '#B2B2B2',
        danger: '#E03131',
        success: '#08D580',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'xs': '12px',
        'sm': '14px',
        'base': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '40px',
      },
    },
  },
  plugins: [],
}
