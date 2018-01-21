var MongoClient=require('mongodb').MongoClient;
exports.sample="ASD";
exports.createConnection=function(){
  MongoClient.connect("mongodb://shruthy:89914003@ds047325.mlab.com:47325/projectorpro").then(function(client){
  console.log("connected to mongo....cool");
  console.log(client.db("projectorpro"));
  module.exports.database=client.db("projectorpro");
  console.log("  exports.database:"+  exports.database);
});
console.log("SUCEESs");
}
