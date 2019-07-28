const val = require('../valoni');

//number testing
describe('absolute',()=>{
    it('absolute-value should be positive is value is positive',()=>{
        const value = val.absolute(1)
        expect(value).toBe(1)
    })
    
    it('absolute value should be positive is value is negative',()=>{
        const value = val.absolute(-1);
        expect(value).toBe(1)
    })
    
    it('absolute value should be zero if number is zero',()=>{
         const value = val.absolute(0);
         expect(value).toBe(0);
    })
})

//string testing
describe('greet',()=>{
    it('should contain Hello',()=>{
       const value = val.greet();
    //    expect(value).toMatch(/Hello/); //for regex
       expect(value).toContain('Hello'); //
    })
})

//array testing
describe('currency',()=>{
    it('should contain NGN, and USD',()=>{
        const value = val.currencies();
        expect(value).toEqual(expect.arrayContaining(['USD','NGN']));
    })
})

//for objects
describe('books',()=>{
    const value = val.books(1);
    expect(value).toMatchObject({id:1,price:10});
})

// exeption handling -- iterating through values
describe('usercreation',()=>{
    it('should throw and error',()=>{
        let unwanted = [null,undefined,'',NaN];
        unwanted.forEach(a=>{
            expect(()=>val.newUser(a).toThrow());
        })
    })
    it('should return an objec of user',()=>{
        const value = val.newUser('loni');
        expect(value).toMatchObject({id:10,name:'loni'});
    })
})