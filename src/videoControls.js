import CFG from './config.js';

import { videoPlayer, videoJumpBackward, videoJumpForward, videoSetTime, videoGetTime, videoToggle } from './video.js';

const $chapters = document.getElementById('chapters');
const $btnChapters = [];

CFG.chapters.forEach( (chapter) => {
  const $btn = document.createElement('button');
  $btn.name = chapter.name;
  $btn.innerText = chapter.name;
  $btn.classList.add('chapter');

  $btn.addEventListener( 'click', () => {
    $btnChapters.forEach( ($other) => {
      $other.classList.remove( 'seeking' );
    });
    $btn.classList.add('seeking');
    videoSetTime( chapter.time );
  });
  $chapters.appendChild( $btn );
  $btnChapters.push( $btn );
});

videoPlayer.on('timeupdate', ( { seconds } ) => {
  const time = seconds;
  for( let i = 0; i < CFG.chapters.length; i++ ){
    const chapterTime = CFG.chapters[i].time;
    const nextChapterTime = (CFG.chapters[i+1]) ? CFG.chapters[i+1].time : Infinity;
    if( time >= chapterTime && time <= nextChapterTime ){
      $btnChapters.forEach( ($other) => {
        $other.classList.remove( 'current' );
      });
      $btnChapters[i].classList.add('current');
      break;
    }
  }
});

const $btnPlayPause = document.querySelector('#playpause button');

$btnPlayPause.addEventListener('click', () => {
  videoToggle();
});

videoPlayer.on('pause', () => {
  $btnPlayPause.innerText = 'play';
});

videoPlayer.on('play', () => {
  $btnPlayPause.innerText = 'pause';
});

const $btnJumpForward = document.querySelector('#buttons #time button[name="forward"]');
const $btnJumpBackward = document.querySelector('#buttons #time button[name="backward"]');

$btnJumpForward.addEventListener('click', () => {
  videoJumpForward();
});

$btnJumpBackward.addEventListener('click', () => {
  videoJumpBackward();
});