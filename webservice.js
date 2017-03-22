'use strict'

var express = require('express'); // charge ExpressJS
var fs = require('fs');

var router = express.Router();
module.exports = router;

router.get(['/s1', '/s2', '/s3', '/s4', '/s5'], function(req, res, next) {
	console.log('req.url', req.url);
	fs.readFile('ws' + req.url, function(err, data) {
		if (err) {
			return console.log('error', err);
		}
		var json = JSON.parse(data);
		var delay = json.delay;
		setTimeout(function() {
			res.json(json);
		}, delay);
	});
});
