var express = require('express');
var app = express();
const loggRequest = require("./lib/loggerRequest");
const {logger} = require("./lib/logger")
// write all request from client to logs
app.use(loggRequest);
// app.use(requestLogger)
app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3006, function () {
  logger.error(`error demo`)
    logger.info(`Http server listining on port 3000`)
});
