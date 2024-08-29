import CFG from "./config.js";
import { Marker } from "./Marker.js";
import { videoPlay, videoPause, videoIsPlaying } from './video';

const $overlay = document.getElementById( 'overlay' );

const markers = [];
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

$overlay.addEventListener( 'click', () => {
  if( videoIsPlaying() ){
    videoPause();
  } else {
    videoPlay();
  }
});

