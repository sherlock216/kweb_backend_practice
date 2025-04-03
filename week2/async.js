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

const printFileSize = async (filename) => {
    try {
        // await는 Promise를 반환하는 함수에서만 사용 가능하기 때문에
        // promisify 혹은 return new Promise를 한 것입니다.
        const data = await readFile(filename);
        console.log(`Data length: ${data.length} bytes`);

        const data2 = await readFile("sample2.txt");
        console.log(`Data2 length: ${data2.length} bytes`);

        const data3 = await readFile("sample3.txt");
        console.log(`Data3 length: ${data3.length} bytes`);
    } catch (err) {
        console.error(err);
    }
};

console.log("s1");
printFileSize("sample.txt");
console.log("s2");
