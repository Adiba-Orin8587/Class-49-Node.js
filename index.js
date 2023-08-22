const express = require('express');
const app = express();
const port = 5000;
const products = require('./product.json')


app.get('/', (req, res) => {
    res.send('Hello World...')
})
app.get('/product', (req, res) => {
    res.send(products)
})
app.get('/product/:id', (req, res) => {
    const id = req.params.id;
    const product = products.find(product => product.id === id);
    res.send(product)
})
app.listen(port, () => {
    console.log("Our Server is running ...")
})