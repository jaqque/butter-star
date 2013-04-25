/**
 * main.js
 * @fileoverview Check that the client HTML and JS files are error-free
 * before creating a server.
 * @author Trevor Pottinger
 */

var config = require('./config.js');
var http = require('./net/fullHTTP.js'), 
	 debug = require('./net/debugHTTP.js'),
	 ws = require('./net/simpleWS.js');

// TODO check for args
config.ip = process.argv[2];
console.log('Server IP: %s', config.ip);

// TODO link with game logic
var games = [];

var httpServer = new http(config);
var wsServer = new ws(config, httpServer);
var serverDebugger = new debug(config, httpServer, wsServer);

// TODO when user selects 'New Game' 
//console.log('New game: %s', httpServer.newGame());

module.exports.config = config;
module.exports.httpServer = httpServer;
module.exports.wsServer = wsServer;
