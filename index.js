const express = require('express');
const hbs = require('hbs');
const path = require('path');

const router = require('./routes/routing');

//Starting point for modules for livereload
const livereload = require('livereload');
const connectLiveReload = require('connect-livereload');
// Ending point for modules for livereload

const app = express();

const PORT = process.env.PORT || 3000;

const publicDirectoryPath = path.join(__dirname, './public/');
const viewsPath = path.join(__dirname, './templates/views/');
const partialsPath = path.join(__dirname, './templates/partials/');

// Starting point for code for livereload
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(publicDirectoryPath);
liveReloadServer.server.once('connection', () => {
    setTimeout(() => {
        liveReloadServer.refresh('/');
    }, 100);
});

app.use(connectLiveReload());
//Ending point for the code for livereload

app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicDirectoryPath));

app.use('/', router);

app.listen(PORT, (req, res) => {
    console.log(`Server is up on port: ${PORT}`);
});
