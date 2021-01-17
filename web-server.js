const http = require('http');
const port = 3000;
const url = require('url');
const fs = require('fs');
const server = http.createServer(function(req, res) {
    const urladdress = url.parse(req.url, true);
    const filename = "." + urladdress.pathname;
    fs.readFile(filename, function(err, data) {
        if (err) {
            res.write("404 File Not Found");
            return res.end();
        } else {
            res.setHeader('Content-Type', 'text/html');
            res.write(data);
            return res.end();
    }
    });
    
});

server.listen(port, function() {

    console.log('Server Is Online Port:3000');
    
});