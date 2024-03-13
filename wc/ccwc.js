const { argv } = require('node:process');
const fs = require('fs')
const byteSize = str => new Blob([str]).size;

console.log(argv[2])
console.log(argv[3])

fs.readFile('Input.txt', (err, data) => {
  if (err) throw err;
 
  console.log(data.toString());
  console.log(byteSize(data.toString()));
  console.log(data.toString().split('\n').length-1);
  console.log(data.toString().trim().split(/\s+/).length);
  console.log(data.toString().length);
});
