const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3030;

app.use(express.static('public'));

app.listen(3030, () => console.log('servidor corriendo'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/index.html'))
})

app.get('/login', (req, res)=>{
    res.sendFile(path.join(__dirname, './views/login.html'))
})

app.get('/register', (req, res)=>{
    res.sendFile(path.join(__dirname, '/views/register.html'))
})

app.get('/carrito', (req, res)=>{
    res.sendFile(path.join(__dirname, './views/carrito.html'))
})