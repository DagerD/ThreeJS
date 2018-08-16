# threejs-transformcontrols

A module for using THREE.TransformControls with nodejs

See the [original](http://threejs.org/examples/#misc_controls_transform) for
a demo.

Updated for THREE __R83__.

## Installation

`npm install threejs-transformcontrols`

## Usage

```javascript
var TransformControls = require('threejs-transformcontrols');
var controls = new TransformControls(camera, domElement);
```

## Development

Ensure you have the same node environment using nvm.

`npm install -g nvm`
`nvm use`

Then install as usual

`npm install`

## Testing

Make sure you have loaded the nvm environment

`nvm use`

Then test as usual

`npm test`

