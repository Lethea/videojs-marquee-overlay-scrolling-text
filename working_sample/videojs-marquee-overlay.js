/**
 * @videojs-marquee-overlay/videojs-marquee-overlay
 * @version 1.0.4
 * @copyright 2017 Emre Karatasoglu (emre.karatasoglu@hotmail.com)
 * @license Apache-2.0
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('video.js')) :
	typeof define === 'function' && define.amd ? define(['video.js'], factory) :
	(global.videojsMarqueeOverlay = factory(global.videojs));
}(this, (function (videojs) { 'use strict';

videojs = 'default' in videojs ? videojs['default'] : videojs;

var version = "1.0.4";

// Default options for the plugin.
var defaults = {
  contentOfMarquee: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  position: "bottom",
  direction: "left",
  duration: 15000,
  backgroundcolor: "#dedede",
  color: "#fefefe"
};

// Cross-compatibility for Video.js 5 and 6.
var registerPlugin = videojs.registerPlugin || videojs.plugin;
var dom = videojs.dom || videojs;

/**
 * Function to invoke when the player is ready.
 *
 * This is a great place for your plugin to initialize itself. When this
 * function is called, the player will have its DOM and child components
 * in place.
 *
 * @function onPlayerReady
 * @param    {Player} player
 *           A Video.js player object.
 *
 * @param    {Object} [options={}]
 *           A plain object containing options for the plugin.
 */
var onPlayerReady = function onPlayerReady(player, options) {
  player.addClass('vjs-marquee-overlay');
  var el = dom.createEl('div', {
    className: 'vjs-emre-marquee'
  });
  el.innerHTML = options.contentOfMarquee;
  player.el().appendChild(el);
  if (options.position == "bottom") {
    el.style.bottom = 0;
  } else {
    el.style.top = 0;
  }
  el.style.backgroundColor = options.backgroundcolor;
  el.style.color = options.color;
  player.on('timeupdate', function () {
    if (player.userActive()) {
      if (options.position == "bottom") {
        el.style.bottom = "30px";
      }
    } else {
      if (options.position == "bottom") {
        el.style.bottom = 0;
      }
    }
  });
  $(function () {
    $('.vjs-emre-marquee').marquee({
      duration: options.duration,
      gap: 50,
      delayBeforeStart: 0,
      direction: options.direction,
      duplicated: true
    });
  });
};

/**
 * A video.js plugin.
 *
 * In the plugin function, the value of `this` is a video.js `Player`
 * instance. You cannot rely on the player being in a "ready" state here,
 * depending on how the plugin is invoked. This may or may not be important
 * to you; if not, remove the wait for "ready"!
 *
 * @function marqueeOverlay
 * @param    {Object} [options={}]
 *           An object of options left to the plugin author to define.
 */
var marqueeOverlay = function marqueeOverlay(options) {
  var _this = this;

  this.ready(function () {
    onPlayerReady(_this, videojs.mergeOptions(defaults, options));
  });
};

// Register the plugin with video.js.
registerPlugin('marqueeOverlay', marqueeOverlay);

// Include the version number.
marqueeOverlay.VERSION = version;

return marqueeOverlay;

})));
