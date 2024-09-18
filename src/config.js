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
  interface: {
    markerHintDuration: 5000
  },
  chapters: [
    {
      name: 'The courtyard',
      time: 0,
      frame: calculateFrames( 0, 0 )
    },
    {
      name: 'The cave',
      time: 113.5,
      frame: calculateFrames( 1, 53.5 )
    },
    {
      name: 'The chamber',
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
      title: 'Note 1: Theatre of Memory',
      type: 'range',
      image: 'sparkle.gif',
      chapterIndex: 0,
      data: {
        frames: {
          from: calculateFrames( 0, 10 ),
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
      title: 'Note 2: Curtains',
      type: 'range',
      image: 'sparkle.gif',
      chapterIndex: 0,
      data: {
        frames: {
          from: calculateFrames( 0, 27 ),
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
      title: 'Note 3: Signs',
      type: 'range',
      image: 'sparkle.gif',
      chapterIndex: 0,
      data: {
        frames: {
          from: calculateFrames( 0, 45 ),
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
      title: 'Note 4: The protagonist AI',
      type: 'continuous',
      image: 'sparkle.gif',
      chapterIndex: 0,
      data: dataWaluigiCh1.filter((d) => d[0] > 3600)
    },

    /* CHAPTER 2 */
    {
      id: 'letters',
      title: 'Note 6: Letters',
      type: 'range',
      image: 'sparkle.gif',
      chapterIndex: 1,
      data: {
        frames: {
          from: calculateFrames( 2, 15 ),
          to: calculateFrames( 5, 49 )
        },
        position: {
          x: 900,
          y: 900
        }
      }
    },
    {
      id: 'K',
      title: 'Note 7: Killer',
      type: 'range',
      image: 'sparkle.gif',
      chapterIndex: 1,
      data: {
        frames: {
          from: calculateFrames( 2, 30 ),
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
      title: 'Note 5: Rotating stage',
      type: 'range',
      image: 'sparkle.gif',
      chapterIndex: 1,
      data: {
        frames: {
          from: calculateFrames( 1, 57 ),
          to: calculateFrames( 2, 15 )
        },
        position: {
          x: 960,
          y: 540
        }
      }
    },
    {
      id: 'waluigi-ch2',
      title: 'Note 8: Embodiment',
      type: 'continuous',
      image: 'sparkle.gif',
      chapterIndex: 1,
      data: dataWaluigiCh2.filter((d) => d[0] > 14640)
    },
    
    /* CHAPTER 3 */
    {
      id: 'stage-ch3',
      title: 'Note 11: Wall inscriptions',
      type: 'range',
      image: 'sparkle.gif',
      chapterIndex: 2,
      data: {
        frames: {
          from: calculateFrames( 7, 30 ),
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
      title: 'Note 10: Zombie',
      type: 'range',
      image: 'sparkle.gif',
      chapterIndex: 2,
      data: {
        frames: {
          from: calculateFrames( 6, 40 ),
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
      title: 'Note 12: GPT-3 XL',
      type: 'range',
      image: 'sparkle.gif',
      chapterIndex: 2,
      data: {
        frames: {
          from: calculateFrames( 8, 38 ),
          to: calculateFrames( 9, 3 )
        },
        position: {
          x: 415,
          y: 920
        }
      }
    },
    {
      id: 'loot',
      title: 'Note 9: Coughing loot',
      type: 'range',
      image: 'sparkle.gif',
      chapterIndex: 2,
      data: {
        frames: {
          from: calculateFrames( 6, 15 ),
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
      title: 'Note 14: Sliding stage',
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
      title: 'Note 13: The antagonist AI',
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