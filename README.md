## Photoshop-UI-Manager

[![npm-image](https://img.shields.io/badge/npm-v1.0.0-ff69b4.svg)](https://www.npmjs.com/package/photoshop-ui-manager)
![version-image](https://img.shields.io/badge/license-MIT-ff69b4.svg)


#### Install
--------

```
npm install photoshop-ui-manager --save
```


#### Requirements
--------

[CSInterface][0] v5.x or higher


#### Description
-----------

Node.js module that listens to Adobe Photoshop working area brightness change event then loads a designated css stylesheet so the running extension (custom panel) matches the application user interface four shades of gray.


#### Usage
--------

```
var photoshopUIManager = require('photoshop-ui-manager');

photoshopUIManager.init({
	'darkGray'   : 'css/dark-gray-ui.css',
	'mediumGray' : 'css/medium-gray-ui.css',	
	'lightGray'  : 'css/light-gray-ui.css',
	'original'   : 'css/original-ui.css'
});
```

#### Example
--------

[Example Photoshop extension][1] demostrating module basic functionality.

The example initializes an instance of the module with four file paths of the target CSS stylesheets that are swapped based on the working area brightness change event triggered when one of the four shades of gray available is selected.


#### Scope
--------

Tested in Adobe Photoshop CC2014 (v15.x), Adobe Photoshop CC2015 (v16.x) and Adobe Photoshop CC2015.5 (v17.x)


#### Changelog
--------

**1.0.0 (Jul 30 2016)**
*    Main module functionality.
*    Including extension example demostrating module basic functionality of swapping CSS stylesheets when brightness change event is triggered.

**0.0.0 (Jul 23 2016)**
*    Initial development.

--------
## License
MIT © [Antonio Gomez][2]

[0]: https://github.com/Adobe-CEP/CEP-Resources
[1]: https://github.com/antonio-gomez/photoshop-ui-manager/tree/master/example
[2]: http://antoniogomez.me/