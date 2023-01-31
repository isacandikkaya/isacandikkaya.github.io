const headers = [
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  }
];

module.exports = {
  future: {
    webpack5: false,
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers,
      },
      {
        source: '/',
        headers,
      },
    ];
  }
};
