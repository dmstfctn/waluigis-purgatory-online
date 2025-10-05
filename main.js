import '/src/interface.js';
import '/src/videoControls.js';
// import '/src/config.js'
// import { calculateFrames } from './src/config.js';

window.location.search.replace('?','').split('&').forEach( (entry) => { 
    const [cmd, val] = entry.split('=');
    if( cmd === 'pane' ){
        //document.getElementById( val ).style.opacity = 1;
        document.getElementById( val ).classList.add('visible');
        document.getElementById( val ).querySelectorAll('img, video').forEach(( $ele ) => { 
            $ele.src = $ele.dataset.src;
        });
        // const time = calculateFrames( 1, 57 );
        // videoSetTime( time );
    }
})