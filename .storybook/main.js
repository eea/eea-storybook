const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const makeLoaderFinder = require('razzle-dev-utils/makeLoaderFinder');
const fileLoaderFinder = makeLoaderFinder('file-loader');
const projectRootPath = path.resolve('.');
const lessPlugin = require('@plone/volto/webpack-plugins/webpack-less-plugin');
const createConfig = require('../node_modules/razzle/config/createConfigAsync.js');
const razzleConfig = require(path.join(projectRootPath, 'razzle.config.js'));
const fs = require('fs');

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
            name: 'removeTitle',
            active: true,
          },
          {
            name: 'convertPathData',
            active: false,
          },
          {
            name: 'removeUselessStrokeAndFill',
            active: true,
          },
          {
            name: 'removeViewBox',
            active: false,
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
  browserslist: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie 11', 'not dead'],
};

module.exports = {
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  // reactOptions: { legacyRootApi: true },
  stories: [
    '../src/addons/**/*.stories.mdx',
    '../src/addons/**/!(Breadcrumbs|FileUpload).stories.@(js|jsx)',
    '../src/components/**/*.stories.@(js|jsx)',
  ],
  addons: [
    '@storybook/addon-webpack5-compiler-babel',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
  ],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

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
    const { AddonRegistry } = require('@plone/registry/addon-registry');
    const registry = new AddonRegistry(projectRootPath);
    config = lessPlugin({
      registry,
    }).modifyWebpackConfig({
      env: {
        target: 'web',
        dev: 'dev',
      },
      webpackConfig: config,
      webpackObject: webpack,
      options: {},
    });

    // Put the SVG loader on top and prevent the asset/resource rule
    // from processing the app's SVGs
    config.module.rules.unshift(SVGLOADER);
    let fileLoader = config.module.rules.find(fileLoaderFinder);

    if (!fileLoader) {
      fileLoader = config.module.rules.find((rule) => rule.test.test('.svg'));
    }
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
      filename: `${razzleOptions.cssPrefix}/bundle.[${experimental.newContentHash ? 'contenthash' : 'chunkhash'}:8].css`,
      chunkFilename: `${razzleOptions.cssPrefix}/[name].[${experimental.newContentHash ? 'contenthash' : 'chunkhash'}:8].chunk.css`,
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

    // Addons have to be loaded with babel
    const addonPaths = registry.addonNames.map((addon) => fs.realpathSync(registry.packages[addon].modulePath));
    const voltoSourcePath = fs.realpathSync(path.join(projectRootPath, 'node_modules/@plone/volto/src'));
    const voltoSlateSourcePath = fs.realpathSync(path.join(projectRootPath, 'node_modules/@plone/volto-slate/src'));
    resultConfig.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      include: [path.join(projectRootPath, 'src'), voltoSourcePath, voltoSlateSourcePath, ...addonPaths],
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            babelrc: false,
            configFile: false,
            presets: [
              [
                require.resolve('razzle/babel'),
                {
                  '@babel/preset-react': { runtime: 'automatic' },
                },
              ],
            ],
            plugins: [
              require.resolve('babel-plugin-lodash'),
              require.resolve('@babel/plugin-proposal-export-default-from'),
              require.resolve('@babel/plugin-syntax-export-namespace-from'),
              require.resolve('@babel/plugin-proposal-throw-expressions'),
              require.resolve('@babel/plugin-proposal-nullish-coalescing-operator'),
              [
                require.resolve('babel-plugin-root-import'),
                {
                  rootPathSuffix: './src',
                },
              ],
              require.resolve('@loadable/babel-plugin'),
            ],
          },
        },
      ],
    });
    resultConfig.module.rules[1].exclude = (input) =>
      // exclude every input from node_modules except from @plone/volto
      /node_modules\/(?!(@plone\/volto)\/)/.test(input) &&
      // If input is in an addon, DON'T exclude it
      !addonPaths.some((p) => input.includes(p));

    const addonExtenders = registry.getAddonExtenders().map((m) => require(m));

    const extendedConfig = addonExtenders.reduce((acc, extender) => extender.modify(acc, { target: 'web', dev: 'dev' }, config), resultConfig);
    return extendedConfig;
  },
  core: {
    builder: 'webpack5',
  },
  features: {
    emotionAlias: false,
    postcss: false,
  },
  babel: async (options) => {
    return {
      ...options,
      plugins: [
        ...(options.plugins || []),
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
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript-plugin',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
      propFilter: () => true,
    },
  },
};
