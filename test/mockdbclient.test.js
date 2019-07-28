const db = require('../db/db')
const mck = require('../mockdbclient')

describe('customer db',()=>{
  it('should return an 5',()=>{
    db.getClient = function(id){
        console.log('we are getting data from the db');
        return {id:id,name:'selmon'}
     } 
     //we can also use jest.fn()  as well which is simpler and easier to use
     let userobject = {id:1, score:10, name:'selmon'};
     mck.getUserClient(userobject);
     expect(userobject.score).toBe(5);
  })  
})