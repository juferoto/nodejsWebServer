const express = require('express');
const app = express();

app.get('/technology', function (req, res) {
    res.render('technology/index', {
        title: "El Profeta | Technology"
    });
});

module.exports = app;