//based on initial d
const car = {
  make: "Toyota",
  model: "AE86",
  year: 1987,
  mileage: 333000,
  color: "high-tech two tone: black and white",
  //functions nested with object
  driveToWork: function () {
    console.log(`Takumi's previous mileage: ${this.mileage}`); //calls the mileage
    this.mileage += 33; //changes the total amount of miles
    console.log(`Takumi's current mileage: ${this.mileage}`); //gives new mileage
  },
  driveAroundTheWorld: function () {
    console.log(`Takumi's previous mileage: ${this.mileage}`); //starts with new mileage given in driveToWork function
    this.mileage += 24000;
    console.log(`Takumi's current mileage: ${this.mileage}`);
  },
  runErrands: function () {
    console.log(`Takumi's previous mileage: ${this.mileage}`);
    this.mileage += 30;
    console.log(`Takumi's final mileage: ${this.mileage}`);
  },
};
//calling the functions
car.driveToWork();
car.driveAroundTheWorld();
car.runErrands();
