/*
 *
 *  Photoshop-UI-Manager
 *  Node.js module that listens to Adobe Photoshop working area brightness change event.
 *  Author: Antonio Gomez (https://github.com/antonio-gomez)
 *
 *  @@link https://github.com/antonio-gomez/photoshop-ui-manager
 *  @version v0.0.0
 *  @license MIT
 *
 */


;(function() {
	
	'use strict';
	
	var package = require('package.json');
	
	function PhotoshopUIManager() {}
	
	// Public
	PhotoshopUIManager.prototype.init = function(stylesheets) {
		
	};
	
	// Public
	PhotoshopUIManager.prototype.verson = package.version;
	
	module.exports = new PhotoshopUIManager;
	
})();