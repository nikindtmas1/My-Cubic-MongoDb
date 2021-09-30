const express = require('express');
const app = express();

const portConfig = require('./config/configPort');
const expressConfig = require('./config/configExpress');
const mongooseConfig = require('./config/configMongoose');

const routes = require('./routes');



expressConfig(app);
mongooseConfig(app);

routes(app);

app.listen(portConfig.development.PORT, () => console.log(`Server listening on port: ${portConfig.development.PORT}...`));