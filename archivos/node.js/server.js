var http = require("http");
var url = require("url");

var express = require("express");// añanidas 
var app = express();// añadidas


app.get('/', function (req, res){
	res.send('Res.Render!');  //hello world!
});



app.use("/rutaPersonalizada",express.static("archivos"));//añadida 

function iniciar(route){ //(route)
function onRequest(request, response){
 var pathname = url.parse(request.url).pathname;
 console.log("Peticion para " + pathname + "Recibida.");

    route(pathname);
//http.createServer(function(request, response) {
	
	response.writeHead(200, {"content-type": "text/html"});
	response.write("hola mundo");
	response.end();

}

http.createServer(onRequest).listen(8888);
console.log("Servidor Iniciado.");
}

exports.iniciar = iniciar; 
