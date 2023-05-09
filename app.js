const express = require("express");
const path = require("path")
const app = express();

app.use(express.static(path.join(__dirname, "./Public")));

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "./Views/index.html")));

app.get("/register", (req, res) => res.sendFile(path.join(__dirname, "./Views/register.html")));

app.get("/login", (req, res) => res.sendFile(path.join(__dirname, "./Views/login.html")));

app.listen(3030, () => console.log("Servidor escuchando en el puerto 3030🚀"));

