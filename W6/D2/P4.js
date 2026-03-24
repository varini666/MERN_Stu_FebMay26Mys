// Using the EventEmitter class
const EventEmitter = require("events"); //npm install lodash

// create a new event emitter instance
// This object can publish events and allow listeners to subscribe
const orderEmitter = new EventEmitter();

// Register a listener for the "orderPlaced" event.
// Whenever the event is emitted the function will execute
// once() register a listener that automatically removes itself after running for the first time
orderEmitter.once("OrderPlaced",          
    function(orderId,customerName,orderValue){
        console.log("Hello",customerName)
        console.log("BillValue",orderValue)
        console.log("waiting for the restaurant to accept order.",orderId);
    }
);

orderEmitter.on("OrderPlaced",
    function(orderId,customerName){
        console.log("Hello",customerName)
        console.log("Restaurant to accept order.",orderId);
    }
);

orderEmitter.on("OrderPlaced",
    function(orderId,customerName){
        console.log("Hello",customerName)
        console.log("Assigning the delivery partner.");
    }
);

orderEmitter.on("OrderPlaced",
    function(orderId,customerName){
        console.log("Hello",customerName)
        console.log("Ramesh is delivering the order.",orderId);
    }
);

// Emit the event with extra data
// The listener receives the orderID value.
orderEmitter.emit ("OrderPlaced","ORD-2403001","varini",10000);
orderEmitter.emit ("OrderPlaced","ORD-2403001","varini",10000);