const router = require('koa-router')();
const article = require('./routes/article');
const user = require('./routes/user');

module.exports = app => {
    article(router)
    user(router)
    app.use(router.routes())
        .use(router.allowedMethods())
}