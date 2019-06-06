const express = require('express');
const bodyParser = require('body-parser');
const { exec } = require('child_process');
const { Client } = require('pg');
const cors = require('cors');

function createMailUser(login, password) {
    const command = `./create_mail_user_SQL.sh ${login} ${password}`;

    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }

        const indexOfNextStatement = stdout.lastIndexOf('INSERT INTO');
        const stringLength = stdout.length;

        const commandMailbox = stdout.substring(0, indexOfNextStatement - 1);
        const commandForwardings = stdout.substring(indexOfNextStatement, stringLength);

        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);

        const client = new Client();
        client.connect();
        
        const queries = [
            client.query(commandMailbox),
            client.query(commandForwardings)
        ];

        Promise.all(queries)
            .then(() => client.end())
            .catch(e => {
                console.error(e.stack);
                client.end();
            });
    });
}

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.listen(3001, () => {
    console.log('Node.js mailserver started at port 3001, __dirname: ', __dirname);
});

app.post('/api/mail/create-account', (req, res) => {
    console.log('Create accout request: ', req.body);
    
    const { login, password } = req.body;

    createMailUser(login, password);

    const responseBody = { 
        message: "POST request to the homepage on: " + new Date()
    };
    
    res.status(200).send(responseBody);
});
