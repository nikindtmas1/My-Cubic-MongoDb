const express = require('express');
const app = express();

const portConfig = require('./config/configPort');

app.get('/', (req, res) => {
    res.send('<h1>Hello Express</h1>')
});


app.listen(portConfig.development.PORT, () => console.log(`Server listening on port: ${portConfig.development.PORT}...`));