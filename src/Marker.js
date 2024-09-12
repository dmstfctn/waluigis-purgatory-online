import CFG from './config.js';
import { videoPlay, videoPause, videoGetTime } from './video.js';

const $infoPanels = document.querySelectorAll('.info-panel');

const createData = function( type, data ){
  if( type === 'continuous') return data;
  if( type === 'range' ){
    const result = [];
    for( let i = data.frames.from; i < data.frames.to; i++ ){
      result.push([
        i, 
        data.position.x,
        data.position.y
      ])
    }
    return result;
  }
}

export const Marker = function( config ){
  this.id = config.id;
  this.chapterIndex = config.chapterIndex;
  this.data = createData( config.type, config.data );
  this.$ele = document.createElement('div');
  this.$ele.classList.add('hotspot');
  this.$ele.classList.add(`hotspot__${this.id}`);
  this.$ele.style.backgroundImage = `url(${config.image})`;
  this.$parent = false;
  this.$infoPanel = document.getElementById( this.id );
  this.$ele.addEventListener( 'click', ( e ) => {
    e.stopPropagation();
    videoPause();
    $infoPanels.forEach( ($panel) => {
      $panel.classList.remove('visible');
    });
    this.$infoPanel.classList.add('visible');
    this.isClicked = true;
  })
  this.$infoPanel.addEventListener('click', ( e ) => {
    videoPlay();
    this.$infoPanel.classList.remove('visible');
  })
}

Marker.prototype = {
  isVisible: false,
  isClicked: false,
  update: function(){
    if( !this.$parent ) return;
    const w = this.$parent.offsetWidth;
    const h = this.$parent.offsetHeight;
    videoGetTime( (seconds) => {
      const time = seconds * 1000;
      const frame = Math.floor( time / (1000/60) );
      const frameData = this.data.find( ele  => ele[0] === frame );
      if( frameData ){  
        const x = ( frameData[1] / CFG.video.size.w ) * w;
        const y = ( frameData[2] / CFG.video.size.h ) * h;
        this.$ele.style.transform = `translateX(${x}px) translateY(${y}px)`;
        this.$ele.classList.remove( 'hidden' );
        if( !this.isVisible ){
          this.isVisible = true;
          this._onVisible();
        }
      } else {
        this.$ele.classList.add( 'hidden' );
        if( this.isVisible ){
          this.isVisible = false;
          this._onHidden();
        }
      }
    });   
  },
  appendTo: function( $parent ){
    this.$parent = $parent;
    $parent.appendChild( this.$ele );
  },
  onVisible: function(){ /* override */ },
  _onVisible: function(){
    this.onVisible();
  },
  onHidden: function(){ /* override */ },
  _onHidden: function(){
    this.onHidden();
  }
}
