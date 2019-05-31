var express = require('express');

var app = express();

app.post('/mail/create-account', function (req, res) {
    console.log('Request: ', req);
    res.send('POST request to the homepage')
});

app.listen(3001, function() {
    console.log('Node.js mailserver started at port 3001');
});