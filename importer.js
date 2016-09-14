const readFile = require('fs-readfile-promise');

//TODO Look at how promises are formatted
const onFulfilled = buffer => buffer;
const onRejected = err => console.log('Cannot read the file.');

var read = function(file){
  readFile(file).then(onFulfilled, onRejected);
};

var exports = module.exports;
exports.read = read;
