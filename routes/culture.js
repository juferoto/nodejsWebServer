const express = require('express');
const app = express();

app.get('/culture', function (req, res) {
    res.render('culture/index', {
        title: "El Profeta | Culture"
    });
});

module.exports = app;