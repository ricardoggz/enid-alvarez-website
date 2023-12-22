/** @type {import('next').NextConfig} */
const nextConfig = {
    // Configura la carpeta donde se encuentran las páginas
    pagesDir: './src/pages',
    generateStaticParams(){
        return {
          '/': { page : '/'},
          '/bolsos': { page : '/bolsos'},
          '/hilos': { page : '/hilos'},
          '/pago-producto': { page : '/pago-producto/[...id]'}  
        }
      },
      env:{
        BASE_URL_API: 'https://enid-alvarez-web-server.vercel.app/',
      }
}

module.exports = nextConfig
