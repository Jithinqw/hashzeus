# hashzeus

Generate globally unique eventId based on microservices on a network. This is created as an alternative for Javascript timestamps for identifying services on a network.

# Installation

```npm install hashzeus --save```

# Usage

```javascript
    var hashZeus = require('hashzeus');
    var demo = new hashZeus()
    console.log(demo.generateHash('zerodha'));
    //apple-6dylVZFUl4cP3fH6bKRe.G
    console.log(demo.generateHash('byjus'));
    //byjus-4SFUv0vu06psuKOUYiw18T
    var demo1 = new hashZeus();
    console.log(demo1.generateHash('byjus')); 
    // generates completely different Id from a differnt object.
    //byjus-3s4REK77l2Fsh2hE8EIUGT
```