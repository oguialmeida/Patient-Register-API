const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const routes = require("./routes");

// Catching the express lib
const app = express();

// Parsing json objects in to js objects
app.use(bodyParser.json());

// Geting routes
app.use("/", routes);

// Rest security
app.use(helmet());

// Using cors for all requets
app.use(cors());

// Adding morgan to HTTP logs (organize the errors)
app.use(morgan("combined"));

app.get("/", function(req, res) {
    res.send("Get request to the homepage! Go to-> /patient to register :)");
});

app.listen(4344, function () {
    console.log("Servidor rodando na porta 4344");
})