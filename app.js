const http = require('http'),
httpProxy = require('http-proxy');

// Create a proxy server with custom application logic
const proxy = httpProxy.createProxyServer({
  xfwd: true,
  changeOrigin: true
});

// To modify the proxy connection before data is sent, you can listen
// for the 'proxyReq' event. When the event is fired, you will receive
// the following arguments:
// (http.ClientRequest proxyReq, http.IncomingMessage req,
//  http.ServerResponse res, Object options). This mechanism is useful when
// you need to modify the proxy request before the proxy connection
// is made to the target.
proxy.on('proxyReq', (proxyReq, req, res, options) => {
  proxyReq.setHeader('x-forwarded-host', process.env['X-FORWARDED-HOST']);
  proxyReq.setHeader('x-forwarded-proto', process.env['X-FORWARDED-PROTO']);
  proxyReq.setHeader('x-forwarded-port', process.env['X-FORWARDED-PORT']);
  proxyReq.setHeader('x-forwarded-for', process.env['X-FORWARDED-FOR']);
});

const server = http.createServer((req, res) => {
  // You can define here your custom logic to handle the request
  // and then proxy the request.
  proxy.web(req, res, {
    target: process.env['URL_SITE']
  });
});

console.log(`listening on port ${process.env['PORT']}`)
server.listen(process.env['PORT']);