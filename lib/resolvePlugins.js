/**
 * Resolves all plugins and imports the packages.
 * Borrowed from: react-native/babel-preset
 */
function resolvePlugins(plugins) {
  return plugins.map(function(plugin) {
    if (!Array.isArray(plugin)) {
      plugin = [plugin];
    }

    if (typeof plugin[0] === 'string') {
      plugin[0] = require('babel-plugin-' + plugin[0]);
      plugin[0] = plugin[0].__esModule ? plugin[0].default : plugin[0];
    }

    return plugin;
  });
}


module.exports = resolvePlugins;
