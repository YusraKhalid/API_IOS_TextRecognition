const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const Task = require("./api/models/models");
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let routes = require("./api/routes/routes");
routes(app); // register our routes

// then handle wrong routes 
app.use((req, res) => {
    res.status(404).send({ url: req.originalUrl + ' not found' });
});

// get our server running
app.listen(port, () => {
    console.log("App up and running on" + port);
});
