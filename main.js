var http=require('http');
var fs =require('fs');
var url =  require('url')

var app = http.createServer(function(request, response){
    var _url = request.url;
    var queryData = url.parse(_url,true).query;
    console.log(queryData);
    if(_url== '/'){
        _url = '/index.html';
    }
    if(_url == '/favicon.ico'){
        return response.writeHead(404);
    }
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + _url));
});

app.listen(3000);

