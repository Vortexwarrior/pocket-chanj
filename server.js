const express = require('express');
const path = require('path');
const api = require('./routes/routes.js');

//port available for heroku and local server
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use('/api', api);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => 
    console.log(`App listening at http://localhost:${PORT}`)
);