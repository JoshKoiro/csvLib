var exports = module.exports;

//create Array from csv
let array = (table) => {
  return table.trim().split('\n')
}
exports.array = array;

//Select record from array
let record = (table,n) => {
  return array(table)[n]
}
exports.record = record;

//Select headers from csv
let headers = (table) => {
  return record(table,0).split(',')
}
exports.headers = headers;

let getRecordData = (record) => {
  return record.split(',')
}

exports.getRecordData = getRecordData

let cell = (table,row,column) => {
  return getRecordData(record(table,row))[column]
}

exports.cell = cell;

let size = (table) => {
  let length = array(table).length
  let width = headers(table).length
  return {'Columns': width,'Records': length}
}

exports.size = size;
