import CFG from './config.js';

import { $video, videoJumpBackward  , videoJumpForward, videoSetTime, videoToggle } from './video.js';

const $chapters = document.getElementById('chapters');
const $btnChapters = [];

CFG.chapters.forEach( (chapter) => {
  const $btn = document.createElement('button');
  $btn.name = chapter.name;
  $btn.innerText = chapter.name;
  $btn.classList.add('chapter');

  $btn.addEventListener( 'click', () => {
    $btnChapters.forEach( ($other) => {
      $other.classList.remove( 'current' );
    });
    $btn.classList.add('current');
    videoSetTime( chapter.time );
  });
  $chapters.appendChild( $btn );
  $btnChapters.push( $btn );
});

$video.addEventListener('timeupdate', () => {
  const time = $video.currentTime;
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

$video.addEventListener('pause', () => {
  $btnPlayPause.innerText = 'play';
});

$video.addEventListener('playing', () => {
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