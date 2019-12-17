const Books = require('../models/Books');
class BooksController{
    constructor(){}
    async actionIndex(ctx,next) {
        const books = new Books();
        const result = await books.getData({
            url:'books'
        });
        console.log('🍊',result);
        ctx.body = await ctx.render('books/list',{
            data: result.data
        }) 

    }
}
module.exports = BooksController;