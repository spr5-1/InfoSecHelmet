const express = require('express');
const app = express();
const helmet = require('helmet');

// Use Helmet to enhance security
app.use(helmet());

// Disable the "X-Powered-By" header for added security
app.use(helmet.hidePoweredBy());

// Example route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Your server setup (e.g., listen on a port)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('server is running on port ${PORT}');
});

process.on('SIGINT', () => {
  server.close(() => {
    console.log('Server shut down gracefully');
    process.exit(0);
  });
});











































module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
