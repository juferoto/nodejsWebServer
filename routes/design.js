const express = require('express');
const app = express();

app.get('/design', function (req, res) {
    res.render('design/index', {
        title: "El Profeta | Design"
    });
});

module.exports = app;