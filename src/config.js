import dataWaluigiCh1 from './data/chapter1.json';
import dataWaluigiCh2 from './data/chapter2.json';
import dataWaluigiCh3 from './data/chapter3.json';
import dataWaluigiCh4 from './data/chapter4.json';

export default {
  video: {
    size: {
      w: 1920,
      h: 1080
    }
  },
  chapters: [
    {
      name: 'The Courtyard',
      time: 0
    },
    {
      name: 'The Cave',
      time: 113.5
    },
    {
      name: 'The Chamber',
      time: 361.5
    },
    {
      name: 'Corridors',
      time: 557.7
    }
  ],
  markers: [
    {
      id: 'waluigi-ch1',
      type: 'continuous',
      image: 'image.png',
      data: dataWaluigiCh1
    },
    {
      id: 'waluigi-ch2',
      type: 'continuous',
      image: 'image.png',
      data: dataWaluigiCh2
    },
    {
      id: 'waluigi-ch3',
      type: 'continuous',
      image: 'image.png',
      data: dataWaluigiCh3
    },
    {
      id: 'waluigi-ch4',
      type: 'continuous',
      image: 'image.png',
      data: dataWaluigiCh4
    },
    {
      id: 'checkerboard',
      type: 'range',
      image: 'image.png',
      data: {
        frames: {
          from: 120,
          to: 1800
        },
        position: {
          x: 1496,
          y: 907
        }
      }
    }
  ]
}