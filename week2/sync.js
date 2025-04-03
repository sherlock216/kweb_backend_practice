const fs = require("fs");

console.log("s1");
const data = fs.readFileSync("sample.txt");
console.log(`Data length: ${data.length} bytes`);
const data2 = fs.readFileSync("sample2.txt");
console.log(`Data length: ${data2.length} bytes`);
const data3 = fs.readFileSync("sample3.txt");
console.log(`Data length: ${data3.length} bytes`);
console.log("s2");
