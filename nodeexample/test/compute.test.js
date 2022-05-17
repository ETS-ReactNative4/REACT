const compute = require('../app/compute');
const expect = require('chai').expect;
// test suite
describe("tesing compute module", () => {
    // test spec
    it("testing add", () => {
        const result = compute.add(4,5);
        const expected = 9;
        expect(result).to.be.equal(expected);
    });
   
    // test spec
    it("testing sub", () => {
        const result = compute.subtract(14,5);
        const expected = 9;
        expect(result).to.be.equal(expected);
    });
    
});