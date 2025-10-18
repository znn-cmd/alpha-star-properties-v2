/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://alphastarproperties.ae',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  exclude: ['/api/*'],
  alternateRefs: [
    {
      href: 'https://alphastarproperties.ae/en',
      hreflang: 'en',
    },
    {
      href: 'https://alphastarproperties.ae/ru',
      hreflang: 'ru',
    },
  ],
};

