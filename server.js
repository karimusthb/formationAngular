'use strict';

var express = require('express'); // charge ExpressJS
var serveIndex = require('serve-index');

var ws = require('./webservice.js');
var app = express();

// webpack
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
// webpackConfig.output.path = '/';
var compiler = webpack(webpackConfig);
var webpackDevMiddleware = require('webpack-dev-middleware');
app.use(webpackDevMiddleware(compiler, {
    // options
}));

app.use('/ws/', ws);
app.use(express.static('.'));
app.use(serveIndex('.', {
	icons: true
}));

app.use(function(req, res, next) {
	console.log('404: Page not Found', req.url);
	next();
});

app.use('/app/', function(req, res, next) {
	console.log('url rewriting', req.url);
	res.sendFile('/app/index.html', {
		root: __dirname
	});
});

app.listen(8000, function() {
	console.log('server started on port 8000');
});
