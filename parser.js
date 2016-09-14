var exports = module.exports;

//Macro functions ---------------------------------

function getHeaders(table){
  var rows = getRow(table);
  var header = rows[0];
  var headers = header.split(',');
  //TODO get table headers
  return headers;
}
exports.getHeaders = getHeaders;

function makeArray(table){
  var headers = getHeaders(table);
  //TODO format data into arrays
  return array;
}
exports.makeArray = makeArray;

//Micro functions --------------------------------

function getRow(data){
  console.log(data);
  //var rows = data.split('\r\n');
  //FIXME Find out why data is undefined
  //return rows;
}
exports.getRow = getRow;

function getCells(row){
  //TODO convert array of rows into array of cells
  return cells;
}
exports.getCells = getCells;

function tableSize(table){
  var size = [];
  //TODO find the table size in both dimensions
  return size;
}
exports.tableSize = tableSize;
