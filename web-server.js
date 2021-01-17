const http = require('http');
const port = 3000;
const url = require('url');
const fs = require('fs');

const colors = require('colors');

const server = http.createServer(function(req, res) {
    const urladdress = url.parse(req.url, true);
    const filename = "." + urladdress.pathname;
    fs.readFile(filename, function(err, data) {
        if (err) {
           fs.readFile('404error.html', function(err1, data1) {
                if (err1) {
                    console.log('Error');
                    res.write('Error: File Not Found (404error.html)');
                    return res.end();
                    } else {
                        res.setHeader('Content-Type', 'text/html');
                        res.write(data1);
                        return res.end();
                }
            });
        } else {
            console.log('Request Was Made: ' + req.url);
            res.setHeader('Content-Type', 'text/html');
            res.write(data);
            return res.end();
    }
    });
    
});

server.listen(port, function() {

    console.log('Server Is Online Port:' + port + ''.red);
    console.log('Press Ctrl + C To Stop The Server'.green);
    
    
});