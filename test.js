const importer = require('./importer.js');
const parser = require('./parser.js');

var table = importer.read('corporations.csv');
parser.getRow(table);
