import Vimeo from '@vimeo/player';

import CFG from './config.js';

let videoCurrentChapter = 0;

export const videoPlayer = new Vimeo('video', {
  url: 'https://vimeo.com/1128836133',
  airplay: false,
  autoplay: false,
  muted: false,
  autopause: false,
  background: false,
  byline: false,
  controls: false,
  dnt: true,
  width: 1920,
  height: 1080,
  loop: false,
  pip: false,
  playsinline: true,
  responsive: true,
  transparent: true,
  volume: true
});

export const videoGetTime = ( cb = () => {} ) => {
  videoPlayer.getCurrentTime().then( ( seconds ) => {
    cb( seconds );
  })
}

export const videoSetTime = ( time ) => {
  videoPlayer.setCurrentTime( time );
}

export const videoSetChapterIndex = (index) => {
  videoCurrentChapter = index;
}

export const videoGetChapterIndex = (index) => {
  return videoCurrentChapter;
}

export const videoSetChapter = ( index ) => {
  if( CFG.chapters[index] ){
    videoSetTime( CFG.chapters[index].time );
    videoSetChapterIndex( index );
  }
}

export const videoNextChapter = () => {
  videoSetChapter( videoCurrentChapter + 1 );
}

export const videoPrevChapter = () => {
  videoSetChapter( videoCurrentChapter - 1 );
}

const videoSkip = ( amount ) => {
  videoGetTime( ( time ) => {
    const newTime = (time + amount < 0) ? 0 : time + amount;
    videoSetTime( newTime );
  });
}

export const videoJumpBackward = () => {
  videoSkip( -10 );
}
export const videoJumpForward = () => {
  videoSkip( +10 );
}

export const videoPlay = () => {
  videoPlayer.play();
}

export const videoPause = () => {
  videoPlayer.pause();
}

export const videoToggle = () => {
  if( isPlaying ){
    videoPause();
  } else {
    videoPlay();
  }
}

let isPlaying = false;
videoPlayer.on("play", () => {
  isPlaying = true;
});
videoPlayer.on("pause", () => {
  isPlaying = false;
});

export const videoIsPlaying = () => {
  return isPlaying;
}
