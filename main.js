const fs = require('fs'); //require the file system
const PageTable = require("./PageTable.js");
const ProcessTable = require("./ProcessTable.js");
const PageTableEntry = require("./PageTableEntry.js");
const Memory = require("./Memory.js");

let inputFile = "VMInput.txt";  //read in and parse the input file
let str = fs.readFileSync(inputFile,'utf8'); //read in the entire file
var file = str.split("\n"); //split file by line
var commands = new Array();
for(var i=0; i< file.length;i++) {
  commands.push(file[i].split(" ")); //put the commands into an array
}
var access = 0;
var miss = 0;
var compMiss = 0;
var hits = 0;
var currentPageTable; //the current pageTable program is using
const processTable = new ProcessTable(); //array of pageTables
const memory = new Memory();
for (var i=0; i<commands.length;i++) { //change to commands.length  
  var cmd = commands[i][0];
  switch (cmd) { //read in instrutions from array of commands
    case "new":
      var id = commands[i][1]; //create a new page table and add it to the process table
      const pageTable = new PageTable(id);
      processTable.addPageTable(pageTable);
      break;
    case "switch": //switch the current processTable with id
      var id = commands[i][1];
      currentPageTable = processTable.getPageTableById(id);
      break;
    case "access":
      var memoryId = commands[i][1];
      var bitShift = memoryId >> 10;
      access = access + 1;
      pageTableEntry = new PageTableEntry(bitShift);
      //console.log(typeof currentPageTable.getPageTableEntry(bitShift));
      if (typeof currentPageTable.getPageTableEntry(bitShift) === 'undefined') { //PTE does not exist
        pageTableEntry.isExist ="1";
        miss = miss + 1;
        compMiss = compMiss + 1;
        currentPageTable.addPageTableEntry(pageTableEntry, bitShift); //add PTE to PageTable and Memory
        // if (memory.pageFrames.length => 30) {
        //   memory.addPageTableEntry(pageTableEntry);
        //   pageTableEntry.inMemory = "1";
        // }
        // memory.getFreePage();
        memory.addPageTableEntry(pageTableEntry);
        pageTableEntry.inMemory = "1";
        
      } 
        else {
          if (currentPageTable.getPageTableEntry(bitShift).inMemory == "1") { //PTE is in memory
            hits = hits + 1;
          }
          else { //PTE is not in memory 
            miss = miss + 1;
            memory.getFreePage();
            memory.addPageTableEntry(pageTableEntry);
            //ask mem to store PTE
          }
        }
      break;
  }
}
console.log("Access: " + access);
console.log("Hits: " + hits);
console.log("Misses: " + miss);
console.log("CompMiss: " + compMiss);

