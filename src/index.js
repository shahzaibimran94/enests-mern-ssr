import http from 'http';

let app = require('./server').default;

const server = http.createServer(app);

let currentApp = app;

server
  .listen(process.env.PORT || 8080, () => {
    console.log('🚀 started', `http://${server.address().address}:${server.address().port}`);
  })
  .on('error', error => {
    console.log(error);
  });

if (module.hot) {
  console.log('✅  Server-side HMR Enabled!');

  module.hot.accept('./server', () => {
    console.log('🔁  HMR Reloading `./server`...');

    try {
      app = require('./server').default;
      server.removeListener('request', currentApp);
      server.on('request', app);
      currentApp = app;
    } catch (error) {
      console.error(error);
    }
  });
}
