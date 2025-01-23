module.exports = {
    siteUrl: 'https://anandamconstruction.com', // Your website URL
    generateRobotsTxt: true, // Generates robots.txt alongside sitemap
    changefreq: 'daily', // Default update frequency for sitemap
    priority: 0.7, // Default page priority for sitemap
    robotsTxtOptions: {
      policies: [
        { userAgent: '*', allow: '/' }, // Allow all crawlers
      ],
    },
  };
  