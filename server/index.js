import http from 'http';
import app from './server';

const port = 3000;

const appCallback = app.callback();
const server = http.createServer(appCallback);

let currentApp = appCallback;

server.listen(port);

if (module.hot) {
    module.hot.accept('./server', () => {
        server.removeListener('request', currentApp);
        server.on('request', appCallback);
        currentApp = appCallback;
    });
}

console.log(`Server running on: http://localhost: ${port}`);
