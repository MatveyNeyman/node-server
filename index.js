const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/api/mail/create-account', (req, res) => {
    console.log('Request: ', req.body);
    const dateTime = new Date();
    const responseBody = 'POST request to the homepage on: ' + dateTime;
    res.status(200).send(responseBody);
});

app.listen(3001, () => {
    console.log('Node.js mailserver started at port 3001');
});
