export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],  // Certifique-se de apontar para o arquivo CSS correto

  // Se precisar de configurações extras de PostCSS
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
    
  },
})
