module.exports = function(app,connection){
  console.log('a call is made for routes..')
  require('./agencyservices')(app);
  require('./agentservices')(app,connection);
  app.get('/', function (req, res) {
    res.send('Hello World!')
  })
};
