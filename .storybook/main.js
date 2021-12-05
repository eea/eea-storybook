const path = require('path');
const lessPlugin = require('./webpack-less-plugin');

module.exports = {
  stories: [
    '../node_modules/@plone/volto/src/**/*.stories.mdx',
    '../node_modules/@plone/volto/src/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/addons/**/**/*.stories.mdx',
    '../src/addons/**/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config) => {
    config.resolve.alias['@eeacms/eea-design-system'] = path.join(
      __dirname,
      './../src',
    );
    config.resolve.alias['../../theme.config'] = path.resolve(
      __dirname,
      '../theme/theme.config',
    );
    config.resolve.alias['../../theme.config$'] = path.resolve(
      __dirname,
      '../theme/theme.config',
    );

    lessPlugin(config);
    return config;
  },
};
