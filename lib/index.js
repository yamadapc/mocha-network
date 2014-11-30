'use strict';
var events = require('events');
var util = require('util');
var CircularJSON = require('circular-json');
var SocketIOServer = require('socket.io');

var EventEmitter = events.EventEmitter;

var EVENT_TYPES = [
 'start',
 'end',
 'suite',
 'suite end',
 'test',
 'test end',
 'hook',
 'hook end',
 'pass',
 'fail',
 'pending',
];

// Expose the NetworkReporter
exports = module.exports = NetworkReporter;

/**
 * A Mocha reporter which just proxies test events to a Socker.IO server.
 */

function NetworkReporter(runner) {
  this.constructor.super_.call(this, runner);

  var io = getTransportInstance();
  EVENT_TYPES.forEach(function(eventType) {
    runner.on(eventType, function(data) {
      io.emit(eventType, CircularJSON.stringify(data));
    });
  });
}

util.inherits(NetworkReporter, EventEmitter);

/**
 * Guard a singleton for a Socket.IO server
 */

var io;
function getTransportInstance() {
  if(!io) io = new SocketIOServer(9999);
  return io;
}
