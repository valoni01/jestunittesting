const fizz = require('../fizzbuzz');


describe('fizzbuzz',()=>{
    it('should throw an error is input is not a number',()=>{
      expect(()=>fizz.fizzbuzz('notanum').toThrow());
      expect(()=>fizz.fizzbuzz(NaN).toThrow());
      expect(()=>fizz.fizzbuzz(undefined).toThrow());
      expect(()=>fizz.fizzbuzz('').toThrow());
    })
    it('should return fizzbuzz',()=>{
        const result = fizz.fizzbuzz(15);
        expect(result).toBe('fizz buzz')
    })
    it('should return fizz if divisible by 3',()=>{
        const result = fizz.fizzbuzz(3)
        expect(result).toBe('fizz')
    })
    it('should return buzz i divisible by 5',()=>{
        const result = fizz.fizzbuzz(5)
        expect(result).toBe('buzz')
    })
    it('should return the input if not devisible by 3 or 5',()=>{
        const result = fizz.fizzbuzz(4);
        expect(result).toBe(4);
    })
})