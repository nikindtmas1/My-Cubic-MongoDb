const express = require('express');
const app = express();

const portConfig = require('./config/configPort');
const expressConfig = require('./config/configExpress');
const routes = require('./routes');


expressConfig(app);
// app.get('/', (req, res) => {
//     res.send('<h1>Hello Express</h1>')
// });

routes(app);

app.listen(portConfig.development.PORT, () => console.log(`Server listening on port: ${portConfig.development.PORT}...`));