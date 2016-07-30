var five = require("johnny-five");
var Tessel = require("tessel-io");

var board = new five.Board( { io: new Tessel() });

board.on("ready", function() {
  var  button = new five.Button("a4");
  var led = new five.Led("a5")

  button.on("press", function() {led.on()});
  button.on("hold", function() {led.blink(50)});
  button.on("release", function() {led.stop().off()});
});

