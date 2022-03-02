/*
class Personnel {
    constructor(name,surname,age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    fullName() {
        return this.name + ' ' + this.surname
    }
}

class Teacher extends Personnel {
    constructor(name,surname,age,yearOfBirth,subject,city) {
        super(name,surname,age);
        this.yearOfBirth = yearOfBirth;
        this.subject = subject;
        this.city = city;
    }
    greeting () {
        return `I am ${this.name} and my private subject is ${this.subject}`
    }
}

const selimBey = new Teacher('selim','aykiri',42,1980,'Math','Kayseri');

console.log(selimBey);
*/

//********************************************************* */

/*
function Personnel(name,yearOfBirth,job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Personnel.prototype.country = 'Turkey'

function Teacher(name,yearOfBirth,job,subject,city) {
    Personnel.call(this,name,yearOfBirth,job)
    this.subject = subject;
    this.city = city;
}

const selimBey = new Teacher('selim',1980,'Teacher','Math','Kayseri');
console.log(selimBey.country);

Teacher.prototype = Object.create(Personnel.prototype)
Teacher.prototype.constructor = Teacher;

const jelimBey = new Teacher('jelim',1970,'HeadMaster','Geo','Ankara');
console.log(jelimBey.country);

*/

//********************************************************* */

 /*

const car = {
    color: 'red',
    size: 'large'
}

const whellInfo = {
    wheel : 4
}

const car_whellInfo = {...car, ...whellInfo}
console.log(car_whellInfo);
//
const {color,...rest} = car_whellInfo  //syntax dikkat
console.log(color);
console.log(rest);

 */

//********************************************************* */

/*
function Destruc (color,number,size,year) {
    this.color = color;
    this.number = number;
    this.size = size;
    this.year = year;
    syntax = function() {
        return `My favourite color is ${this.color} since ${this.year}`
    }
}

const tryDestruc = new Destruc('black',6,'medium',1900);
console.log(Object.entries(tryDestruc));

*/

//********************************************************* */

/*
const personBarry = {
    firstName: 'Barry',
    birthYear: 1977,
    location: {
        country: 'USA',
        city: 'New York'
    },
    get age() {
      return new Date().getFullYear() - this.birthYear;
    },
    set age(value) {
      if (value > 0 && value < 150) {
        this.birthYear = new Date().getFullYear() - value;
      }
    },
  };
  
  console.log(personBarry.age);
  
  personBarry.age = 140;
  console.log(personBarry.birthYear);

//

  const me2 = {
    firstName : 'ersen',
    lastName : 'ozturk',
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}
console.log(me2.fullName);
console.log(me2);

me2.fullName = 'mikail dokgoz'
console.log(me2.fullName);
console.log(me2);

*/

//********************************************************* */

 /*
function makeZeroPlusTen(n1,n2,callback) {
    return callback(n1-n2)

}

function callback(a) {
    return (a * 0) + 10
}

console.log(makeZeroPlusTen(5,50,callback));

*/

//********************************************************* */

