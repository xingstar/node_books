class IndexController{
    constructor(){}
    async actionIndex(ctx, next) {
        // console.log('苹果', ctxss); // 这个不存在的变量会导致页面500 同时会在log/cheese.log中打出错误日志
        ctx.body = await ctx.render('books/index',{ // 第一个参数是html文件的路径
            data:'苹果首页'
        });
    }
}
module.exports = IndexController;