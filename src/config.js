import dataWaluigiCh1 from './data/chapter1.json';
import dataWaluigiCh2 from './data/chapter2.json';
import dataWaluigiCh3 from './data/chapter3.json';
import dataWaluigiCh4 from './data/chapter4.json';

const FRAMERATE = 60;
export const calculateFrames = ( minutes, seconds ) => {
  return ( (minutes * 60) * FRAMERATE ) + (seconds * FRAMERATE);
}

export default {
  video: {
    size: {
      w: 1920,
      h: 1080
    },
    framerate: FRAMERATE
  },
  chapters: [
    {
      name: 'The Courtyard',
      time: 0,
      frame: calculateFrames( 0, 0 )
    },
    {
      name: 'The Cave',
      time: 113.5,
      frame: calculateFrames( 1, 53.5 )
    },
    {
      name: 'The Chamber',
      time: 361.5,
      frame: calculateFrames( 6, 1.5 )
    },
    {
      name: 'Corridors',
      time: 557.7,
      frame: calculateFrames( 9, 17.7 )
    }
  ],
  markers: [
    /* CHAPTER 1 */
    {
      id: 'checkerboard',
      title: 'TITLE',
      type: 'range',
      image: 'sparkle.gif',
      chapterIndex: 0,
      data: {
        frames: {
          from: calculateFrames( 0, 2 ),
          to: calculateFrames( 0, 39 )
        },
        position: {
          x: 1500,
          y: 900
        }
      }
    },
    {
      id: 'curtains',
      title: 'TITLE',
      type: 'range',
      image: 'sparkle.gif',
      chapterIndex: 0,
      data: {
        frames: {
          from: calculateFrames( 0, 2 ),
          to: calculateFrames( 0, 39 )
        },
        position: {
          x: 140,
          y: 180
        }
      }
    },
    {
      id: 'sign',
      title: 'TITLE',
      type: 'range',
      image: 'sparkle.gif',
      chapterIndex: 0,
      data: {
        frames: {
          from: calculateFrames( 0, 43 ),
          to: calculateFrames( 1, 33 )
        },
        position: {
          x: 1500,
          y: 180
        }
      }
    },
    {
      id: 'waluigi-ch1',
      title: 'TITLE',
      type: 'continuous',
      image: 'sparkle.gif',
      chapterIndex: 0,
      data: dataWaluigiCh1
    },

    /* CHAPTER 2 */
    {
      id: 'letters',
      title: 'TITLE',
      type: 'range',
      image: 'sparkle.gif',
      chapterIndex: 1,
      data: {
        frames: {
          from: calculateFrames( 1, 57 ),
          to: calculateFrames( 2, 15 )
        },
        position: {
          x: 900,
          y: 900
        }
      }
    },
    {
      id: 'K',
      title: 'TITLE',
      type: 'range',
      image: 'sparkle.gif',
      chapterIndex: 1,
      data: {
        frames: {
          from: calculateFrames( 2, 18 ),
          to: calculateFrames( 5, 49 )
        },
        position: {
          x: 1557,
          y: 587
        }
      }
    },
    {
      id: 'stage',
      title: 'TITLE',
      type: 'range',
      image: 'sparkle.gif',
      chapterIndex: 1,
      data: {
        frames: {
          from: calculateFrames( 1, 57 ),
          to: calculateFrames( 2, 16 )
        },
        position: {
          x: 960,
          y: 540
        }
      }
    },
    {
      id: 'waluigi-ch2',
      title: 'TITLE',
      type: 'continuous',
      image: 'sparkle.gif',
      chapterIndex: 1,
      data: dataWaluigiCh2
    },
    
    /* CHAPTER 3 */
    {
      id: 'stage-ch3',
      title: 'TITLE',
      type: 'range',
      image: 'sparkle.gif',
      chapterIndex: 2,
      data: {
        frames: {
          from: calculateFrames( 6, 3 ),
          to: calculateFrames( 9, 3 )
        },
        position: {
          x: 960,
          y: 540
        }
      }
    },
    {
      id: 'Z',
      title: 'TITLE',
      type: 'range',
      image: 'sparkle.gif',
      chapterIndex: 2,
      data: {
        frames: {
          from: calculateFrames( 6, 3 ),
          to: calculateFrames( 7, 30 )
        },
        position: {
          x: 800,
          y: 600
        }
      }
    },
    {
      id: 'G',
      title: 'TITLE',
      type: 'range',
      image: 'sparkle.gif',
      chapterIndex: 2,
      data: {
        frames: {
          from: calculateFrames( 6, 3 ),
          to: calculateFrames( 7, 30 )
        },
        position: {
          x: 415,
          y: 920
        }
      }
    },
    {
      id: 'loot',
      title: 'TITLE',
      type: 'range',
      image: 'sparkle.gif',
      chapterIndex: 2,
      data: {
        frames: {
          from: calculateFrames( 6, 3 ),
          to: calculateFrames( 7, 30 )
        },
        position: {
          x: 1150,
          y: 780
        }
      }
    },
    /* CHAPTER 4 */
    {
      id: 'stage-ch4',
      title: 'TITLE',
      type: 'range',
      image: 'sparkle.gif',
      chapterIndex: 3,
      data: {
        frames: {
          from: calculateFrames( 10, 0 ),
          to: calculateFrames( 11, 48 )
        },
        position: {
          x: 960,
          y: 540
        }
      }
    },
    {
      id: 'entrance',
      title: 'TITLE',
      type: 'range',
      image: 'sparkle.gif',
      chapterIndex: 3,
      data: {
        frames: {
          from: calculateFrames( 9, 20 ),
          to: calculateFrames( 9, 57 )
        },
        position: {
          x: 200,
          y: 700
        }
      }
    }
  ]
}