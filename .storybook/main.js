const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const makeLoaderFinder = require('razzle-dev-utils/makeLoaderFinder');
const fileLoaderFinder = makeLoaderFinder('file-loader');
const projectRootPath = path.resolve('.');
const lessPlugin = require('@plone/volto/webpack-plugins/webpack-less-plugin');
const createConfig = require('../node_modules/razzle/config/createConfigAsync.js');
const razzleConfig = require(path.join(projectRootPath, 'razzle.config.js'));
const SVGLOADER = {
  test: /icons\/.*\.svg$/,
  use: [
    {
      loader: 'svg-loader',
    },
    {
      loader: 'svgo-loader',
      options: {
        plugins: [
          {
            removeTitle: true,
          },
          {
            convertPathData: false,
          },
          {
            removeUselessStrokeAndFill: true,
          },
          {
            removeViewBox: false,
          },
        ],
      },
    },
  ],
};

const defaultRazzleOptions = {
  verbose: false,
  debug: {},
  buildType: 'iso',
  cssPrefix: 'static/css',
  jsPrefix: 'static/js',
  enableSourceMaps: true,
  enableReactRefresh: true,
  enableTargetBabelrc: false,
  enableBabelCache: true,
  forceRuntimeEnvVars: [],
  mediaPrefix: 'static/media',
  staticCssInDev: false,
  emitOnErrors: false,
  disableWebpackbar: false,
  browserslist: [
    '>1%',
    'last 4 versions',
    'Firefox ESR',
    'not ie 11',
    'not dead',
  ],
};

module.exports = {
  // reactOptions: { legacyRootApi: true },
  stories: [
    '../src/addons/volto-eea-design-system/src/ui/**/*.stories.mdx',
    '../src/addons/volto-eea-design-system/src/ui/**/*.stories.@(js|jsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@whitespace/storybook-addon-html',
  ],
  features: {
    // storyStoreV7: true,
    // buildStoriesJson: true,
    emotionAlias: false,
    postcss: false,
    // modernInlineRender: true,
  },
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.
    // Storybook 6.5 added support for React 18's new Root API, but fails to realize we
    // arent using React 18 yet, so it fails when it can't find it.
    // https://github.com/storybookjs/storybook/issues/18402
    config.externals = ['react-dom/client'];

    // Make whatever fine-grained changes you need
    let baseConfig;
    baseConfig = await createConfig(
      'web',
      'dev',
      {
        // clearConsole: false,
        modifyWebpackConfig: razzleConfig.modifyWebpackConfig,
        plugins: razzleConfig.plugins,
      },
      webpack,
      false,
      undefined,
      [],
      defaultRazzleOptions,
    );
    const AddonConfigurationRegistry = require('@plone/volto/addon-registry');
    const registry = new AddonConfigurationRegistry(projectRootPath);
    config = lessPlugin({
      registry,
    }).modifyWebpackConfig({
      env: {
        target: 'web',
        dev: true,
      },
      webpackConfig: config,
      webpackObject: webpack,
      options: {},
    });

    // putting SVG loader on top, fix the fileloader manually (Volto plugin does not
    // work) since it needs to go first
    config.module.rules.unshift(SVGLOADER);
    const fileLoader = config.module.rules.find(fileLoaderFinder);
    // add vtt to file loader
    fileLoader.test = /\.(svg|ico|jpg|jpeg|png|apng|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf|vtt)(\?.*)?$/;

    fileLoader.exclude = [/\.(config|variables|overrides)$/, /icons\/.*\.svg$/];
    config.plugins.unshift(
      new webpack.DefinePlugin({
        __DEVELOPMENT__: true,
        __CLIENT__: true,
        __SERVER__: false,
      }),
    );
    const razzleOptions = {
      cssPrefix: 'css',
    };
    const experimental = {};
    const miniPlugin = new MiniCssExtractPlugin({
      filename: `${razzleOptions.cssPrefix}/bundle.[${
        experimental.newContentHash ? 'contenthash' : 'chunkhash'
      }:8].css`,
      chunkFilename: `${razzleOptions.cssPrefix}/[name].[${
        experimental.newContentHash ? 'contenthash' : 'chunkhash'
      }:8].chunk.css`,
    });
    config.plugins.unshift(miniPlugin);
    const resultConfig = {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          ...baseConfig.resolve.alias,
        },
      },
    };
    resultConfig.module.rules[1].exclude = /node_modules\/(?!(@plone\/volto)\/)/;
    const addonExtenders = registry.getAddonExtenders().map((m) => require(m));
    const extendedConfig = addonExtenders.reduce(
      (acc, extender) =>
        extender.modify(
          acc,
          {
            target: 'web',
            dev: 'dev',
          },
          config,
        ),
      resultConfig,
    );
    return extendedConfig;
  },
  babel: async (options) => {
    return {
      ...options,
      plugins: [
        ...options.plugins,
        [
          './node_modules/babel-plugin-root-import/build/index.js',
          {
            rootPathSuffix: './src',
          },
        ],
      ],
      // any extra options you want to set
    };
  },
  framework: '@storybook/html',
};
