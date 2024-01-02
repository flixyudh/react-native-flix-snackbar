const path = require('path');
const webpack = require('webpack');

const nodeModules = path.join(__dirname, '..', 'node_modules');

/** @type {()=>import('@docusaurus/types').Plugin} */
const a = function ({ siteDir }) {
  return {
    name: 'docs-plugin-react-native-elements-web',
    configureWebpack(config, isServer, utils) {
      const { getJSLoader } = utils;
      return {
        mergeStrategy: {
          'resolve.extensions': 'prepend',
          'module.rules': 'prepend',
        },
        entry: [
          'babel-polyfill',
          ...[config.entry.main ? config.entry.main : config.entry],
        ],
        plugins: isServer
          ? []
          : [
              new webpack.DefinePlugin({
                process: { env: {} },
                __DEV__: process.env.NODE_ENV !== 'production' || true,
              }),
            ],
        module: {
          rules: [
            {
              test: /\.(js|jsx|ts|tsx)$/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: [
                    'module:metro-react-native-babel-preset',
                    '@babel/preset-env',
                    '@babel/preset-react',
                    { plugins: ['@babel/plugin-proposal-class-properties'] },
                  ],
                },
              },
              include: [path.resolve(__dirname, '../../dist/')],
            },
          ],
        },
        resolve: {
          alias: {
            'react-native$': 'react-native-web',
            'react-native-flix-snackbar': path.resolve(
              __dirname,
              '../../dist/'
            ),
            'react': path.resolve(siteDir, 'node_modules/react'),
          },
          extensions: ['.web.js'],
          fallback: isServer
            ? {}
            : {
                fs: false,
              },
        },
      };
    },
  };
};

module.exports = a;
