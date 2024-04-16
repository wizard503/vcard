const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: 'Jose Duran', // Esto se muestra en la pantalla de inicio
    // ... otras opciones de PWA
    icon: {
      src: './assets/JD2.png', // Ruta a tu archivo de icono
      sizes: '192x192', // Diferentes tamaños para varios dispositivos
      type: 'image/png' // Formato del archivo de icono
    }
  }
})
