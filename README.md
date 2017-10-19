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
You can add to your project with
npm install --save videojs-marquee-overlay
Or
you can download
https://github.com/Lethea/videojs-marquee-overlay-scrolling-text or clone
git clone git@github.com:Lethea/videojs-marquee-overlay-scrolling-text.git then
npm install
```

## Usage

To include videojs-marquee-overlay on your website or web application, use any of the following methods.

videojs-marquee-overlay has 2 more examples with hls quaility selector + watermark addon.

Both of examples works. You can check in examples directory

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
### No Need to build
Working Example Included Built Scripts in Working_sample Directory
With
Quailty Selector
Scroll Text ( Marquee Plugin )
Watermark
Playback Speed

## License

Apache-2.0. Copyright (c) Emre Karatasoglu (emre.karatasoglu@hotmail.com)


[videojs]: http://videojs.com/
