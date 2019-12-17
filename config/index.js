const {join} = require('path');
const { extend } = require('lodash');
let config = {
    "viewDir": join(__dirname, '..', 'views'),
    "staticDir": join(__dirname, '..', 'assets'), // 一些css和js的目录地址
};
// 区分测试环境还是线上环境
if(process.env.NODE_ENV == 'development'){
    let localConfig = {
        // baseUrl:'http://localhost:8080/?r=', // 这种是进入目录启动 php yii server的形式，不推荐
        baseUrl: 'http://localhost/yii_gii/basic/web/index.php?r=', // 这种就是启动了xampp之后 需要把MySQL和Apache都启动起来
        port: 8082
    }
    // config = Object.assign(config, localConfig)
    config = extend(config, localConfig)
}
if(process.env.NODE_ENV == 'production'){
    let proConfig ={
        port: 80
    };
    // config = Object.assign(config, proConfig);
    config = extend(config, proConfig);
}

module.exports = config;