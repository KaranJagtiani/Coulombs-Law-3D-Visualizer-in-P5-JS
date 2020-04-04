const express = require('express');

const app = express();

const port = process.env.PORT||3000;

const host = "0.0.0.0";

app.use(express.static('frontend'));

app.listen(port, () => {
    console.log("Server Started on Port:", port);
});