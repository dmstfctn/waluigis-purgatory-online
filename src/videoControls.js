import CFG, { calculateFrames } from './config.js';

import { 
  videoPlayer,
  videoJumpBackward,
  videoJumpForward,
  videoSetChapter,
  videoSetChapterIndex,
  videoGetChapterIndex,
  videoToggle,
  videoNextChapter,
  videoPrevChapter
} from './video.js';

import { markers } from './interface.js';

const $progress = document.getElementById('progress');
const $progressIndicatorBar = $progress.querySelector('.progress--indicator .bar');
const $progressIndicatorNotes = $progress.querySelector('.progress--indicator .notes');
const $chapters = document.getElementById('chapters');
const $btnChapters = [];

export const controlsHighlightChapter = ( index ) => {
  if( $btnChapters[ index ] ){
    $btnChapters[ index ].animate(
      [
        { opacity: 0 },
        { opacity: 0, offset: 0.5 },
        { opacity: 1, offset: 0.51 },
        { opacity: 1 },
      ],
      {
        duration: 500,
        iterations: 10
      }
    )
  }
}

CFG.chapters.forEach( (chapter, i ) => {
  const $btn = document.createElement('button');
  $btn.name = chapter.name;
  $btn.innerText = chapter.name;
  $btn.classList.add('chapter');

  $btn.addEventListener( 'click', () => {
    $btnChapters.forEach( ($other) => {
      $other.classList.remove( 'seeking' );
    });
    $btn.classList.add('seeking');
    videoSetChapter( i );
  });
  $chapters.appendChild( $btn );
  $btnChapters.push( $btn );
});

videoPlayer.getDuration().then( (duration) => {
  const totalFrames = calculateFrames( Math.floor(duration / 60), duration % 60 );
  markers.forEach( (marker, i ) => {
    const num = i + 1;
    const pos = (marker.getStartingFrameNumber() / totalFrames) * 100;
    const $note = document.createElement('span');
    $note.classList.add('note');
    $note.innerText = num;
    $note.style.left = `${ pos }%`;
    $progressIndicatorNotes.appendChild( $note );
  });
})

videoPlayer.on('timeupdate', ( { seconds } ) => {
  const time = seconds;

  videoPlayer.getDuration().then( (duration) => {
    const progress = (seconds/duration) * 100
    $progressIndicatorBar.style.width = `${ progress }%`;
    $progressIndicatorNotes.querySelectorAll('.note').forEach( ($note) => {
      if( parseFloat($note.style.left) < progress ){
        $note.classList.add('gone');
      } else {
        $note.classList.remove('gone');
      }
    })
  });

  for( let i = 0; i < CFG.chapters.length; i++ ){
    const chapterTime = CFG.chapters[i].time;
    const nextChapterTime = (CFG.chapters[i+1]) ? CFG.chapters[i+1].time : Infinity;
    if( time >= chapterTime && time <= nextChapterTime ){
      $btnChapters.forEach( ($other) => {
        $other.classList.remove( 'current' );
      });
      $btnChapters[i].classList.add('current');
      videoSetChapterIndex( i );
      break;
    }
  }
});

document.body.addEventListener('keydown', ( e ) => {
  console.log(e);
  if( e.key === 'ArrowRight' ){
    videoJumpForward();
  } else if( e.key === 'ArrowLeft' ){
    videoJumpBackward();
  } else if( e.key === 'ArrowUp' ){
    videoPrevChapter();
  } else if ( e.key === 'ArrowDown' ){
    videoNextChapter();
  }else if( e.key === ' ' ){
    videoToggle();
  }
});

// $btnPlayPause.addEventListener('click', () => {
//   videoToggle();
// });

// videoPlayer.on('pause', () => {
//   $btnPlayPause.innerText = 'play';
// });

// videoPlayer.on('play', () => {
//   $btnPlayPause.innerText = 'pause';
// });

const $btnJumpForward = document.querySelector('#buttons #time button[name="forward"]');
const $btnJumpBackward = document.querySelector('#buttons #time button[name="backward"]');

$btnJumpForward.addEventListener('click', () => {
  videoJumpForward();
});

$btnJumpBackward.addEventListener('click', () => {
  videoJumpBackward();
});