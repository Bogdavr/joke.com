const http = require('http');
let path = require('path');
let fs = require('fs');

let html = "";

let server = http.createServer(function(req, res) {
	if (req.url == '/jokes' && req.method == 'GET') {
	    getAllJokes(req, res);
	}
	else {
        response.writeHead(404, {'Content-Type':'text/html'});
        html = "<h3>Error 404!!!</h3>"
        response.end();
	}  
});

server.listen(3000);

function getAllJokes(req, res) {

}