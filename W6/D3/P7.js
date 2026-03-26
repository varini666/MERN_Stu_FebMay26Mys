// Intro to buffers in NodeJS
// A buffer stores raw bytes
// Here we create buffer directory from a string

const textBuffer = Buffer.from("A"); //ASCII value

// The value in the buffer is the encoded form of the text
console.log("Buffer object:",textBuffer); //encoding
console.log("Buffer length in bytes:",textBuffer.length);
console.log("Byte at index 0",textBuffer[0]);

// Each character is stored internally as byte data
// For standard ASCII letters there will be a equivalent code
// Buffer stores numeric value between 0 to 255