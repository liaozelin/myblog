const Koa = require('koa');
const router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const views = require('koa-views');
const server = require('koa-static');

const app = new Koa();

// 判断当前环境是开发环境还是服务环境(production)
// const isProduction = process.env.NODE_ENV === 'production';

// 传入一个异步函数来处理每一个请求
app.use(async (ctx, next) => {
    // console.log("Process is running at port 8000...");
    await next();
});

// if (!isProduction) {
    app.use(server('./'));
// }

app.use(bodyParser());

app.keys = ['lzlgreat'];
const session = require('koa-generic-session');
const MongoStore = require('koa-generic-session-mongo');
// var session_config = require('./config').session_config;
app.use(session({
    secret: 'lzlgreat',
    cookie: {
      maxAge: 604800000 // 7 * 24 * 60 * 60 * 1000 //过期时间，一周
    },
    store: new MongoStore({ // 储存方式: mongodb
      db: 'myblog'
      // mongooseConnection: connect
    }),
    resave: true,
    saveUninitialized: true
  }, app));

app.use(views(__dirname + '', {
  map: {
    html: 'nunjucks'
  }
}));

const controller = require('./controller');
app.use(controller('/routers/'));

app.listen(8000);
console.log("the blog is running at port 8000...");
