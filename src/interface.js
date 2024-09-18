import CFG from "./config.js";
import { hideAllPanels, Marker } from "./Marker.js";
import { videoPlayer, videoPlay, videoPause, videoIsPlaying, videoGetChapterIndex } from './video';
import { controlsHighlightChapter } from "./videoControls.js";

const $overlay = document.getElementById( 'overlay' );

export const markers = [];
CFG.markers.forEach( (config) => {
  const marker = new Marker( config );
  marker.appendTo( $overlay );
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

videoPlayer.on('play', () => {
  hideAllPanels();
  $progressNotes.classList.add('show');
});

videoPlayer.on('pause', () => {
  $progressNotes.classList.remove('show');
});