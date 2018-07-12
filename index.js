const Koa = require('koa');
const app = new Koa();
const router = require('./router');
// const middleWare = require('./middleware')
// const db = require('./mongodb/db');

// middleWare(app)
router(app);

app.listen(8087, () => {
  console.log('server is running at 8087 port');
});
