const importer = require('./importer.js');
const parser = require('./parser.js');

const table = importer.read('corporations.csv');

//FIXME output is "Promise {<pending>}" should be raw csv data
console.log(table);
parser.getRow(table);
