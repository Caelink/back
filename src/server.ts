import * as Koa from 'koa';
import routes from './routes';
import problem from './middleware/problem';
import browser from './middleware/browser';
import notfound from './middleware/notfound';
import * as bodyparser from 'koa-bodyparser';

const app = new Koa();

app.use((ctx: Koa.Context, next: Function) => {

  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.set('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,HEAD');
  ctx.set('Access-Control-Allow-Headers', 'Content-Type,Access,User-Agent');
  ctx.set('Access-Control-Expose-Headers', 'Content-Type');

  if (ctx.method === 'OPTIONS') {
    ctx.status = 204;
    return;
  } else {
    return next();
  }


});

app.use(browser);
app.use(problem);
app.use(bodyparser());
app.use(routes);
app.use(notfound);

app.on('error', (err) => {

  console.log(err);

});

app.listen(3000);
