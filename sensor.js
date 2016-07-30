const five = require("johnny-five");
const Tessel = require("tessel-io");

let board = new five.Board( { io: new Tessel() }  );

board.on("ready", function() {
  let led = new five.Led("a5");

  let rotary = new five.Sensor({
    pin: "a4",
    threshold:5,
    frequency:100
  });

  rotary.scale(0, 1024).on("change", function() {
      // Analog sensors produce a 10-bit value,
        // but led brightness is an 8-bit PWM value.
        // Convert by shifting the value's bits
        // two places to the right.
        led.brightness(this.value >> 2)
  });
});