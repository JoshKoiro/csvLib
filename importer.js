const fs = require('fs');

var read = function(file){
  fs.readFile(file,function(err,data){
    if(err){
      return console.log(err);
    }
    console.log('import success!');
    return data;
    });
};
var exports = module.exports;
exports.read = read;
