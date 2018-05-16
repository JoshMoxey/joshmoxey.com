const express = require('express')
const path = require("path")
// const dir = __dirname + "/"
const app = express();

app.use(express.static(__dirname))

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.set('port', (process.env.PORT || 1002));

app.listen(app.get('port'), function () {
  console.log('Server started on port ' + app.get('port'));
});
