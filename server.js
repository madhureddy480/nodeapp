var contentType = require('content-type');
var express = require('express');
var getRawBody = require('raw-body');
var bodyParser = require('body-parser');
var app = express();


app.use(function (req, res, next) {
  getRawBody(req, {
    length: req.headers['content-length'],
    limit: '1mb',
    encoding: contentType.parse(req).parameters.charset
  }, function (err, string) {
    if (err) return next(err)
    req.text = string
    next()
  })
})
app.use(bodyParser.json());
exports.app = app;
var dbConn = require('./config/database').getConnection();
app.listen(8080, function() {
  console.log('%s listening at %s', app.name, app.port);
});
require('./api/routes/routes.js')(app,dbConn);
