# Base React Project

This React project combines TypeScript, Redux and Redux Thunk to make a solid foundation to build upon. It has all the features needed like Prettier, TypeScript linting with ESLint, Storybook etc.

We've chosen ESlint above TSlint since TSlint will be deprecated in favor of ESlint (see [this](https://github.com/Microsoft/TypeScript/issues/29288#developer-productivity-tools-and-integration) and [this](https://github.com/palantir/tslint/issues/4534) for more info)

## Available scripts

Start the application
`npm run start`

Start Storybook
`npm run storybook`

Lint the TypeScript files (with ESLint)
`npm run lint`

Lint the SCSS files (with Stylelint)

Prettify the application
`npm run pretty`

## Storybook

The make Storybook load the fonts appropriately the custom Webpack has been altered. In `.storybook/main.js` all config can be viewed. Besides the custom Webpack config the font-face definitions can be found in the `preview-head.html`.
