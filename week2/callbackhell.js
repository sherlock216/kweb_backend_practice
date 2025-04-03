const fs = require("fs");

const printFileSize = (filename) => {
    fs.readFile(filename, (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`Data length: ${data.length} bytes`);

        fs.readFile("sample2.txt", (err2, data2) => {
            if (err2) {
                console.error(err2);
                return;
            }
            console.log(`Data2 length: ${data2.length} bytes`);

            fs.readFile("sample3.txt", (err3, data3) => {
                if (err3) {
                    console.error(err3);
                    return;
                }
                console.log(`Data3 length: ${data3.length} bytes`);
            });
        });
    });
};

console.log("s1");
printFileSize("sample.txt");
console.log("s2");
