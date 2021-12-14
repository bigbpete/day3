class Computer {
  constructor(brand, model, cpu, drives=[]){
    this.brand = brand;
    this.model = model;
    this.cpu = cpu;
    this.drives = drives;
  }
  addStorage() {

  }
  reformat() {
      
  };
};
class Processor {
  constructor(brand, model, power) {
    this.brand = brand;
    this.model = model;
    this.power = power;
  };
  listSpecs() {
    return `The ${this.brand} ${this.model} produces ${this.power} gHz of processing power.`
  }
};
class Drive {
  constructor(type, maxSpace, spaceRemaining=100000000, data) {
    this.type = type;
    this.maxSpace = maxSpace;
    this.spaceRemaining = spaceRemaining;
    this.data = data;
  }
  wipe() {

  }
  write() {

  };
};

    const data = {
        size: 4000, //bytes
        content: 'Some arbitrary data'
      };