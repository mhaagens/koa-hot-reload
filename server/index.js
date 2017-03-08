import http from 'http';
import app from './server';

const port = 3000;

const server = http.createServer(app.callback()).listen(3000);

if (module.hot) {
    module.hot.accept('./server', () => {
        server.removeAllListeners('request', server);
        server.on('request', app.callback())
    });
}

console.log(`Server running on: http://localhost: ${port}`);