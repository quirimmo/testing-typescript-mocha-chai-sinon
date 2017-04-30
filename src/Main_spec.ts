// imports of testing libraries 
import * as mocha from 'mocha';
import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import sinon = require('sinon');
// import of the source file to be tested
import Main from './Main';

// testing inits
chai.use(chaiAsPromised);
const expect = chai.expect;
const assert = chai.assert;
const should = chai.should();


// starting below the complete tests exploration


// ========== MAIN HOOKS =============
// if you put the following hooks outside a main describe, they will be executed before every single file!
// otherwise they follow the describe's scope
describe('Main Hooks', () => {

    before(function () {
        // runs before all tests in this block
    });
    after(function () {
        // runs after all tests in this block
    });
    beforeEach(function () {
        // runs before each test in this block
    });
    afterEach(function () {
        // runs after each test in this block
    });

});


// ========== SKIP KEYWORD =============
// with the skip keyword, mocha will skip the tests and they will result as pending. The keyword can be used with it and describe blocks
// describe.skip('Skip Keyword Hooks', () => {
//     it('example test', function() {
//     });
// });


// ========== ONLY KEYWORD =============
// with the only keyword, mocha will execute only this block. The keyword can be used with it and describe blocks
// describe.only('Skip Keyword Hooks', () => {
//     it('example test', function() {
//     });
// });


// ========== PENDING TESTS =============
// If you avoid to define the callback to an it block, the test will result as pending
describe('Pending Test', function() {
    it('should be marked as pending');
});


// ========== RETRIES FUNCTIONALITY =============
// using the this.retries() function, you will explicetely set the number of times to retry a certain test.
// considering the first execution, if you specify this.retries(n), the test will be executed 1+n times
describe('Retries Test', function() {
    it('should be retried another 2 times', function () {
        this.retries(2);
        ([1,2,3].length).should.be.equal(3);
    });
});


// ========== EXPECT, ASSERT AND SHOULD KEYWORDS =============
// integrating mocha with chai, you can use the following ways for testing: expect, should and assert
describe('using expect, should and assert', function() {
    it('should use should keyword', function() {
        let x = 5;
        x.should.be.equal(5);     
    });
    it('should use expect keyword', function() {
        let x = 5;
        expect(x).to.be.equal(5);     
    });       
    it('should use assert keyword', function() {
        let x = 5;
        assert.equal(x, 5);     
    });         
});