module.exports = function(app){
  app.get('/agencyservices/getStatus',function(req,res){
      res.send('active');
  })
  app.get('/agencyservices/getAORcode',function(req,res){
      res.send('AOR1234');
  })  
};
