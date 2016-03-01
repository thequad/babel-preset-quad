var resolvePlugins = require('./lib/resolvePlugins');


module.exports = {
  comments: false,
  compact: true,
  plugins: resolvePlugins([
    "syntax-async-functions",
    "syntax-class-properties",
    "syntax-trailing-function-commas",
    "transform-decorators-legacy",
    "transform-class-properties",
    "transform-es2015-arrow-functions",
    "transform-es2015-block-scoping",
    "transform-es2015-classes",
    "transform-es2015-computed-properties",
    "transform-es2015-constants",
    "transform-es2015-destructuring",
    ["transform-es2015-modules-commonjs", {"strict": false, "allowTopLevelThis": true}],
    "transform-es2015-parameters",
    "transform-es2015-shorthand-properties",
    "transform-es2015-spread",
    "transform-es2015-template-literals",
    "transform-flow-strip-types",
    "transform-object-assign",
    "transform-object-rest-spread",
    "transform-react-display-name",
    "transform-react-jsx",
    "transform-regenerator",
    "transform-es2015-for-of",
  ]),
  retainLines: true,
  sourceMaps: false,
};