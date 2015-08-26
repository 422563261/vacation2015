var http = require('http'),
    url = require('url'),
    requestHandlers = require('./requestHandlers');


var handle = {};
    handle["/"] = requestHandlers.home;
    handle["/bathroom"] = requestHandlers.bathroom;


http.createServer(function (req, res) {
    var pathname = url.parse(req.url).pathname;   
    route(handle, pathname,req,res);
}).listen(8888);
console.log("already start")



function route(handle, pathname, request, response) {//路径的方法
    if (typeof handle[pathname] == "function") {
        handle[pathname](request, response);
    } else {
        console.log("No request handler found for " + pathname);
    }
}