const express = require('express')
const app = express()
var path = require('path')

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/render/home.html");
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})
