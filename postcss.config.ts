const postcssNesting = require('postcss-nesting');
const postcssSimpleVars = require('postcss-simple-vars');
const autoprefixer = require('autoprefixer');
// import postcssNesting from 'postcss-nesting';
// import * as postcssSimpleVars from 'postcss-simple-vars';
// import * as autoprefixer from 'autoprefixer';

module.exports = {
  plugins: [postcssNesting(), postcssSimpleVars(), autoprefixer()],
};
