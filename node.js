var http = require('http');

http.createServer(function(req, res){
    res.end('Running on port 80');
}).listen(80);

console.log('Port 80 Started');