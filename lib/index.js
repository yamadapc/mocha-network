'use strict';
var util = require('util');
var Mocha = require('mocha');
var SocketIOServer = require('socket.io');

var Base = Mocha.reporters.Base;

// Expose the NetworkReporter
exports = module.exports = NetworkReporter;

/**
 * A Mocha reporter which just proxies test events to a Socker.IO server.
 */

function NetworkReporter(runner) {
  this.constructor.super_.call(this, runner);
  var io = getTransportInstance();
  eventProxy(runner, io);
}

util.inherits(NetworkReporter, Base);

/**
 * Proxies events from one EventEmitter to another.
 *
 * @param {EventEmitter} source
 * @param {EventEmitter} target
 */

function eventProxy(source, target) {
  var originalEmit = source.emit;
  source.emit = function(/*evt, args...*/) {
    console.log(arguments);
    target.emit.apply(target, arguments);
    originalEmit.apply(source, arguments);
  };
}

/**
 * Guard a singleton for a Socket.IO server
 */

var io;
function getTransportInstance() {
  if(!io) io = new SocketIOServer(9999);
  return io;
}
