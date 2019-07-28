
module.exports.absolute = function(number){
    if(number > 0) return number;
    if(number < 0) return -number;
    return 0
}

module.exports.greet = function(){
    return 'Hello Valentine!'
}


module.exports.currencies = function(){
    return ['NGN','USD','GDR'];
}

module.exports.books = function(id){
    return {id:id,price:10,category:'Romance'}
}

module.exports.newUser = function(name){
    if(!name) throw new Error();
    return {id:10,name:name};
}

