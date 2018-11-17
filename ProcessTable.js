const PageTable = require("./PageTable.js");

//Process Table Class
class ProcessTable {
  
  constructor() {
    this.processTableArray = []; //array of pageTables
  }

  addPageTable(pageTable) { //add pageTable to process table array
    this.processTableArray.push(pageTable);
  }

  getPageTableById(id) { //get the pageTable by id form the proess table array
    for (var i=0; i<this.processTableArray.length; i++) {
      if (id == this.processTableArray[i].id) {
        return this.processTableArray[i]; 
      }
    }
  }
}

module.exports = ProcessTable;