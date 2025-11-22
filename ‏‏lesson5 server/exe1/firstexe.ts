import fs from "fs";



console.log(1);
setTimeout(() => {
    console.log(8)}, 5000);
 
    console.log(2);
 let start=3;
let end=5;

  const interval = setInterval(() => {
    console.log(start);
    start++;
    if (start > end) {
        clearInterval(interval);

        // כאן אחרי שה־interval נגמר, קוראים ל-readFile
        fs.readFile("File.txt", (err, data) => {
            if (err) {
                console.error('אירעה שגיאה בקריאת הקובץ:', err);
                return;
            }
            console.log(data.toString());
            console.log(7);
        });

    }
}, 1000);
