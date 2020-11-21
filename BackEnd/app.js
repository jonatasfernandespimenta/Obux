const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path');

const http = require('http');
const socket = require('socket.io');
const app = express();

const { Sequelize } = require('sequelize');

dotenv.config();

const server = http.createServer(app);
const io = socket(server, { wsEngine: 'ws' });

app.use(cors());
app.use(express.json());

app.use('/files', express.static(path.join(__dirname, '..', 'files')))

app.set("view engine", "ejs");

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false}));

const conn = new Sequelize('ObuxDB', 'root', '', {
  host: 'localhost',
  dialect: "mysql"
});

conn.authenticate()
  .then(() => console.log('Connection to MySQL established!'))
  .catch((e) => console.error('error to connect: ', e));

app.use(require('./src/routes'));

const port = process.env.PORT || 3004;

server.listen(port);
