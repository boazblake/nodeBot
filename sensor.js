const five = require("johnny-five");
const Tessel = require("tessel-io");

let board = new five.Board( { io: new Tessel() }  );

board.on("ready", function() {
  let rotary = new five.Sensor("a4");

  rotary.on("change", function() {
    console.log("sensor changed!!", this.value);
  });
});