var events = require("events");

var eventEmitter = new events.EventEmitter();

// on is alias of addListener 
eventEmitter.on("print", (data) => {
  console.log("🚀 Printing ............... " + data);
});

eventEmitter.emit("print", "clicked");

eventEmitter.addListener("count", function (n1, n2) {
  console.log("🚀 Calculate = " + (n1 + n2));
});

eventEmitter.emit("count", 1, 2);
