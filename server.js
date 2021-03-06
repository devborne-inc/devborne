var express = require('express');
var path = require('path');
var port = process.env.PORT || 8080;
var app = express();

// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname + '/dist'));

// send the user to index html page inspite of the url
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => console.log(`server running: ${port}`));