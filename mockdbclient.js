const db = require('./db/db');

module.exports.getUserClient=function(userobj){
   const client = db.getClient(userobj.id);
   if(userobj.score >= 10){
       userobj.score = userobj.score/2;
   }
}