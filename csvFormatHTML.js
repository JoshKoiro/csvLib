const parser = require('./csvParser.js');
var exports = module.exports;

let createDiv = (cell) => {
  return "<div>"+cell+"</div>"
}

exports.createDiv = createDiv

let createListItem = (cell) => {
  return "<li>"+cell+"</li>"
}

exports.createListItem = createListItem

let createItem = (cell) => {
  return "<td>"+cell+"</td>"+"\r"
}

exports.createItem = createItem

let createHeader = (cell) => {
  return "<th>"+cell+"</th>"+"\r"
}

exports.createHeader = createHeader

let createRow = (record) => {
  let elements = record.split(',')
  let head = "<tr>\r"
  let foot = "</tr>"
  let output = elements.map((e,i) => {
    console.log(elements[i]);
    return createItem(elements[i])
  })
  return head + output.join('') + foot
}

exports.createRow = createRow

let createList = (record) => {
  let elements = record.split(',')
  let output = record.split(',').map((e,i) => {
    console.log(elements[i]);
    return createListItem(elements[i])
  })
  return output.join('')
}

exports.createList = createList

let createHeaders = (record) => {
  let elements = record.split(',')
  let head = "<tr>\r"
  let foot = "</tr>"
  let output = elements.map((e,i) => {
    console.log(elements[i]);
    return createHeader(elements[i])
  })
  return head + output.join('') + foot
}

exports.createHeaders = createHeaders

let createTable = (table) => {
  let head = "<table>\r"
  let foot = "</table>"
  let records = parser.array(table)
  let output = records.map((e,i) => {
    if(i=0){
      return createHeaders(e)
    } else {
      return createRow(e)
    }
  })
  return head + output.join('') + foot
}

exports.createTable = createTable
