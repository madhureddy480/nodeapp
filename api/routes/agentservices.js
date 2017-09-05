module.exports = function(app,connection){
 var xmlParser = require('xml2js');
 var parser = new xmlParser.Parser();
 var parseString = xmlParser.parseString;

  app.get('/agentservices/getFullName',function(req,res){
      res.send('Ned Stark');
  })

  app.post('/agentservices/getFullName',function(req,res){
      var data = req.text;
      var myJsObj;
      var agentid;
      parseString(data, function (err, result) {
        myJsObj = result;
        agentid = result.agentservices.agentid;
          console.log(result.agentservices.agentid);
      });
      require('../dao/agentservices/agentdemographics.js')(connection,agentid,function(queryResult){
        console.log("at agent services..."+queryResult);
        res.set('custom-header', 18);
        var builder = new xmlParser.Builder();
        var xml = builder.buildObject(queryResult);
        res.set('Content-Type', 'application/xml');
        res.send(xml);
      },function noresults() {
        var builder = new xmlParser.Builder();        
        var xml = "<agentservices><error>No Agent Found</error></agentservices>";
        res.set('Content-Type', 'application/xml');
        res.send(xml);
      });
  })
  app.get('/agentservices/getStatus',function(req,res){
      res.send('active');
  })
};
