const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
app.use(cookieParser());

const portConfig = require('./config/configPort');
const expressConfig = require('./config/configExpress');
const mongooseConfig = require('./config/configMongoose');

const routes = require('./routes');

const auth  = require('./middlewares/authMiddleware');
app.use(auth);


expressConfig(app);
mongooseConfig(app);

routes(app);

app.listen(portConfig.development.PORT, () => console.log(`Server listening on port: ${portConfig.development.PORT}...`));