/*const hello = "Hello World";
console.log(hello);*/

//synchronous
/*const fs = require("fs");
const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(textIn);
const textOut = `This is what we know about the avacoda:${textIn}. \n created on ${Date.now()}`;
fs.writeFileSync("./txt/output.txt", textOut);
console.log("file written");*/

//Asynchronous

/*const fs = require("fs");
fs.readFile("./txt/start.txt", "utf-8", (err, data) => {
  console.log(data);
});
console.log("Will read file");*/

//Asynchronous
/*const fs = require("fs");
fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
  fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
    console.log(data2);
  });
});
console.log("Will read file");*/

//Asynchronous
/*const fs = require("fs");
fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
  fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
    console.log(data2);
    fs.readFile(`./txt/append.txt`, "utf-8", (err, data2) => {
      console.log(data2);
    });
  });
});
console.log("Will read file");*/

//Asynchronous
const fs = require("fs");
fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
  if (err) return console.log("error");
  fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
    console.log(data2);
    fs.readFile(`./txt/append.txt`, "utf-8", (err, data3) => {
      console.log(data3);

      fs.writeFile(
        `./txt/final.txt`,
        `${data2} \n ${data3}`,
        "utf-8",
        (err) => {
          console.log("your file has written");
        }
      );
    });
  });
});
console.log("Will read file");
