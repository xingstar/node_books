const SafeRequest = require('../utils/SafeRequest');
class Books{
    constructor(app){
        this.app = app;
    }
    // 获取数据
    getData(options){
        const safeRequest = new SafeRequest(options.url);
        return safeRequest.fetch();
    }
}
module.exports = Books;