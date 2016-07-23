## Photoshop-UI-Manager

[![npm-image](https://img.shields.io/badge/npm-v0.0.0-ff69b4.svg)](https://www.npmjs.com/package/photoshop-ui-manager)
![version-image](https://img.shields.io/badge/license-MIT-ff69b4.svg)

#### Install
--------
```
npm install photoshop-ui-manager --save
```

#### Description
-----------
Node.js module that listens to Adobe Photoshop working area brightness change event then loads a designated css stylesheet so the running extension (custom panel) matches the application user interface four shades of gray.


#### Example
--------
```
var photoshopUIManager = require('photoshop-ui-manager');

photoshopUIManager.init({
	'dark'      : 'css/dark-ui.css',
	'darkGray'  : 'css/dark-gray-ui.css',
	'lightGray' : 'css/light-gray-ui.css',
	'gray'      : 'css/gray-ui.css'
});
```


#### Changelog
--------

**0.0.0 (Jul 23 2016)**
*    Initial development.

--------
## License
MIT © [Antonio Gomez][0]

[0]: http://antoniogomez.me/