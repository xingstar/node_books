const Koa = require('koa');
const render = require('koa-swig'); // 模板引擎
const co = require('co'); // koa2.x版本使用koa-swig模板引擎时需要使用的插件 
const serve = require('koa-static'); // 是koa的静态文件服务中间件，解决路径问题
const config = require('./config'); 
const errorHandler = require('./middlewares/errorHandler');
const log4js = require('log4js');// log4js如果没有用好的，非常容易出现node内存泄漏
const app = new Koa();
log4js.configure({
    appenders: { cheese: { type: 'file', filename: './log/cheese.log'}},
    categories: {default:{ appenders: ['cheese'], level: 'error'}}
})
app.context.render = co.wrap(render({
    root: config.viewDir,
    autoescape: true, // true 就是HTML安全转义； false不转义除非使用转义标签或转义过滤器； 'js': js安全转义
    cache:false, // false 将重新编译每个请求的模板文件， 正式环境建议设为true，设为true就是好多东西都缓存了，调试的是不变就特郁闷
    ext:'html',
    writeBody: false, // 不插入到body中而是插入的head中
    varControls: ["[[", "]]"],
}))
app.use(serve(config.staticDir)); // 之后使用 assets文件夹下的 文件， 在使用的地方直接类似 /css/xx.css 或者 /js/xx.js  以/开头

const logger = log4js.getLogger('cheese');
errorHandler.error(app,logger); //先让他next() 再回来的时候判断当前的业务情况，因为koa的中间件是洋葱形式的
require('./controllers')(app); // 这一句反正是要放到errorHandler下面写的，不然controller文件里错误在错误日志里打不出来
app.listen('8777',()=>{
    process.env.NODE_ENV = 'testxingxingxingxing'; // process.env是node的东西，可以设置属性也可以获取，NODE_ENV就是我们自己设置的属性
    console.log(process.env.NODE_ENV)
    console.log('books启动成功');
})