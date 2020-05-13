const express = require('express')
const app = express()
var path = require('path')
var port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/render/home.html");
})

app.listen(port, function () {
    console.log('Listening on port 3000!')
})
