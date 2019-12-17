const router = require('koa-simple-router'); // koa2.x的简单路由
const IndexController = require('./IndexController');
const indexController = new IndexController();
const BooksController = require('./BooksController');
const booksController = new BooksController();
module.exports = (app) => {
    app.use(router(_ =>{
        _.get('/',indexController.actionIndex);
        _.get('/index',indexController.actionIndex); // 这是路由的参数
        _.get('/list', booksController.actionIndex);
    }))
}