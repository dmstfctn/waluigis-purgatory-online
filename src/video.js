export const $video = document.getElementById( 'video' );

export const videoSetTime = ( time ) => {
  $video.currentTime = time;
}

const videoSkip = ( amount ) => {
  const newTime = ($video.currentTime + amount < 0) ? 0 : $video.currentTime + amount;
  videoSetTime( newTime );
}

export const videoJumpBackward = () => {
  videoSkip( -10 );
}
export const videoJumpForward = () => {
  videoSkip( +10 );
}

export const videoPlay = () => {
  $video.play();
}

export const videoPause = () => {
  $video.pause();
}

export const videoToggle = () => {
  if( isPlaying ){
    videoPause();
  } else {
    videoPlay();
  }
}

let isPlaying = false;
$video.addEventListener("playing", () => {
  isPlaying = true;
});
$video.addEventListener("pause", () => {
  isPlaying = false;
});

export const videoIsPlaying = () => {
  return isPlaying;
}