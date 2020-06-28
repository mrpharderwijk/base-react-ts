/**
 * Setup Storybook with Tailwind
 * https://medium.com/better-programming/start-a-component-library-with-storybook-tailwind-css-and-typescript-ebaffc33d098
 */
const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.[tj]s[x]'],
  addons: ['@storybook/addon-actions/register', '@storybook/addon-knobs/register', '@storybook/addon-notes/register'],
  webpackFinal: async (config) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.
    (config.module.rules = [
      ...config.module.rules,
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              presets: [require.resolve('babel-preset-react-app')],
            },
          },
          {
            loader: require.resolve('react-docgen-typescript-loader'),
            options: {
              // Provide the path to your tsconfig.json so that your stories can
              // display types from outside each individual story.
              tsconfigPath: path.resolve(__dirname, '../tsconfig.json'),
            },
          },
        ],
      },

      /**
       * Added for @font-face support
       * Also package.json storybook contains -s ./src
       * and the preview-head.html defines the font-faces
       * more info: https://medium.com/@mushti_dev/hey-e6faa20b910a
       */
      {
        test: /\.scss$/,
        use: ['resolve-url-loader'],
        include: path.resolve(__dirname, '../'),
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        use: [
          {
            loader: 'file-loader',
            query: {
              name: '[name].[ext]',
            },
          },
        ],
        include: path.resolve(__dirname, '../'),
      },
    ]),
      config.resolve.extensions.push('.ts', '.tsx');

    return config;
  },
};
