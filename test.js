let assert = require('chai').assert,
    expect = require('chai').expect,
    hashZeus = require('./index');


describe('Foundation tests', ()=> {
    it('hashZeus should generate a value', ()=> {
        let test = new hashZeus();
        let hash = test.generateHash();
        assert.isNotNull(hash);
        assert.isNotEmpty(hash);
    });

    it('hashZeus should generate a string', ()=> {
        let test = new hashZeus();
        let hash = test.generateHash();
        assert.isString(hash);
    });

    it('The service name appending function should append service name to the hash', ()=> {
        let test = new hashZeus();
        let hash = test.generateHash('zerodha');
        expect(hash).to.match(/(?:zerodha)/)
    });

    it('hashes from differnt objects should not be same', ()=> {
        let test = new hashZeus();
        let hash = test.generateHash();

        let test1 = new hashZeus();
        let hash1 = test1.generateHash();

        assert.notEqual(hash, hash1);
    });

    it('Hashes from same object should be Monotonically increasing', () => {
        let test = new hashZeus();
        let hash = test.generateHash();
        let hash1 = test.generateHash();
        assert(hash < hash1);
    });
});
