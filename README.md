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

### Samples
```html
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>videojs-marquee-overlay Demo</title>
  <link href="video-js.css" rel="stylesheet">
  <link href="videojs.watermark.css" rel="stylesheet">

</head>
<body>
<video id="videojs-marquee-overlay-player" class="video-js vjs-default-skin" controls width="848" height="480"  data-setup='{"playbackRates": [1, 1.5, 2] }'>
  <source src="http://sample.vodobox.net/skate_phantom_flex_4k/skate_phantom_flex_4k.m3u8" type="application/x-mpegurl">
</video>

<script src="video.js"></script>
<script src="videojs-marquee-overlay.js"></script>
<script src="videojs-contrib-hls.js"></script>
<script src="jquery.js"></script>
<script src="videojs5-hlsjs-source-handler.js"></script>
<script src="jquery.marquee.js"></script>
<script src="videojs.watermark.js"></script>
<script>
  (function (window, videojs) {
    var player = window.player = videojs('videojs-marquee-overlay-player');
    player.marqueeOverlay({
      contentOfMarquee: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      position: "bottom",
      direction: "left",
      duration: 15000,
      backgroundcolor: "red",
      color: "#fefefe"
    });
    player.qualityPickerPlugin();
    player.watermark({
      file: 'Owned_Stamp.png',
      xpos: 100,
      ypos: 0,
      clickable:true,
      url:"http://emrekaratasoglu.com",
      xrepeat: 0,
      opacity: 0.5
    });
  }(window, window.videojs));

</script>
<style>
  .vjs-emre-marquee {
    width: 100%;
    overflow: hidden;
    border: 1px solid #ccc;
    z-index:9998;
    position:absolute;
    font-size: 20px;
  }
  .vjs-control{
    z-index:9999;
  }
</style>

</body>
</html>
```


## License

Apache-2.0. Copyright (c) Emre Karatasoglu (emre.karatasoglu@hotmail.com)


[videojs]: http://videojs.com/
