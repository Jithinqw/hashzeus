const hashZeus = require('../src/index');
const eid = new hashZeus();
for(let i=0; i< 1e7; i++) {
    eid.generateHash();
}