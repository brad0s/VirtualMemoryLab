//PageTableEntry class
class PageTableEntry {

  constructor(id) {
    this.id = id;
    this.isExist = null;
    this.inMemory = null;
  }
  // getFrame() { //returns the frame
  //   return this.frame;
  // }
  // inMemory() { //says whether or not PTE is in memory
  //   return this.inMemory;
  // }
  // swapToDisk(diskFrame) { //change to get PTE from disk

  // }
  // swapToMemory(memFrame) { //change to get PTE from main memory

  // }
};

module.exports = PageTableEntry;