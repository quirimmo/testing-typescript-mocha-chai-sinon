// // TODO: commenting it out since it's taking too much time to execute all of them
// describe('Utils class', () => {



//     describe('explore all the chai expectations', function () {


//         it('should check correctly the presence of a property inside an object', function () {
//             let obj = {
//                 test: 'TEST'
//             };
//             obj.should.have.property('test');
//             obj.should.have.property('test', 'TEST');
//             expect({ foo: { bar: { baz: 'quux' } } }).to.have.deep.property('foo.bar.baz', 'quux');
//         });

//         it('should check the equality of simple type', function () {
//             let simpleString = 'Simple String';
//             simpleString.should.be.equal('Simple String');
//         });

//         it('should check the equality of complex types', function () {
//             let obj = {
//                 test: 'TEST'
//             };
//             obj.should.be.deep.equal({
//                 test: 'TEST'
//             });
//             expect(null).to.be.a('null');
//             expect(undefined).to.be.an('undefined');
//             expect(new Error).to.be.an('error');
//             expect(new Promise<any>((resolve, reject) => { })).to.be.a('promise');
//             expect(new Float32Array(2)).to.be.a('float32array');
//             expect(Symbol()).to.be.a('symbol');
//             let Foo = function () { };
//             let foo = new Foo();
//             expect(foo).to.be.an.instanceof(Foo);
//             var arr = [
//                 ['chai', 'matcha', 'konacha']
//                 , [{ tea: 'chai' }
//                     , { tea: 'matcha' }
//                     , { tea: 'konacha' }]
//             ];
//             expect(arr).to.have.deep.property('[0][1]', 'matcha');
//             expect(arr).to.have.deep.property('[1][2].tea', 'konacha');
//         });

//         it('not statement', function () {
//             let foo = 'foo bar';
//             foo.should.not.equal('foo');
//             let fn = function () { };
//             fn.should.not.throw(Error);
//             expect({ foo: 'baz' }).to.have.property('foo').and.not.equal('bar');
//         });

//         it('any statement', function () {
//             let foo = {
//                 bar: 'value'
//             };
//             expect(foo).to.have.any.keys('bar', 'baz');
//         });

//         it('all statement', function () {
//             let foo = {
//                 bar: 'value1',
//                 baz: 'value2'
//             };
//             expect(foo).to.have.all.keys('bar', 'baz');
//         });

//         it('include/contains statements', function () {
//             expect([1, 2, 3]).to.include(2);
//             expect('foobar').to.contain('foo');
//             expect({ foo: 'bar', hello: 'universe' }).to.include.keys('foo');
//         });

//         it('ok statement', function () {
//             expect('everything').to.be.ok;
//             expect(1).to.be.ok;
//             expect(false).to.not.be.ok;
//             expect(undefined).to.not.be.ok;
//             expect(null).to.not.be.ok;
//         });

//         it('true/false statements', function () {
//             expect(true).to.be.true;
//             expect(1).to.not.be.true;
//             expect(false).to.be.false;
//             expect(0).to.not.be.false;
//         });

//         it('null/undefined statements', function () {
//             expect(null).to.be.null;
//             expect(undefined).to.not.be.null;
//             expect(undefined).to.be.undefined;
//             expect(null).to.not.be.undefined;
//         });

//         // exist checks if the target is neither null or undefined
//         it('exist statement', function () {
//             var foo = 'hi', bar = null, baz;
//             expect(foo).to.exist;
//             expect(bar).to.not.exist;
//             expect(baz).to.not.exist
//         });

//         // checks if the target's length is 0
//         it('empty statement', function () {
//             expect([]).to.be.empty;
//             expect('').to.be.empty;
//             expect({}).to.be.empty;
//         });

//         // eql is a short for deep.equal
//         it('eql statement', function () {
//             expect({ foo: 'bar' }).to.eql({ foo: 'bar' });
//             expect([1, 2, 3]).to.eql([1, 2, 3]);
//         });

//         it('above/below statements', function () {
//             expect('foo').to.have.length.above(2);
//             expect([1, 2, 3]).to.have.length.above(2);
//             expect('foo').to.have.length.below(4);
//             expect([1, 2, 3]).to.have.length.below(4);
//         });

//         it('least/most statements', function () {
//             expect('foo').to.have.length.of.at.least(2);
//             expect([1, 2, 3]).to.have.length.of.at.least(3);
//             expect('foo').to.have.length.of.at.most(4);
//             expect([1, 2, 3]).to.have.length.of.at.most(3);
//         });

//         it('within statement', function () {
//             expect('foo').to.have.length.within(2, 4);
//             expect([1, 2, 3]).to.have.length.within(2, 4);
//         });

//         // check for regular expressions
//         it('within statement', function () {
//             expect('foobar').to.match(/^foo/);
//         });

//         // check that a string contains a substring
//         it('string statement', function () {
//             expect('foobar').to.have.string('bar');
//         });

//         // check that the target object/class responds to a method
//         it('respondTo statement', function () {
//             let Klass= function() {};
//             Klass.prototype.bar = function(){};
//             expect(Klass).to.respondTo('bar');
//             let obj= {
//                 bar: function() {}
//             };
//             expect(obj).to.respondTo('bar');
//         });


//         // check that the target passes a given truth test
//         it('satisfy statement', function () {
//             expect(1).to.satisfy(function(num) { return num > 0; });
//         });


//         // check that the target contains members
//         it('members statement', function () {
//             expect([1, 2, 3]).to.include.members([3, 2]);
//             expect([1, 2, 3]).to.not.include.members([3, 2, 8]);
//             expect([4, 2]).to.have.members([2, 4]);
//             expect([5, 2]).to.not.have.members([5, 2, 1]);
//         });

//         // check that the target contains an element as top level elements of an array
//         it('oneOf statement', function () {
//             expect('a').to.be.oneOf(['a', 'b', 'c']);
//             expect(9).to.not.be.oneOf(['z']);
//             expect([3]).to.not.be.oneOf([1, 2, [3]]);
//         });

//         // check that a function changes a property of an object
//         it('change statement', function () {
//             var obj = { val: 10 };
//             var fn = function() { obj.val += 3 };
//             var noChangeFn = function() { return 'foo' + 'bar'; };
//             expect(fn).to.change(obj, 'val');
//             expect(noChangeFn).to.not.change(obj, 'val');
//         });


//         // check that a function increases or decreases a property value
//         it('increase/decrease statements', function () {
//             var obj = { val: 10 };
//             var increaseFn = function() { obj.val = 15 };
//             expect(increaseFn).to.increase(obj, 'val');
//             var decreaseFn = function() { obj.val = 5 };
//             expect(decreaseFn).to.decrease(obj, 'val');
//         });

//     });


// });




//     // test promises using mocha + chai-as-promised
//     describe('#getPromiseForTest()', function () {

//         it('should return [1,2,3] after 1 seconds', function (done) {
//             (1).should.be.equal(1);
//             Utils.getPromiseForTest().should.eventually.eql([1, 2, 3]).notify(done);
//         });


//         it('should return an array with length 3 after 1 seconds', function (done) {
//             Utils.getPromiseForTest().should.eventually.have.length(3).notify(done);
//         });

//         // instead of notifying done, you can also just return the assertion if the behind test framework allows it. Mocha does. 
//         it('should return an array with length 3 after 1 seconds', function () {
//             return Utils.getPromiseForTest().should.eventually.have.length(3);
//         });

        
//         // deep equal for object returned by a promise 
//         it('should return an object after 1 seconds', function (done: Function) {
//             Utils.getAnObjectByPromise().should.eventually.deep.equal({
//                 firstname: 'Tony',
//                 lastname: 'Stark'
//             }).notify(done);
//         });

//         // become has the same meaning of eventually deep equal 
//         it('should return an object after 1 seconds', function (done: Function) {
//             Utils.getAnObjectByPromise().should.become({
//                 firstname: 'Tony',
//                 lastname: 'Stark'
//             }).notify(done);
//         });

//         // become has the same meaning of eventually deep equal 
//         it('should return an object after 1 seconds', function (done: Function) {
//             Utils.getAnObjectByPromise().should.become({
//                 firstname: 'Tony',
//                 lastname: 'Stark'
//             }).notify(done);
//         });

//         // testing rejected promises
//         it('should reject the promise after 1 seconds', function (done: Function) {
//             Utils.getRejectedPromise().should.be.rejected.notify(done);
//         });

//         // testing rejected promises with error
//         it('should reject the promise with an error after 1 seconds', function (done: Function) {
//             // Utils.getRejectedPromise().should.be.rejectedWith(new Error('Error on promise!')).notify(done);
//             Utils.getRejectedPromise().should.be.rejectedWith(Error, 'Error on promise!').notify(done);
//         });

//         // testing multiple promises
//         it("should all be well", function () {
//             return Promise.all([
//                 Utils.getRejectedPromise().should.be.rejectedWith(Error),
//                 Utils.getAnObjectByPromise().should.eventually.have.property('firstname')
//             ]);
//         });

//         // testing that the promise is correctly resolved in general. It will fail if rejected
//         it("should be fulfilled", function (done) {
//             Utils.getAnObjectByPromise().should.be.fulfilled.notify(done);
//         });

//         // You can test asynch code also using the done callback.
//         // Passing the done callback, the test will stop until the done callback will be find
//         it('should return an array with length 3 and go on after promise has been resolved', function (done) {
//             // The default timeout in mocha is 2000ms. We can change it anytime inside single tests using the this.timeout(ms), otherwise globally running mocha with --timeout ms options
//             this.timeout(5000);
//             Utils.getPromiseForTest().then((data) => {
//                 data.length.should.be.equal(3);
//                 done();
//             });
//         });

//     });


//     // Testing all the sinono methods for functions callbacks 
//     describe('test functions callbacks using sinon', function () {

//         // after each step inside the describe, we need to unwrap the spy on the 
//         //same methods, otherwise sinon will produce an error that the metehod is already wrapped in a spy
//         // it can seem a limitation, instead we can create a describe block for testing one spy, 
//         // where we define the spy just at the beginning of all the tests, and then we 
//         // restore the spy at the end of all the tests. 
//         // In this way, the single it blocks, will not need to define everytime the spy on the same method

//         // spy an object method to check that is called
//         it('should call the function', function () {
//             var sandbox = sinon.sandbox.create();
//             let callback = sandbox.spy(Utils, 'testInternalMethod');
//             Utils.testPublicMethod();
//             sandbox.assert.called(callback);
//             sandbox.restore();
//         });

//         // spy an object method to check that it is not called
//         it('should not call the function', function() {
//             var sandbox = sinon.sandbox.create();
//             let callback = sandbox.spy(Utils, 'testInternalMethod');
//             Utils.testPublicMethodWithoutInternalCall();
//             sandbox.assert.notCalled(callback);
//             sandbox.restore();
//         });
        
        
//         it('should correctly define the callback spy', function () {
//             // create an anonymous function for spying callbacks
//             let functionWithCallback: Function = function (callback: Function) {
//                 callback();
//             };
//             let callbackSpy = sinon.spy();
//             functionWithCallback(callbackSpy);
//             sinon.assert.called(callbackSpy);
//         });

//         it('should correctly spy on a single function checking that is colled twice', function() {
//             let testFunction: Function = function(a: number) {
//                 return a * 2;
//             };
//             var double = sinon.spy(testFunction);
//             double(2);
//             double(4);
//             sinon.assert.calledTwice(double);
//         });

//         it('should correctly spy on a function checking passed parameters and obj where called on', function() {
//             let testFunction: Function = function(a: number) {
//                 return a * 2;
//             };
//             let obj = {
//                 fn: testFunction
//             };
//             var spy = sinon.spy(obj, 'fn');
//             obj.fn(3);
//             spy.calledOn(obj);
//             spy.calledWith(3);
//             spy.restore();
//         });

//         it('should correctly create a stub on a function checking passed parameters and obj where called on', function() {
//             let functionWithCallback: Function = function (callback: Function) {
//                 return callback();
//             };
//             let callbackStub = sinon.stub().returns(42);
//             let val = functionWithCallback(callbackStub);
//             val.should.be.eql(42);
//         });

//         it('should correctly create stub on a function object', function() {
//             let objectUnderTest: any = {
//                 process: (obj: any) => {
//                     // It doesn't really matter what's here because the stub is going to replace this function
//                     return obj.success(99);
//                 }
//             };
//             var stub = sinon.stub(objectUnderTest, "process").yieldsTo("failure");
//             objectUnderTest.process({
//                 success: () => { console.log("yieldsTo success"); },
//                 failure: () => { console.log("yieldsTo failure"); }
//             });
//             sinon.assert.called(stub);
//             stub.restore();
//         });

//         it('should correctly create stubs for promises', function() {
//             var resolveStub = sinon.stub().resolves(10);
//             var rejectStub1 = sinon.stub().rejects();
//             var rejectsStub2 = sinon.stub().rejects(new Error('Specified error'));
//             var rejectsStub2 = sinon.stub().rejects("TypeError");
//         });

//         it('sould correctly implement stub methods', function() {
//             var callback = sinon.stub().returns(42);
//             callback({ x: 5, y: 5 });
//             callback.calledWithMatch({ x: 5 });
//             callback.alwaysCalledWithMatch({ y: 5 });
//             callback.neverCalledWithMatch({ x: 6 });
//             sinon.assert.calledWithMatch(callback, { x: 5 });
//             sinon.assert.alwaysCalledWithMatch(callback, { y: 5 });
//             sinon.assert.neverCalledWithMatch(callback, { x: 6 });
//         });

//         it('sould correctly test symbols', function() {
//             var stub = sinon.stub();
//             stub(Symbol('TestSymbol'));
//             stub.calledWithMatch(sinon.match.symbol);
//         });

        
//         it('sould correctly uses stub replacing the call with a function wrapped in a spy', function() {
//             var obj = {
//                 method: function() {}
//             };
//             let testFunction: Function = function(a: number) {
//                 return a * 2;
//             };
//             var fnSpy = sinon.spy(testFunction);
//             var stub = sinon.stub(obj, "method").callsFake(fnSpy);
//         });

//         it('sould correctly uses stub just corresponding to some argument passed in the method', function() {
//             var callback = sinon.stub();
//             callback.withArgs(42).returns(1);
//             callback.withArgs('test').returns('test returned!');
//             var error = new Error('Insert message');
//             callback.withArgs(1).returns(error);

//             callback(); // No return value, no exception
//             callback(42); // Returns 1
//             callback('test'); // Returns 'test returned!'
//             // callback(1); // Throws Error
//             callback(1).should.be.eql(error);
//         });

//         it('sould correctly uses stub for testing consecutive interactions', function() {
//             var callback = sinon.stub();
//             callback.onCall(0).returns(1);
//             callback.onCall(1).returns(2);
//             callback.returns(3);

//             callback(); // Returns 1
//             callback(); // Returns 2
//             callback(); // All following calls return 3
//         });

//         it('sould correctly uses stub for combining withArgs and onCall', function() {
//             var callback = sinon.stub();
//             callback.withArgs(42)
//                 .onFirstCall().returns(1)
//                 .onSecondCall().returns(2);
//             callback.returns(0);

//             callback(1); // Returns 0
//             callback(42); // Returns 1
//             callback(1); // Returns 0
//             callback(42); // Returns 2
//             callback(1); // Returns 0
//             callback(42); // Returns 0
//         });


//         it('sould call resetBehavior on the stub canceling the stub behavior', function() {
//             var stub = sinon.stub();
//             stub.returns(54);
//             stub(); // 54
//             stub.resetBehavior();
//             stub(); // undefined
//         });


//         it('sould call resetHistory on the stub resetting the stub history', function() {
//             var stub = sinon.stub();
//             stub.called; // false
//             stub();
//             stub.called; // true
//             stub.resetHistory();
//             stub.called; // false
//         });


//         // you should have no more than one single mock inside each unit test, even if it can present multiple expectations 
//         it('sould verify correctly a defined mock object and set few expectations on it', function() {
//             var myAPI = { 
//                 method: function () {},
//                 innerMethod: function () {},
//                 argsMethod: function(arg1: string) {},
//                 neverMethod: function () {}
//             };
//             let fn = function() {
//                 myAPI.method();
//                 myAPI.innerMethod();
//                 myAPI.innerMethod();
//                 myAPI.argsMethod('test1');
//             };
//             // creates a mock corresponding to the provided object
//             var mock = sinon.mock(myAPI);
//             mock.expects("method").once();
//             mock.expects("method").atMost(1);
//             mock.expects("innerMethod").twice();
//             mock.expects("neverMethod").never();
//             mock.expects("argsMethod").withArgs('test1');
//             fn();
//             // verify all the expectations on the mock
//             // if any expectation is not satisfied, an exception is thrown
//             mock.verify();
//             // restore all the mocked methods
//             mock.restore();
//         });


//         // the following example is not working because the ajax request is not starting
//         it.skip('sould correctly test a fake server and a fake XMLHttpRequest', function() {
//             let server = sinon.fakeServer.create();
//             server.respondWith('GET', '/some/article/comments.json', [200, { "Content-Type": "application/json" }, '[{ "id": 12, "comment": "Hey there" }]']);
//             let testFunction: Function = function(callback) {
//                 // jQuery.ajax({
//                 //     url: "/some/article/comments.json",
//                 //     success: callback
//                 // });
//             };
//             var callback = sinon.spy();
//             testFunction(callback);
//             console.log(server.requests);
//             server.respond();
//             sinon.assert.calledWith(callback, [{ "id": 12, "comment": "Hey there" }]);
//             server.restore();
//         });

//     });






// // As written above, you can use sandbox for grouping stubs of same method
// // use sandbox for cleaning up the code and grouping functionalities correctly restsoring creating stubs once for the describe block
// var myAPI = { 
//     myMethod: function () {} 
// };
// var sandbox = sinon.sandbox.create();
// var sandboxStub;
// describe('complete sandbox example', function () {

//     beforeEach(function () {
//         // stub out the `hello` method
//         sandboxStub = sandbox.stub(myAPI, 'myMethod');
//     });

//     afterEach(function () {
//         // completely restore all fakes created through the sandbox
//         sandbox.restore();
//     });

//     it('should be called once', function () {
//         myAPI.myMethod();
//         sinon.assert.calledOnce(sandboxStub);
//     });

//     it('should be called twice', function () {
//         myAPI.myMethod();
//         myAPI.myMethod();
//         sinon.assert.calledTwice(sandboxStub);
//     });
// });