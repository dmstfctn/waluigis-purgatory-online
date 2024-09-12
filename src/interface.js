import CFG from "./config.js";
import { Marker } from "./Marker.js";
import { videoPlay, videoPause, videoIsPlaying } from './video';
import { controlsHighlightChapter } from "./videoControls.js";

const $overlay = document.getElementById( 'overlay' );

const markers = [];
CFG.markers.forEach( (config) => {
  const marker = new Marker( config );
  marker.appendTo( $overlay );
  marker.onVisible = function(){
    controlsHighlightChapter( config.chapterIndex );
  };
  markers.push( marker );
});

const frame = () => {
  requestAnimationFrame( frame );  
  markers.forEach( (marker) => {
    marker.update();
  });
}
requestAnimationFrame( frame );

let overlayShowTimeout = false;
$overlay.addEventListener( 'mousemove', () => {
  $overlay.classList.add( 'active' );
  clearTimeout( overlayShowTimeout );
  overlayShowTimeout = setTimeout( () => {
    $overlay.classList.remove( 'active' );
  }, 2000 );
});

$overlay.addEventListener( 'click', () => {
  if( videoIsPlaying() ){
    videoPause();
  } else {
    videoPlay();
  }
});

