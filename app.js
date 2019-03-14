const express = require('express');
const app = express();

app.use((req, res, name) => {
  res.status(200).json({
    message : 'Cat meows!!'
  });
});

module.exports = app;
