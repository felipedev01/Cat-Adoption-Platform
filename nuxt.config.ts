export default defineNuxtConfig({
  // Certifique-se de apontar para o arquivo CSS correto
  css: ['~/assets/css/main.css'],

  // Se precisar de configurações extras de PostCSS
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
    
  },

  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseKey: process.env.SUPABASE_KEY
    }
  },
  
  compatibilityDate: '2024-09-21',
})