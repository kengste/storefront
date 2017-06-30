'use strict';
require('babel-register')({
  presets: ['es2015', 'react', 'stage-1']
});
const express = require('express');

const app = express();
const path = require('path');

app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});
app.listen(3000, () => {
  console.log('App web-server listening on port 3000');
});
