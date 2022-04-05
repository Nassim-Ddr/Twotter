const path = require('path');
const api = require('./api.js');

// Détermine le répertoire de base
const basedir = path.normalize(path.dirname(__dirname));
console.debug(`Base directory: ${basedir}`);

express = require('express');
const app = express()
api_1 = require("./api.js"); //THIS ADDS THE API TO THE SERVER //WE NEED TO ADD 2 OTHERS
const session = require("express-session");

app.use(session({
    secret: "technoweb rocks"
}));

app.use('/api', api.default());//Service wait requests from client //WE NEED TO ADD 2 OTHERS

// Démarre le serveur
app.on('close', () => {
});
exports.default = app;

