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

app.use(express.json());
app.use(cors());

app.set("view engine", "ejs");

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false}));

mongoose.connect('mongodb://localhost:27017/obux', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
  .then(() => console.log('connected'))
  .catch((e) => console.error('error to connect: ', e));

app.use(require('./src/routes'));

const port = process.env.PORT || 3000;

server.listen(port);
