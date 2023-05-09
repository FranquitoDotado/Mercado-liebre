const express = require("express");
const path = require("path")
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "./public")));

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "./Views/index.html")));

app.get("/register", (req, res) => res.sendFile(path.join(__dirname, "./Views/register.html")));

app.get("/login", (req, res) => res.sendFile(path.join(__dirname, "./Views/login.html")));

app.listen(PORT, () => console.log("Servidor escuchando en el puerto " + PORT + "🚀"));

