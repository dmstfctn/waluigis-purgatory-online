import CFG from "./config.js";
import { hideAllPanels, Marker } from "./Marker.js";
import { videoPlayer, videoPlay, videoPause, videoIsPlaying, videoGetChapterIndex } from './video';
import { controlsHighlightChapter } from "./videoControls.js";

const $overlay = document.getElementById( 'overlay' );

const $progressNotes = document.querySelector( '#progress .progress--notes' );
const $notesRead = document.getElementById( 'notes-read' );
const $notesTotal = document.getElementById( 'notes-total' );

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
  const chapterIndex = videoGetChapterIndex();
  const chapterMarkersTotal = markers.filter( ( marker ) => marker.chapterIndex === chapterIndex ).length;
  const chapterMarkersClicked = markers.filter( ( marker ) => marker.chapterIndex === chapterIndex && marker.isClicked ).length;
  $notesTotal.innerText = chapterMarkersTotal;
  $notesRead.innerHTML = chapterMarkersClicked;
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