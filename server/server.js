import Koa from 'koa';

const app = new Koa();

app.use(ctx => {
    const greeting = 'Hello World!';

    ctx.body = `<!doctype html>
    <html class="no-js" lang="">
        <head>
            <meta charset="utf-8">
            <meta http-equiv="x-ua-compatible" content="ie=edge">
            <title>HMR all the things!</title>
            <meta name="description" content="">
            <meta name="viewport" 
            content="width=device-width,  initial-scale=1">
        </head>
        <body>
            <div id="root">${greeting}</div>
        </body>
    </html>`;
});

export default app;

