// server.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const router = express.Router();
// Connect to mongoDB database
const mongoURL = 'mongodb://onepact_admin:onepactteam121@ds039674.mlab.com:39674/heroku_gvrt68cr';
mongoose.connect(mongoURL);
// Routing
// Configure port
const port = 39674;
// Listen to port
app.listen(port);
console.log(`Server is running on port: ${port}`);