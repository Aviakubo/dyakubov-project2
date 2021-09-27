// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const Tweet = require('./models/tweet.js');
const app = express();
const PORT = 3000;

// App Listener
app.listen(PORT, () => console.log(`express is listening on port: ${PORT}`));