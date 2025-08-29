const sumar = (a,b) => {
return a + b;
};

console.log(sumar(5,10));
//archivo index.js

const http = require("http");
const app = http.createServer((req, res) => {
    res.writeHead(200,{"content-Type": "text/plain"});
    res.end("Hola mundo\n");
});