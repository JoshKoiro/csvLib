const readFile = require('fs-readfile-promise');

const onFulfilled = buffer => console.log(buffer.toString());
const onRejected = err => console.log('Cannot read the file.');

var read = function(file){
  readFile(file).then(onFulfilled, onRejected);
};

var exports = module.exports;
exports.read = read;
