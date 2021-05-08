const {src, dest, watch, series} = require('gulp');

/**
 * 
 * Move Files and Folder from 
 * 'build' folder to 
 * /DDEV/D9-TW-Restaurant-theme/web/tw2-01-restaurant
 * 
 */

function moveFiles(){
  return src('./build/**/*.*')
  .pipe(dest('../../DDEV/D9-TW-Restaurant-Theme/web/tw2-01-restaurant'))
}

function watchTask(){
  watch('./build/*.*');
}

//default gulp
exports.default = series(moveFiles, watchTask);