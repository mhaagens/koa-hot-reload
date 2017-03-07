import http from 'http';
import app from './server';

const port = 3000;

const server = http.createServer(app.callback());

let currentApp = app;

server.listen(port);

if (module.hot) {
    module.hot.accept('./server', () => {
        server.removeListener('request', currentApp.callback());
        server.on('request', app.callback());
        currentApp = app;
    });
}

console.log(`Server running on: http://localhost: ${port}`);
