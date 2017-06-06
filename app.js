var http = require("http");
var fs = require("fs");
console.log('starting');
var host = '127.0.0.1';
var port = 8080;
var server = http.createServer(function (request, response) {
    console.log("Received Request: " + request.url);
    fs.readFile("./index.html" + request.url, function (error, data) {
        if (error) {
            response.writeHead(404, { "Content-type": "text/plain" });
            response.end("Sorry Page was not found");
        } else {
            response.writeHead(200, { "Content-type": "text/html" });
            response.end(data);
        } 
        
    })
    


})
server.listen(port, host, function () {
    console.log("Listening " + host + ":" + port);
})