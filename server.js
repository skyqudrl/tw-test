const http = require('http'),
  express = require('express');



let app = express();


app.use(express.static(__dirname + '/'));


app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
})

http.createServer(app).listen(5000, () => {
  console.log("server Start");
});
