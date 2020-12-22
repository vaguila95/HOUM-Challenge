const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
              '@primary-color': '#ff5000',
              '@heading-color': '#ff5000',
              '@font-size-base': '12px'
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};