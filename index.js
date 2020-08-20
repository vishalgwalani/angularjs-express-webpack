const express = require("express");

const app = express();

const path = require("path")


app.use(express.static(__dirname));

app.get('*', function (req, res, next) {
    res.sendFile(__dirname + '/index.html');
});

const PORT = process.env.PORT || 8090;

app.listen(PORT , function() {
  console.log(`App listening on port ${PORT}`);
});
