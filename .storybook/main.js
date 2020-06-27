/**
 * Setup Storybook with Tailwind
 * https://medium.com/better-programming/start-a-component-library-with-storybook-tailwind-css-and-typescript-ebaffc33d098
 */
const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.[tj]s[x]'],
  tories: ['../src/stories/**/*.stories.tsx'],
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
          require.resolve('react-docgen-typescript-loader'),
        ],
      },
    ]),
      config.resolve.extensions.push('.ts', '.tsx');

    /**
     * The PostCSS loader
     */
    console.log(`Using tailwind's '${config.mode}' mode`);
    const postCssLoader = {
      loader: 'postcss-loader',
      options: {
        plugins: [
          require('postcss-import'),
          require('tailwindcss')('./tailwind.config.js'),
          require('autoprefixer'),
          ...(config.mode === 'production' ? [purgecss] : []),
        ],
      },
    };

    const customRule = {
      /**
       * Define files that need access to TailwindCSS
       *
       * Add your custom scss here
       */
      test: /(index|tailwind|component|styles)\.scss$/,

      /**
       * first the sass-loader should run (thats why its last in the array :-/),
       * then the normal loader
       * https://github.com/tailwindcss/discuss/issues/225#issuecomment-465370201
       */
      use: [postCssLoader, 'sass-loader'],
    };

    /**
     * Add the rule
     */
    config.module.rules.push(customRule);

    return config;
  },
};
