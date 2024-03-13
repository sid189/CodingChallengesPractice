#!/usr/bin/env node

import { argv } from 'node:process';
import { readFile } from 'fs';
const byteSize = str => new Blob([str]).size;


readFile(argv[3], (err, data) => {
  if (err) throw err;



  if (argv[2] == "-c") {
    console.log((byteSize(data.toString())) + " " + (argv[3]));
  }
  
  else if (argv[2] == "-l") {
    console.log(data.toString().split('\n').length-1 + " " + (argv[3]));
  }
  
  else if (argv[2] == "-w") {
    console.log(data.toString().trim().split(/\s+/).length + " " + (argv[3]));
  }
  
  else if (argv[2] == "-m") {
    console.log(data.toString().length + " " + (argv[3]));
  }

  else if (argv.length == 3 && argv[2] == "Input.txt") {
    console.log(data.toString().split('\n').length-1 + " " 
    + data.toString().trim().split(/\s+/).length + " "
    + (byteSize(data.toString())) + " "
    + argv[2])
  }

  else {
    console.log("Pass the correct parameters")
  }
});
