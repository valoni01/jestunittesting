
module.exports.fizzbuzz = function(value){
   if(typeof value !== 'number'){
       throw new Error('value must be a anumber');
   }
   if( (value % 3 === 0) && (value % 5 === 0) ){
       return "fizz buzz";
   }
   if(value % 3 === 0){
       return "fizz";
   }
   if(value % 5 === 0){
    return "buzz";
}

return value;

}

this.fizzbuzz(5)