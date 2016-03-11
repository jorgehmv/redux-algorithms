require('babel-polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  app: {
    title: 'Redux Algorithms',
    description: 'Algorithms visualization using Redux.',
    head: {
      titleTemplate: 'Redux Algorithms: %s',
      meta: [
        { name: 'description', content: 'Algorithms visualization using Redux.' },
        { charset: 'utf-8' },
        { property: 'og:site_name', content: 'Redux Algorithms' },
        // {property: 'og:image', content: 'https://TODO.jpg'},
        // {property: 'og:image:width', content: '200'},
        // {property: 'og:image:height', content: '200'},
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:title', content: 'Redux Algorithms' },
        { property: 'og:description', content: 'Algorithms visualization using Redux.' },
        { property: 'og:card', content: 'summary' },
        { property: 'og:site', content: '@jorgehmv' },
        { property: 'og:creator', content: '@jorgehmv' }
      ]
    }
  }
}, environment);
