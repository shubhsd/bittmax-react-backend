const user = require('../controllers/userControllers')
module.exports = (app) => {
    app.post('/user/addItem',user.addItem);
    app.get('/user/getItem',user.getItem);
    app.post('/user/login', user.login);
    app.post('/user/register', user.register);
}