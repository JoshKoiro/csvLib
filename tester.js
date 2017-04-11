const importer = require('./csvImport.js')
const saveFile = require('./csvExport.js')
const parser = require('./csvParser.js')
const HTML = require('./csvFormatHTML.js')

importer('corporations.csv',(data) => {
  doSomething(data);
})

let doSomething = (data) => {
  // let record = parser.record(data,1)
  let html = HTML.createTable(data)
  saveFile(html,'./test.html')
}
