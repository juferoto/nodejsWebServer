const express = require('express');
const app = express();

app.get('/science', function (req, res) {
    res.render('science/index', {
        title: "El Profeta | Science"
    });
});

module.exports = app;