import fs from 'fs';
const file = fs.readFileSync( './ae-keyframes.txt' ).toString();
const lines = file
                .split('\n')
                .map(( line ) => { 
                  return line
                          .split('\t')
                          .map( (ele ) => {
                            return parseFloat( ele );
                          })
                          .filter( ( ele ) => {
                            return !isNaN( ele );
                          })
                          // .map( (ele, index) => {
                          //   if( index === 0 ){
                          //     return ele * (1000/60);
                          //   }
                          //   if( index === 1 ){
                          //     return ele / 1920;
                          //   }
                          //   if( index === 2 ){
                          //     return ele / 1080;
                          //   }
                          //   return ele ;
                          // })
                });



fs.writeFileSync( './keyframes.json', JSON.stringify(lines) );