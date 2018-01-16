goog.provide('plugin.georss.GeoRSSPlugin');

goog.require('os.plugin.AbstractPlugin');
goog.require('os.plugin.PluginManager');


/**
 * Provides an interface to the OSM overpass API
 * @extends {os.plugin.AbstractPlugin}
 * @constructor
 */
plugin.georss.GeoRSSPlugin = function() {
  plugin.georss.GeoRSSPlugin.base(this, 'constructor');
  this.id = plugin.georss.ID;
  this.errorMessage = null;
};
goog.inherits(plugin.georss.GeoRSSPlugin, os.plugin.AbstractPlugin);


/**
 * @type {string}
 * @const
 */
plugin.georss.ID = 'georss';


/**
 * @inheritDoc
 */
plugin.georss.GeoRSSPlugin.prototype.init = function() {
  // plugin does not do anything yet
};


// add the plugin to the application
os.plugin.PluginManager.getInstance().addPlugin(new plugin.georss.GeoRSSPlugin());
