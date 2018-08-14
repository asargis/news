const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Авторизация
app.post('/auth', function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    if(username === 'admin' && password === '1234') {
        res.send(JSON.stringify({
            result: 'success',
            user: username,
            isAuth: true
        }));
    }
});

app.listen(PORT, function () {
    console.log('Server is running on Port: ', PORT);
});

