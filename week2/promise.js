const fs = require("fs");

const util = require("util");
const readFile = util.promisify(fs.readFile);

// 아래 코드는 위 두 코드와 동일하게 Promise를 반환합니다.
// 콜백함수 반환하는 readFile을 Promise 반환하도록.
/*const readFile = (filename) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, (err, data) => {
            if (err) reject(err);
            else resolve(data);
        });
    });
};*/

const printFileSize = (filename) => {
    readFile(filename)
        // then: Promise chaining 구조
        .then((data) => {
            console.log(`Data length: ${data.length} bytes`);
            return readFile("sample2.txt");
        })
        .then((data2) => {
            console.log(`Data2 length: ${data2.length} bytes`);
            return readFile("sample3.txt");
        })
        .then((data3) => {
            console.log(`Data3 length: ${data3.length} bytes`);
        })
        .catch((err) => {
            console.error(err);
        });
};

console.log("s1");
printFileSize("sample.txt");
console.log("s2");
