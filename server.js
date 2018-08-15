const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const Task = require("./api/models/models");
const bodyParser = require('body-parser');

let routes = require("./api/routes/routes");
routes(app); // register our routes

// get our server running
app.listen(port, () => {
    console.log("App up and running on" + port);
});
