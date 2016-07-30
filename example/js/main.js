/*
 *
 *  Photoshop-UI-Manager-Example
 *  Basic usage of photoshop-ui-manager node.js module.
 *  Author: Antonio Gomez (https://github.com/antonio-gomez)
 *
 *  @link https://github.com/antonio-gomez/photoshop-ui-manager
 *  @version v1.0.0
 *  @license MIT
 *
 */


;(function() {
    
	'use strict';

    var photoshopUIManager = require('photoshop-ui-manager');

	photoshopUIManager.init({
		'darkGray'   : 'css/dark-gray-ui.css',
		'mediumGray' : 'css/medium-gray-ui.css',	
		'lightGray'  : 'css/light-gray-ui.css',
		'original'   : 'css/original-ui.css'
	});
	
})();
	
