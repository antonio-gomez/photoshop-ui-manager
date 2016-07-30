/*
 *
 *  Photoshop-UI-Manager
 *  Node.js module that listens to Adobe Photoshop working area brightness change event.
 *  Author: Antonio Gomez (https://github.com/antonio-gomez)
 *
 *  @@link https://github.com/antonio-gomez/photoshop-ui-manager
 *  @version v1.0.0
 *  @license MIT
 *
 */


;(function(window) {
	
	'use strict';
	
	var pkg = require('./package.json');
	
	function PhotoshopUIManager() {}
	
	// Public
	PhotoshopUIManager.prototype.init = function(params) {
		var self = this;
		
		// Params validation 
		if(params === undefined || typeof params !== 'object') {
			throw new Error('Verify your params object containing the target CSS Stylesheets.');
		}
		
		// CSInterface validation
		if(window.CSInterface === undefined || typeof window.CSInterface !== 'function') {
			throw new Error('Include Adobe CSInterface v5.x library to your Adobe Photoshop extension.');
		} else {
			this._csInterface        = new window.CSInterface();
    		this._extensionId        = this._csInterface.getExtensionID();
			
			this.globalEventType     = window.CSInterface.THEME_COLOR_CHANGED_EVENT;
			this.stylesheets         = params;
			this.targetLinkElement;
			this.appSkinInfo         = JSON.parse(window.__adobe_cep__.getHostEnvironment()).appSkinInfo;
			this.grayShade           = '';
						
			this._createStylesheetNode();
			this._setCurrentUIGrayShade();
			
			// Global event listener for THEME_COLOR_CHANGED_EVENT
			this._csInterface.addEventListener(this.globalEventType, this._themeColorChangedHandler, { parentContext : self });
		}
	};
	
	// Public
	PhotoshopUIManager.prototype.verson = pkg.version;
	
	// Private
	PhotoshopUIManager.prototype._createStylesheetNode = function() {
		var domElement   = document.createElement('link'),
			documentHead = document.getElementsByTagName('head').item(0)
		
		domElement.rel  = 'stylesheet';
		domElement.id   = 'target-stylesheet';
		domElement.href = '';
		
		this.targetLinkElement = documentHead.appendChild(domElement);
	};
	
	// Private
	PhotoshopUIManager.prototype._themeColorChangedHandler = function(csEvent) {
		this.parentContext.appSkinInfo = JSON.parse(window.__adobe_cep__.getHostEnvironment()).appSkinInfo;
		this.parentContext._setCurrentUIGrayShade();
	};
	
	// Private
	PhotoshopUIManager.prototype._setCurrentUIGrayShade = function() {
		var self = this;
		
		switch(this.appSkinInfo.panelBackgroundColor.color.red) {
			case 52  : self.grayShade = 'darkGray';   break;
			case 83  : self.grayShade = 'mediumGray'; break;
			case 184 : self.grayShade = 'lightGray';  break;
			case 214 : self.grayShade = 'original';   break;
		}
		
		this._assignCorrespondingStylesheet();
	};
	
	// Public
	PhotoshopUIManager.prototype._assignCorrespondingStylesheet = function() {
		this.targetLinkElement.href = this.stylesheets[this.grayShade];
	};
	
	module.exports = new PhotoshopUIManager;
	
})(window);