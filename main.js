const express = require("express");
const app = express()

app.get("/", function(req, res) {
    res.send("Get request to the homepage");
});

app.listen(4344, function () {
    console.log("Servidor rodando na porta 4344");
})