const postcssNesting = require('postcss-nesting');
const postcssSimpleVars = require('postcss-simple-vars');
const autoprefixer = require('autoprefixer');

module.exports = {
    plugins: [
        postcssNesting(),
        postcssSimpleVars(),
        autoprefixer(),
    ]
}