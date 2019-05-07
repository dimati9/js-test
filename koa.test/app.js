const Koa = require('koa')
const Router = require('koa-router')
const Logger = require('koa-logger')
const cors = require('koa-cors');
const bodyParser = require('koa-body')()

const app = new Koa();
const router = new Router();
const product = require('./product/product');


// Отвечаем миру на GET запросы

app.use(cors());

router
    .get('/users', async (ctx, next) => {
        // ctx.body = await product.getAll()
        let result =  await product.getAll()
        if (result) {
            ctx.body = result.rows
        } else {
            console.log(ctx.body);
        }
    })
    .get('/user/:id', async (ctx, next) => {
        let result = await product.get(ctx.params.id);
        if (result) {
            ctx.body = result.rows
        } else {
            ctx.status = 204
        }
    })
    .post('/login', bodyParser, async (ctx, next) => {
        ctx.body = await product.check(ctx.request.body)
        ctx.status = 201;
    })
    .post('/user', bodyParser, async (ctx, next) => {
        ctx.status = 201;
        ctx.body = await product.create(ctx.request.body)
    })
    .put('/user/:id', bodyParser, async (ctx, next) => {
        ctx.status = 204;
        await product.update(ctx.params.id, ctx.request.body);
    })
    .delete('/user/:id', async (ctx, next) => {
        ctx.status = 204;
        await product.delete(ctx.params.id);
    });





// Логгер
app.use(Logger());
// Добавим все роуты. Второй middleware отвечает на OPTIONS запросы.
app.use(router.routes()).use(router.allowedMethods());




// Слушаем порт, запускаем сервер
app.listen(3000, () => {
    console.log('Server running on port 3000');
});