
const homePage = require('./controllers/homeController');

module.exports = (app) => {

    app.get('/', homePage)
}