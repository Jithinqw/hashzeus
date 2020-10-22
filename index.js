const d64 = require('d64'),
    uuid = require('uuid');

/**
 * @class hashZeus
 * @description hashZeus class for creating unique eventId
 * for each object created.
 */
class hashZeus {
    constructor() {
        this.b = new Uint8Array(24);
        uuid.v4(null, this.b, 8);
    }

    /**
     * @static
     * @function appendServiceName
     * @description strips ... and adds service name
     * @param {string} name service or microservice name
     * @param {string} eventId hash generated
     * @returns {string}
     */
    static appendServiceName(name, eventId) {
        let tempSer = eventId.substring(10);
        return name + "-" + tempSer ;
    }
    
    /**
     * @function generateHash
     * @description generates eventId based on uuid and d64
     * @param {string} serviceName 
     * @returns {string} string
     */
    generateHash(serviceName) {
        for(let i=7; i >=0; i--) {
            if(this.b[i] !== 255) {
                this.b[i]++;
                break;
            }
            this.b[i] = 0;
        }
        let hashwithoutName = d64.encode(this.b);
        if(serviceName) {
            return this.appendServiceName(serviceName, hashwithoutName);
        }
        return hashwithoutName;
    }
}

module.exports = hashZeus;