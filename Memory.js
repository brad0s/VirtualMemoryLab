const PageTableEntry = require("./PageTableEntry.js");

//Memory class
class Memory {
  
  constructor() {
    this.pageFrames = new Array(30);
  }

  addPageTableEntry(pageTableEntry) {
    for (var i=0; i<this.pageFrames.length; i++) {
      if (typeof(this.pageFrames[i]) === "undefined") {
        this.pageFrames.splice(i, 1, pageTableEntry);
        break;
      } 
    }
  }

  // getLength() {
  //   return this.pagesFrames
  // }

  // getFreePage() {
  //   console.log(this.pageFrames.length);
  //   if (this.pagesFrames.length == 30) {
  //     this.pageFrames[0].inMemory = "0";
  //     this.pageFrames[0] = undefined;
  //   }
  // }
  // setFrame(frame, PageTableEntry pte) { //set the frame in memory
  // }

  // getFrame(frame) { //get the frame from memory of type PTE
  // }

  // getFreePage() { //make spae for a new PTE in array
  // }

  // findSwapPage() { //idk
  // }

  // convert(frame) { //idk
  // }
}

module.exports = Memory;