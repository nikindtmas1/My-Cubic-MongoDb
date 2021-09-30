
const homePage = require('./controllers/homeController');
const cubController = require('./controllers/cubeController');

module.exports = (app) => {

    app.use('/', homePage);
    app.use('/cubics', cubController);
}