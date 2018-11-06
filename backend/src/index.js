const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

mongoose.connect('mongodb://guilherme:abc123@ds153593.mlab.com:53593/goweek-guilherme', 
    {
        useNewUrlParser: true
    }
);

app.use((req, res, next) => {
    req.io = io;
    
    return next();
});

app.use(cors());
app.use(express.json());
app.use(require('./routes/Route'));

http.listen(3000, () => {
    console.log('Servidor escutando na porta 3000');
});