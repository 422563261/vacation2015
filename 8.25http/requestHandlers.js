var fs = require('fs');
var http = require("http");
var url = require('url');



function home (req,res) {
	fs.readFile("home.html",function(error, file) {
        if (error) {
            res.writeHead(500, {
                "Content-Type": "text/plain"
            });
            res.write(error);
            res.end();
        } else {
            res.writeHead(200, {
                "Content-Type": "text/html"
            });
            res.write(file);
            res.end();
        }
    });
}



function bathroom (req,res) {
	fs.readFile("bathroom.html",function(error, file) {
        if (error) {
            res.writeHead(500, {
                "Content-Type": "text/plain"
            });
            res.write(error);
            res.end();
        } else {
            res.writeHead(200, {
                "Content-Type": "text/html"
            });
            res.write(file);
            res.end();
        }
    });
}
exports.home = home;
exports.bathroom = bathroom;