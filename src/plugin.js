import videojs from 'video.js';
import {version as VERSION} from '../package.json';

// Default options for the plugin.
const defaults = {
  contentOfMarquee: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  position: "bottom",
  direction: "left",
  duration: 15000,
  backgroundcolor: "#dedede",
  color: "#fefefe",
};

// Cross-compatibility for Video.js 5 and 6.
const registerPlugin = videojs.registerPlugin || videojs.plugin;
const dom = videojs.dom || videojs;

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
const onPlayerReady = (player, options) => {
  player.addClass('vjs-marquee-overlay');
  const el = dom.createEl('div', {
    className: `vjs-emre-marquee`
  });
  el.innerHTML = options.contentOfMarquee;
  player.el().appendChild(el);
  if (options.position == "bottom") {
    el.style.bottom = 0;
  } else {
    el.style.top = 0;
  }
  el.style.backgroundColor=options.backgroundcolor;
  el.style.color=options.color;
  player.on('timeupdate', function () {
    if (player.userActive()) {
      if(options.position == "bottom"){
        el.style.bottom = "30px";
      }
    } else {
      if(options.position == "bottom") {
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
const marqueeOverlay = function (options) {
  this.ready(() => {
    onPlayerReady(this, videojs.mergeOptions(defaults, options));
  });
  marqueeOverlay.changeString=function(scrollingText){
    $(".js-marquee").html(scrollingText)
  }
};

// Register the plugin with video.js.
registerPlugin('marqueeOverlay', marqueeOverlay);

// Include the version number.
marqueeOverlay.VERSION = VERSION;

export default marqueeOverlay;
