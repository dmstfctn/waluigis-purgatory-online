import dataWaluigi from './data/waluigi-keyframes.json';

export default {
  video: {
    size: {
      w: 1920,
      h: 1080
    }
  },
  chapters: [
    {
      name: 'Courtyard',
      time: 0
    },
    {
      name: 'K Hole',
      time: 20
    },
    {
      name: 'Chamber',
      time: 40
    },
    {
      name: 'Corridors',
      time: 60
    }
  ],
  markers: [
    {
      id: 'waluigi',
      type: 'continuous',
      image: 'image.png',
      data: dataWaluigi
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