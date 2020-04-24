const express = require('express');

const app = express();

const port = process.env.PORT||3000;

app.use(express.static('frontend'));

const host = '0.0.0.0';

app.listen(port, () => {
    console.log("Server Started on Port:", port);
});