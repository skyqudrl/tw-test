const http = require('http'),
    express = require('express');



let app = express();


app.use(express.static(__dirname + '/'));



http.createServer(app).listen(3000, () => {
    console.log("server Start");
});
