const fs = require('fs');


let openFile = (file,hiddenLayer) => {
  fs.readFile(file,'utf-8',function(err,data){
  if(err){
    return console.log(err);
  }
  hiddenLayer(data)
  });
  return
}

module.exports = openFile;
