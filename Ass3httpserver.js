var h = require('http');

var server = h.createServer(function(req,res){
	console.log("Request Received");
	res.writeHead(200,{'content-type':'text/html'});
	res.write("<h1>Hello from Node Js<h1>");
	res.end();
	
});

server.listen(9000,function(){
	console.log("Server Hosted!!!");
});

