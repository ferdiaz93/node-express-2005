const express = require("express");
const path = require("path");
const app = express();
const users = require("../users.json");

const home = path.join(__dirname, "../front", "index.html");

const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../front")));

app.get('/', (req, res) => {
    res.sendFile(home);
})

app.get('/users', (req, res) => {
    res.json(users)
})

app.listen(PORT, () => {
    console.log(`Servidor iniciado en puerto ${PORT}...`);
});
