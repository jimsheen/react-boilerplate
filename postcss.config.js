module.exports = {
  plugins: [
    // These plugins give you majority of css functionality
    // The order is important here
    require('postcss-import'),
    require('postcss-nested'),
  ]
};
