var exports = module.exports;

//Macro functions ---------------------------------

function getHeaders(table){
  var headers = 0;
  console.log('getHeaders function is working');
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
  //TODO convert table into array of rows
  return rows;
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
