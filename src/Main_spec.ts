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


// ========== DYNAMIC TESTS =============
describe('dynamic tests for Main method sumAllElements(list)', function() {
    let tests = [
        { list: [1, 2], expected: 3 },
        { list: [1, 2, 3], expected: 6 },
        { list: [1, 2, 3, 4], expected: 10 }
    ];
    let mainInstance: Main = new Main();
    tests.forEach(function (test) {
        it(`should correctly sums the elements of [${test.list}] returning the expected value ${test.expected}`, function () {
            let res = mainInstance.sumAllElements(test.list);
            res.should.be.equal(test.expected);
        });
    });
});


// ========== CHAI METHODS =============
describe('explore all the chai methods and functionalities', function() {

    it('should check correctly the types', function () {
        let x = 3;
        x.should.be.a('number');
        let y = 'hello';
        y.should.be.a('string');
        let w = {};
        w.should.be.a('object');
        let z = function () { };
        z.should.be.a('function');
    });

    it('should check correctly the length of an array', function () {
        let list = [1, 2, 3, 4, 5];
        list.should.have.lengthOf(5);
    });

    it('should check correctly the presence of a property and a deep property inside an object and a nested array', function () {
        let obj = { test: 'TEST', foo: { bar: { baz: 'quux' } } };
        obj.should.have.property('test');
        obj.should.have.property('test', 'TEST');
        obj.should.have.deep.property('foo.bar.baz', 'quux');
        let arr = [ [1,2,3], ['test A', 'test B'], [{ first: 'A', second: 'B' }]];
        arr.should.have.deep.property('[0][2]', 3);
        arr.should.have.deep.property('[2][0].first', 'A');
    });

    it('should check correctly the equality of simple types and complex types', function () {
        let string = 'test';
        let obj = { test: 'TEST', foo: { bar: { baz: 'quux' } } };
        string.should.be.equal('test');
        obj.should.be.deep.equal({ test: 'TEST', foo: { bar: { baz: 'quux' } } });
        obj.should.be.eql({ test: 'TEST', foo: { bar: { baz: 'quux' } } });
    });

    it('should check correctly all the types', function () {
        expect(null).to.be.a('null');
        expect(undefined).to.be.an('undefined');
        expect(new Error).to.be.an('error');
        expect(new Promise<any>((resolve, reject) => {})).to.be.a('promise');
        expect(new Float32Array(2)).to.be.a('float32array');
        expect(Symbol()).to.be.a('symbol');
        let Foo = function () { };
        let foo = new Foo();
        expect(foo).to.be.an.instanceof(Foo);
    });

    it('should use the not statement', function () {
        let foo = 'foo bar';
        foo.should.not.equal('foo');
        let fn = function () { };
        fn.should.not.throw(Error);
        expect({ foo: 'baz' }).to.have.property('foo').and.not.equal('bar');
    });

    it('should use the any statement', function () {
        let foo = { bar: 'value' };
        expect(foo).to.have.any.keys('bar', 'baz');
    });

    it('should use the all statement', function () {
        let foo = {
            bar: 'value1',
            baz: 'value2'
        };
        expect(foo).to.have.all.keys('bar', 'baz');
    });

    it('should use include/contains statements', function () {
        expect([1, 2, 3]).to.include(2);
        expect('foobar').to.contain('foo');
        expect({ foo: 'bar', hello: 'universe' }).to.include.keys('foo');
    });

    it('should use the ok statement', function () {
        expect('everything').to.be.ok;
        expect(1).to.be.ok;
        expect(false).to.not.be.ok;
        expect(undefined).to.not.be.ok;
        expect(null).to.not.be.ok;
    });


    it('should use the true/false statements', function () {
        expect(true).to.be.true;
        expect(1).to.not.be.true;
        expect(false).to.be.false;
        expect(0).to.not.be.false;
    });


    it('should use null/undefined statements', function () {
        expect(null).to.be.null;
        expect(undefined).to.not.be.null;
        expect(undefined).to.be.undefined;
        expect(null).to.not.be.undefined;
    });

    it('should use exist statement to check if the target is neither null or undefined', function () {
        let foo = 'hi', bar = null, baz;
        expect(foo).to.exist;
        expect(bar).to.not.exist;
        expect(baz).to.not.exist
    });

    it('should use empty statement to check if the length is 0', function () {
        expect([]).to.be.empty;
        expect('').to.be.empty;
        expect({}).to.be.empty;
    });

    it('should use above/below statements to compare values', function () {
        expect('foo').to.have.length.above(2);
        expect([1, 2, 3]).to.have.length.above(2);
        expect('foo').to.have.length.below(4);
        expect([1, 2, 3]).to.have.length.below(4);
    });

    it('should use least/most statements to compare values', function () {
        expect('foo').to.have.length.of.at.least(2);
        expect([1, 2, 3]).to.have.length.of.at.least(3);
        expect('foo').to.have.length.of.at.most(4);
        expect([1, 2, 3]).to.have.length.of.at.most(3);
    });

    it('should use within statement to compare values', function () {
        expect('foo').to.have.length.within(2, 4);
        expect([1, 2, 3]).to.have.length.within(2, 4);
    });

    it('should use match statement to use a regular expression for comparing values', function () {
        expect('foobar').to.match(/^foo/);
    });


    it('should use string statement to check that a string contains a substring', function () {
        expect('foobar').to.have.string('bar');
    });


    it('should use the respondTo statement to check that the target object/class responds to a certain method', function () {
        let Klass= function() {};
        Klass.prototype.bar = function(){};
        expect(Klass).to.respondTo('bar');
        let obj= { bar: function() {} };
        expect(obj).to.respondTo('bar');
    });


    it('should use the satisfy statement to check that a target passes a given truth test', function () {
        expect(1).to.satisfy(function(num) { return num > 0; });
    });


    it('should use the members statement to check that a target include or not certain elements', function () {
        expect([1, 2, 3]).to.include.members([3, 2]);
        expect([1, 2, 3]).to.not.include.members([3, 2, 8]);
        expect([4, 2]).to.have.members([2, 4]);
        expect([5, 2]).to.not.have.members([5, 2, 1]);
    });


    it('should use the oneOf statement to check that a target element contains an element as top level element of an array', function () {
        expect('a').to.be.oneOf(['a', 'b', 'c']);
        expect(9).to.not.be.oneOf(['z']);
        expect([3]).to.not.be.oneOf([1, 2, [3]]);
    });


    it('should use the change statement to check that a function changes a certain property of an object', function () {
        let obj = { val: 10 };
        let fn = function() { obj.val += 3 };
        let noChangeFn = function() { return 'foo' + 'bar'; };
        expect(fn).to.change(obj, 'val');
        expect(noChangeFn).to.not.change(obj, 'val');
    });

    
    it('should use the increase/decrease statements to check that a function increases or decreases a property of an object or a value', function () {
        let obj = { val: 10 };
        let increaseFn = function() { obj.val = 15 };
        expect(increaseFn).to.increase(obj, 'val');
        let decreaseFn = function() { obj.val = 5 };
        expect(decreaseFn).to.decrease(obj, 'val');
    });

});



// ========== CHAI-AS-PROMISED METHODS =============
// chai-as-promised introduce the eventually for testing promises results and then concatenating the notify done to move after or returning the assertion
describe('explore all the chai-as-promised methods and functionalities', function() {

    it('should return [1,2,3] after 1 seconds', function (done) {
        Main.getPromiseForTest().should.eventually.eql([1, 2, 3]).notify(done);
    });

    it('should return an array with length 3 after 1 seconds and use the notify done in order to move after', function (done) {
        Main.getPromiseForTest().should.eventually.have.length(3).notify(done);
    });

    it('should return an array with length 3 after 1 seconds and return the assertion in order to move after', function () {
        return Main.getPromiseForTest().should.eventually.have.length(3);
    });
 
    it('should return an object after 1 seconds and check the deep equality using should eventually deep equal', function (done: Function) {
        Main.getAnObjectByPromise().should.eventually.deep.equal({
            firstname: 'Tony',
            lastname: 'Stark'
        }).notify(done);
    });

    it('should return an object after 1 seconds and check the deep equality using should become, which has the same meaning of should eventually deep equal', function (done: Function) {
        Main.getAnObjectByPromise().should.become({
            firstname: 'Tony',
            lastname: 'Stark'
        }).notify(done);
    });

    it('should check that the promise has been rejected after 1 seconds', function (done: Function) {
        Main.getRejectedPromise().should.be.rejected.notify(done);
    });

    it('should reject the promise with an error after 1 seconds', function (done: Function) {
        Main.getRejectedPromise().should.be.rejectedWith(Error, 'Error on promise!').notify(done);
    });

    it("should test that all the promises tests will be fine", function () {
        return Promise.all([
            Main.getRejectedPromise().should.be.rejectedWith(Error),
            Main.getAnObjectByPromise().should.eventually.have.property('firstname')
        ]);
    });

    // testing that the promise is correctly resolved in general. It will fail if rejected
    it("should use fulfilled statement to test that the promise is correctly resolved. Will fail if rejected", function (done) {
        Main.getAnObjectByPromise().should.be.fulfilled.notify(done);
    });


    // You can test asynch code also using the done callback.
    // Passing the done callback, the test will stop until the done callback will be find
    it('should use the done callback to test that the async code returns an array with length 3 and go on after promise has been resolved', function (done) {
        Main.getPromiseForTest().then((data) => {
            data.length.should.be.equal(3);
            done();
        });
    });


});