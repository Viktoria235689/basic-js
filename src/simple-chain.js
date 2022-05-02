const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr: [],

  getLength() {
    return this.arr.length;
  },
  addLink(value="") {
    this.arr.push(value);
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position)) {
      this.arr = [];
      throw new Error(`You can't remove incorrect link!`) 
    }  

    if (typeof(position) != `number`) {
      this.arr = [];
      throw new Error(`You can't remove incorrect link!`) 
    }

    if (position > 0 && position <= this.arr.length) {
      this.arr.splice(position-1, 1);
    } else {
      this.arr = [];
      throw new Error(`You can't remove incorrect link!`) 
    }
    return this;
  },
  reverseChain() {
    this.arr = this.arr.reverse()
    return this;
  },
  finishChain() {
    this.newArr = this.arr;
    this.arr =[];
    return this.newArr.map((a,i)=>(i>0)? `~~`+ `( ${a} )`: `( ${a} )`).join("");
  }
};

module.exports = {
  chainMaker
};
