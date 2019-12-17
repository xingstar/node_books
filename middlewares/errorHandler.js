/*
 * @Author: ministar 
 * @Date: 2019-11-14 18:00:08 
 * @Last Modified by: ministar
 * @Last Modified time: 2019-12-16 15:28:06
 */
// 错误处理机制，有错就及时报出来
const errorHandler = {
    error(app, logger){
        app.use(async (ctx,next) => {
            try{
                await next();
            }catch(error){
                // 如果node挂了，及时排查
                logger.error(error);
                ctx.status = error.status || 500;
                ctx.body = '错误咯';
            }
        });
        app.use(async (ctx, next) => {
            await next();
            if(ctx.status !== 404){
                return;
            }
            ctx.status == 404; // 一般都会默认的200 因为长时间出现404会出现降权的情况，所以一般不会自己设置为404
            ctx.body = '<script type="text/javascript" src="//qzonestyle.gtimg.cn/qzone/hybrid/app/404/search_children.js" charset="utf-8"></script>'; // 公益页面
        })
    }
};
module.exports = errorHandler;