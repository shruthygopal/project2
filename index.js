var http=require('http'),
port=8080,
host="localhost";
var server=http.createServer(function(req, res){
res.writeHead(200,{"Content-Type":"Text/plain"})
);
res.write("hello world");
res.end();
});
server.listen(port,host,function(){
  console.log("listening...");
});
