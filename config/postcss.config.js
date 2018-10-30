module.exports = () => [
  // Necessary for external CSS imports to work
  // https://github.com/facebook/create-react-app/issues/2677
  require('postcss-import'),
  require('postcss-nested'),
  require('postcss-extend'),
  require('postcss-mixins'),
  require('postcss-at-rules-variables'),
  require('postcss-each'),
  require('postcss-for'),
  require('postcss-flexbugs-fixes'),
  require('postcss-conditionals'),
  require('postcss-math'),
  require('postcss-hexrgba'),
  require('postcss-plugin-px2rem')({
    rootValue: 16,
    unitPrecision: 4,
    minPixelValue: 1
  }),
  require('postcss-preset-env')({
    autoprefixer: {
      flexbox: 'no-2009',
    },
    stage: 3,
  }),
];