const express = require('express');

const app = express();

const port = process.env.PORT||3000;

app.use(express.static('frontend'));

const host = '0.0.0.0';
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(process.env.PORT);
    console.log("Server Started on Port: Heroku");
});