const http = require('http'),
  express = require('express'),
  fs = require('fs');

let app = express();

app.use(express.static(__dirname+'/'));





http.createServer(app).listen(5000, () => {
    console.log('server On !');
})










// var xlsjs = require("xlsjs");
//
// const excel = require('excel-stream');
// const csv = require('csv-parser');
//
// fs.createReadStream('a1.xls')
//     .pipe(csv())
//     .on('data', data => {
//     console.log(data);
// })
// .on('end', data => {
//     console.log(data);
// });

// var data = xlsjs.readFile('123test.xls').Sheets.Sheet1;
// console.log(data);
// var key = Object.keys(data);
// console.log(key.length);
// let prop = '';
// var keyMap = {};
// for (let i = 0; i < key.length; i++){
//     prop = key[i].substring(key[i].length - 1, key[i].length);
//     if ( prop === '1'){
//         // console.log(key[i].split(prop)[0]);
//         keyMap[key[i].split(prop)[0]] = data[key[i]].v;
//     }else{
//         break;
//     }
// }
//
// var columnSize = key[key.length - 2] || '';
// columnSize = columnSize.substring(columnSize.length - 1, columnSize.length);
// var objarr = [];
// let keyMapProps = Object.keys(keyMap);
// let obj = {};
// for (let i = 2; i <= columnSize; i++){
//     for (let j=0; j < keyMapProps.length; j++){
//         obj[keyMap[keyMapProps[j]]] = typeof data[keyMapProps[j] + i] === 'object' ? data[keyMapProps[j] + i].v :  '';
//     }
//     objarr.push(obj);
//     obj = {};
// }


// console.log(objarr);