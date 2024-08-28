import CFG from "./config.js";
import { Marker } from "./Marker.js";
import { videoPlay, videoPause, videoIsPlaying } from './video';

const $video = document.getElementById( 'video' );
const $overlay = document.getElementById( 'overlay' );
// const $waluigi = document.getElementById( 'waluigi' );
// const $waluigiInfo = document.getElementById( 'waluigi-info' );

// const fullW = 1920;
// const fullH = 1080;

// const updateOverlay = () => {
//   const w = $video.offsetWidth; 
//   const h = $video.offsetHeight;  
//   const time = $video.currentTime * 1000;
//   const frame = Math.floor( time / (1000/60) );
//   const frameData = dataWaluigi.find( ele  => ele[0] === frame );
//   if( frameData ){  
//     const x = ( frameData[1] / fullW ) * w;
//     const y = ( frameData[2] / fullH ) * h;
//     $waluigi.style.transform = `translateX(${x}px) translateY(${y}px)`;
//     $waluigi.classList.remove( 'hidden' );
//   } else {
//     $waluigi.classList.add( 'hidden' );
//   }
// }

//$video.addEventListener( 'timeupdate', ( e ) => {
  //updateOverlay();
//});

const markers = [];
CFG.markers.forEach( (config) => {
  const marker = new Marker( config );
  marker.appendTo( $overlay );
  markers.push( marker );
});


const frame = () => {
  requestAnimationFrame( frame );
  // updateOverlay();
  markers.forEach( (marker) => {
    marker.update();
  });
}
requestAnimationFrame( frame );

// $waluigi.addEventListener('click', ( e ) => {
//   e.stopPropagation();
//   videoPause();
//   $waluigiInfo.classList.add('visible');
// });
// $waluigiInfo.addEventListener('click', () => {
//   videoPlay();
//   $waluigiInfo.classList.remove('visible');
// })

$overlay.addEventListener( 'click', () => {
  if( videoIsPlaying() ){
    videoPause();
  } else {
    videoPlay();
  }
});

