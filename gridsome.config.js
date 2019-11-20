module.exports = {
  siteName: 'Resume - Swadesh Behera',
  siteDescription: 'Fullstack Developer with 12 years of total experience',
  siteUrl: 'https://github.com/itswadesh/resume',
  plugins: [
    //   {
    //   use: '@gridsome/plugin-google-analytics',
    //   options: {
    //     id: 'UA-72659574-11'
    //   }
    // },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000
      }
    }
  ],
  css: {
    loaderOptions: {
      scss: {}
    }
  }
}