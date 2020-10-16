const http = require('http')
const fs = require('fs')

http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/html'});
  fs.readFile('index.html', function(err, data){
    if(err){
      return console.log(err);
    }
  res.end(data);
  });
}).listen(8080);
console.log('Server is running on Port: 8080');