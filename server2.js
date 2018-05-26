// server.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const router = express.Router();
// Connect to mongoDB database
const mongoURL = 'mongodb://SVConepact:onepact!123@ds249575.mlab.com:49575/onepactdb';
mongoose.connect(mongoURL);
// Routing
// Configure port
const port = 8080;
// Listen to port
app.listen(port);
console.log(`Server is running on port: ${port}`);