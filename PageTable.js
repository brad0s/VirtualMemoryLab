//const PageTableEntry = require("./PageTableEntry.js");

//PageTable class
class PageTable {

  constructor(id) {
    this.id = id;
    this.pageTableArray = new Array(64); //array of pageTable entries
  }

  addPageTableEntry(pageTableEntry, index) { //add PTE to pageTable array
    this.pageTableArray[index] = pageTableEntry;
  } 

  getPageTableEntry(index) { //return the PTE from the PageTable
    return this.pageTableArray[index];
  }
}

module.exports = PageTable;