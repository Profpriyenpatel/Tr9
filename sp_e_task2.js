const express = require('express');
const session = require('express-session');
const path = require('path');

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: 'key',
    resave: false,
    saveUninitialized: true
}));

app.use(express.static('./'));


// Login
app.post('/login', (req, res) => {
    req.session.username = req.body.username;
    res.redirect('/order.html');
});


// Order
app.post('/order', (req, res) => {
    req.session.product = req.body.product;
    req.session.quantity = req.body.quantity;

    res.redirect('/summary');
});


// Summary
app.get('/summary', (req, res) => {
    res.send(`
        <h2>Summary</h2>
        Username: ${req.session.username} <br>
        Product: ${req.session.product} <br>
        Quantity: ${req.session.quantity}
    `);
});


app.listen(3000);
