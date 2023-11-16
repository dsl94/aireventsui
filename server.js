// const express = require('express');
// const path = require('path');
// const history = require('connect-history-api-fallback');
// // const serveStatic = require('serve-static');

// const app = express();

// const staticFileMiddleware = express.static(path.join(__dirname + '/dist'));

// app.use(staticFileMiddleware);
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   next();
// });
// app.use(history({
//   disableDotRule: true,
//   verbose: true
// }));
// app.use(staticFileMiddleware);

// var server = app.listen(process.env.PORT || 8080, function () {
//   var port = server.address().port;
//   console.log("App now running on port", port);
// });

const express = require('express');

const app = express();

app.use(express.static('./dist/airevents'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/fuse/'}),
);

app.listen(process.env.PORT || 8080);
