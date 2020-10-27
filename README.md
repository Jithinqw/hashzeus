# hashzeus

![Node.js CI](https://github.com/Jithinqw/hashzeus/workflows/Node.js%20CI/badge.svg)
![npm](https://img.shields.io/npm/dw/hashzeus)
![GitHub](https://img.shields.io/github/license/Jithinqw/hashzeus)
![npm collaborators](https://img.shields.io/npm/collaborators/hashzeus)

Generates globally unique eventId based on microservices on a network. 
This is created as an alternative for timestamps since JavaScript has only 
millisecond resolution.


# Installation

```npm install hashzeus --save```

# Usage

```javascript
    var hashZeus = require('hashzeus');
    var demo = new hashZeus()
    console.log(demo.generateHash('zerodha'));
    // zerodha-6dylVZFUl4cP3fH6bKRe.G
    console.log(demo.generateHash('byjus'));
    // byjus-4SFUv0vu06psuKOUYiw18T
    var demo1 = new hashZeus();
    console.log(demo1.generateHash('byjus')); 
    // generates completely different Id from a differnt object.
    // byjus-3s4REK77l2Fsh2hE8EIUGT

    var demo2 = new hashZeus();
    id1 = demo2.generateHash();
    // ..........37qqNkj4E24ulWyeuWxpZh
    id2 = demo2.generateHash();
    // ..........77qqNkj4E24ulWyeuWxpZh
    assert(id1 < id2)
    //true
```

# API 

 - `generateHash(serviceName?: string)` - Optional service name 