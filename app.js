const Koa = require('koa');
const app = new Koa();



const path = require('path');
const serve = require('koa-static');

const main = serve(path.join(__dirname, 'code'));
app.use(main);

// app.use(async ctx => {
//     ctx.body = 'Hello World';
// });

app.listen(2000, '192.168.0.155');