require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

const connectToDb = require('./config/db.js');

// Express middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }))

// init connection to db
connectToDb();

const userRoute = require('./routs/userRoutes.js');

app.use('/', userRoute);

module.exports = app;