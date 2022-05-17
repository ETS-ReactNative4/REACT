const http = require('http'); // nodejs builtin modules
const url = require('url');
const lodash = require('lodash');
const compute = require('./compute');

// http://localhost:3000/add?x=10&y=15
// http://localhost:3000/sub?x=80&y=15

const server = http.createServer((req,res) => {
    const pathname = url.parse(req.url).pathname; // /add or /sub
    const query = url.parse(req.url, true).query; // ?x=10&y=15 
    if(pathname === '/add') {
        res.end(compute.add(parseInt(query["x"]), parseInt(query["y"])).toString());
    } else if (pathname === '/sub') {
        res.end(compute.subtract(parseInt(query["x"]), parseInt(query["y"])).toString());
     } else {
        res.end(lodash.random(1,100).toString());
    }
});

server.listen(3000, () => console.log("started !!!"));