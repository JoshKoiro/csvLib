var fs = require('fs');

let saveFile = (data,filename) => {
fs.writeFile(filename, data, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});
  return
}

module.exports = saveFile;
