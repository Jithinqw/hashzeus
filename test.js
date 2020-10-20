let assert = require('chai').assert,
    hashZeus = require('./index');


describe('Foundation tests', ()=> {
    it('hashZeus should generate a value', ()=> {
        let test = new hashZeus();
        let hash = test.generateHash();
        assert.isNotNull(hash);
    });

    it('hashZeus should generate a string', ()=> {
        let test = new hashZeus();
        let hash = test.generateHash();
        assert.isString(hash);
    });
});
