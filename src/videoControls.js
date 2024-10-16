import CFG, { calculateFrames } from './config.js';

import { 
  videoPlayer,
  videoJumpBackward,
  videoJumpForward,
  videoSetTime,
  videoSetChapter,
  videoSetChapterIndex,
  videoGetChapterIndex,
  videoToggle,
  videoNextChapter,
  videoPrevChapter,
  videoIsPlaying,
  videoPlay,
  videoPause
} from './video.js';

import { markers } from './interface.js';

const $overlay = document.getElementById('overlay');
const $progress = document.getElementById('progress');
const $progressIndicatorBar = $progress.querySelector('.progress--indicator .bar');
const $progressIndicatorNotes = $progress.querySelector('.progress--indicator .notes');
const $chapters = document.getElementById('chapters');
const $btnChapters = [];
const $notes = [];
let showProgressTimeout;

export const showProgressTemp = ( $note=false ) => {
  $progress.classList.add('visible');
  $overlay.classList.add('active');
  $notes.forEach(( $n ) => {
    $n.classList.remove('just-active');
  });
  if( $note ){
    $note.classList.add('just-active');
  }
  clearTimeout( showProgressTimeout );
  showProgressTimeout = setTimeout(()=>{
    $progress.classList.remove('visible');
    $overlay.classList.remove('active');        
    $notes.forEach(( $n ) => {
      $n.classList.remove('just-active');
    });
  }, CFG.interface.markerHintDuration );
}

videoPlayer.getDuration().then( (duration) => {
  const totalFrames = calculateFrames( Math.floor(duration / 60), duration % 60 );

  CFG.chapters.forEach( (chapter, i ) => {
    const pos = (chapter.frame / totalFrames) * 100;
    const $btn = document.createElement('button');
    $btn.name = chapter.name;
    $btn.innerText = chapter.name;
    $btn.classList.add('chapter');
    $btn.style.left = `${pos}%`;
  
    $btn.addEventListener( 'click', () => {
      $btnChapters.forEach( ($other) => {
        $other.classList.remove( 'seeking' );
      });
      $btn.classList.add('seeking');
      if( !videoIsPlaying() ){
        videoPlay();
      }
      videoSetChapter( i );
    });
    $chapters.appendChild( $btn );
    $btnChapters.push( $btn );
  });

  let markerShowPanelTimeout;  
  markers.forEach( (marker, i ) => {
    const num = i + 1;
    const pos = (marker.getStartingFrameNumber() / totalFrames) * 100;
    const $note = document.createElement('span');
    $note.classList.add('note');
    //$note.innerText = num;
    $note.style.left = `${ pos }%`;
    
    const $title = document.createElement('span');
    $title.classList.add('title');
    $title.innerText = marker.title;
    
    $note.appendChild( $title );

    $progressIndicatorNotes.appendChild( $note );

    $note.addEventListener( 'click', () => {                     
      videoSetTime( marker.data[0][0] / CFG.video.framerate );
      if( !videoIsPlaying() ){
        videoPlay();
      }
      clearTimeout( markerShowPanelTimeout );
      markerShowPanelTimeout = setTimeout( () => {
        videoPause();
        marker.showPanel();
      }, 500 );
    });

    marker.onVisible = function(){
      showProgressTemp( $note );
    };

    $notes.push( $note );
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

const $btnJumpForward = document.querySelector('#video-controls button[name="forward"]');
const $btnJumpBackward = document.querySelector('#video-controls button[name="backward"]');

$btnJumpForward.addEventListener('click', () => {
  videoJumpForward();
});

$btnJumpBackward.addEventListener('click', () => {
  videoJumpBackward();
});