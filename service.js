const express = require('express');
const fs = require('fs');

const hostname = ' 127.0.0.1';
const port = 3000;

const home = fs.readFileSync('./index.html')
const services = fs.readFileSync('./services.html')
const about = fs.readFileSync('./about.html')
const contact = fs.readFileSync('./contact.html')


const server = http.createServer( (req, res) =>{
    res.setHeader('Content-Type', 'text/html');
    if(req.url=='/'){
        res.end(home)
    }
    else  if(req.url=='/services'){
        res.end(services)
    }
    else  if(req.url=='/about'){
        res.end(about)
    }
    else  if(req.url=='/contact'){
        res.end(contact)
    }
})

server.listen(port, hostname, () =>{
    console.log(`server is started on : http://${hostname}:${port}`)
})