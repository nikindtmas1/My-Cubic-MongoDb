
const homePage = require('./controllers/homeController');
const cubController = require('./controllers/cubeController');
const accessoryController = require('./controllers/accessoryController');
const authController = require('./controllers/authController');

module.exports = (app) => {

    app.use('/', homePage);
    app.use('/cubics', cubController);
    app.use('/accessories', accessoryController);
    app.use(authController);
    
}