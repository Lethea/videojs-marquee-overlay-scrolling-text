# videojs-marquee-overlay

marquee plugin on video 

Sample image : http://prntscr.com/gwflh5

This will provide scrolling text on video both normal screen & full screen.
Hls.js included
Jquery included

## Table of Contents

<!-- START doctoc -->
<!-- END doctoc -->
## Installation

```sh
npm install --save videojs-marquee-overlay
Or
you can download
https://github.com/Lethea/videojs-marquee-overlay-scrolling-text or clone
git clone https://github.com/Lethea/videojs-marquee-overlay-scrolling-text
npm install
```

## Usage

To include videojs-marquee-overlay on your website or web application, use any of the following methods.

### `<script>` Tag

This is the simplest case. Get the script in whatever way you prefer and include the plugin _after_ you include [video.js][videojs], so that the `videojs` global is available.

```html
<script src="node_modules/video.js/dist/video.js"></script>
<script src="dist/videojs-marquee-overlay.js"></script>
<script src="node_modules/videojs-contrib-hls/dist/videojs-contrib-hls.js"></script>
<script src="node_modules/jquery/dist/jquery.js"></script>
<script src="node_modules/jquery.marquee/jquery.marquee.js"></script>
<script>
  var player = videojs('my-video');

  player.marqueeOverlay({
      contentOfMarquee: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      position: "bottom",
      direction: "left",
      duration: 15000,
      backgroundcolor: "red",
      color: "#fefefe"
    });
</script>
```

### Browserify/CommonJS

When using with Browserify, install videojs-marquee-overlay via npm and `require` the plugin as you would any other module.

```js
var videojs = require('video.js');

// The actual plugin function is exported by this module, but it is also
// attached to the `Player.prototype`; so, there is no need to assign it
// to a variable.
require('videojs-marquee-overlay');

var player = videojs('my-video');

player.marqueeOverlay();
```

### RequireJS/AMD

When using with RequireJS (or another AMD library), get the script in whatever way you prefer and `require` the plugin as you normally would:

```js
require(['video.js', 'videojs-marquee-overlay'], function(videojs) {
  var player = videojs('my-video');

  player.marqueeOverlay();
});
```

## License

Apache-2.0. Copyright (c) Emre Karatasoglu (emre.karatasoglu@hotmail.com)


[videojs]: http://videojs.com/
