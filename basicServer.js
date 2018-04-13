var http=require('http');

http.createServer(function(req,res){
  var path=req.url.replace(/\/?(?:\?.*)?$/,'').toLowerCase();
  switch(path){
    case '':
    //when there is no path, it shows homepage
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('HOME');
    case '/about':
    //It shows about page
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('ABOUT');
    default:
    res.writeHead(404,{'Content-Type':'text/plain'});
    res.end('404 Error Page Not Found');

  }
}).listen(9999);

console.log('Listening on 127.0.0.1:9999');
