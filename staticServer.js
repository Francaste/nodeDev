var http=require ('http');
var fs=require('fs');

/*This function gets as parameters: res,
path, contentType,responseCode*/
function serveStaticFile(res,path,contentType,responseCode){
  if(!responseCode){//if not specified, responseCode=200
    responseCode=200;
  }
  fs.readFile(__dirname+path,function(err,data){
    if(err){//if err, there has been a server error
      res.writeHead(500, {'Content-Type':'text/plain'});
      res.end('Error 500: Internal Server Error');
    }else{
      res.writeHead(responseCode,{'Content-Type': contentType});
      res.end(data);//add data to response header
    }
  });
}

//create http Server
http.createServer(function(req,res){
  //normalize url
  var path=req.url.replace(/\/?(?:\?.*)?$/,'').toLowerCase();
  switch(path){
    case ''://homepage
    serveStaticFile(res,'/web/index.html','text/html');
    break;
    default:
    serveStaticFile(res,'/web/404.html','text/html',404);
    break;
  }
}).listen(9999);

console.log('Listening on 127.0.0.1:9999');
