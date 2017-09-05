module.exports = function getAgentDemographics(connection,agentid,someresults,noresults){//function name is just for readability purpose
var squel = require('squel');
var s = squel.select()
             .from('person')
             .where('id = ?',agentid);
console.log(s.toString());
connection.query(s.toString(), function (error, results, fields) {
   var queryResult;
   if (error){
     throw error;
   }else if(results.length < 1){
     return noresults();
   }else {
     queryResult = results[0];
   }
   return someresults(queryResult);
  });
}
