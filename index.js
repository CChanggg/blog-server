const Koa = require('koa');
const app = new Koa();
const router = require('./router');
const db = require('./mongodb/db');

router(app);

app.listen(8087, () => {
  console.log('server is running at 8087 port');
});
