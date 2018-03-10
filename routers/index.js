// const fs = require('fs');

var index = async (ctx, next) => {
    // await ctx.render('index.html', {});
    // console.log("ind");
    // ctx.body = fs.readFile('../index.html');
    await ctx.render('index.html', {});
}

// var index_manager = async (ctx, next) => {
//     await ctx.render('index_manager.html', {});
// }

// var index_signin = async (ctx, next) => {
//     await ctx.render('index_signin.html', {});
// }

// var partials = async (ctx, next) => {
//     console.log("haha");
//     var name = ctx.params.name;
//     // await ctx.render('../app/static/' + name, {});
//     // ctx.body = fs.readFile('../app/static/' + name);
//     // ctx.body = fs.readFile('../index.html');
//     await ctx.render('index.html', {});
// }

module.exports = {
    'GET /': index,
    'GET /*': index
    // 'GET /readPost/:id': index,
    // 'GET /signin': index_signin,
    // 'GET /manager': index_manager,
    // 'GET /manager/*': index_manager
    // 'GET /manager': index,
    // 'GET /manager/*': index
}
