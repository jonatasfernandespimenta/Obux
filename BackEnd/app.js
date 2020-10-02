const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const http = require('http');
const socket = require('socket.io');
const app = express();

dotenv.config();

const server = http.createServer(app);
const io = socket(server, { wsEngine: 'ws' });

let messages = [];

io.on('connection', socket => {
  console.log(`Socket conectado ${socket.id}`);
  socket.emit('prevMsg', messages);

  socket.on('message', data => {
    messages.push(data);

    if(messages.length >= 10) {
      messages = messages.slice(10, messages.length);
    }

    socket.broadcast.emit('messagedSend', data);
  });
});

app.use(express.json());
app.use(cors());

app.set("view engine", "ejs");

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false}));

mongoose.connect('mongodb://localhost:27017/obux', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
  .then(() => console.log('connected'))
  .catch(() => console.error('error to connect'));

app.use(require('./src/routes'));

const port = process.env.PORT || 3000;

server.listen(port);
