const express = require('express');
const app = express();
const path = require('path');

const hostname = ' 127.0.0.1';
const port = 3000;

const staticPath = path.join(__dirname, '../public')


app.use(express.static(staticPath))
app.get('/index', (req, res) =>{
    res.send('Hello home')
})

app.get('/contact', (req, res) =>{
    res.send('Hello contact')
})

app.get('/about', (req, res) =>{
    res.send('Hello about')
})



const server = app.listen(port, function(){
    console.log('Server Active on', port);
  });