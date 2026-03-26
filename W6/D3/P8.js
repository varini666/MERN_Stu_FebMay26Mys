// Allocating buffers

const emptyBuffer = Buffer.alloc(8);
console.log("contents of emptyBuffer:",emptyBuffer);
console.log("Allocated buffer bytes:",[...emptyBuffer]);  //[...emptyBuffer]- It is a rest parameter(to handle multiple values)

const textBuffer = Buffer.from([65,66,67]);
console.log("Buffer from byte array:",textBuffer);

// Buffer.write() writes text into the buffer
const buffer = Buffer.alloc(20);
const byteWritten = buffer.write("HelloWorld");
console.log("Bytes written:",byteWritten);

// Subarray
const firstSlice = buffer.subarray(3,6);
console.log("First slice as bytes: ",[...firstSlice]);

// Decode the bytes into text: toString()
// console.log("Decoded firstslice of buffer:",buffer.subarray(1,4).toString("utf-8"));
console.log("Decoded firstslice of buffer:",firstSlice.toString("utf-8"));
