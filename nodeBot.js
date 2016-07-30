var five = require("johnny-five");
var Tessel = require("tessel-io");

var board = new five.Board( { io: new Tessel() } );

board.on("ready", function(){
  var led = new five.led("a5");
  led.on();
});