//--- constructor func decleration
function Person(name,yearOfBirh,job) {
    this.name = name;
    this.yearOfBirth = yearOfBirh;
    this.job = job
    // console.log(this);
    this.calcAge = function () {
        return 2022 - this.yearOfBirth
    }
}

const yigit = new Person('yiğit',2010,'student');
console.log(yigit instanceof Person);
console.log(yigit.calcAge());

//--- constructor func expression
let Personn = function (name,yearOfBirh,job) {
    this.name = name;
    this.yearOfBirth = yearOfBirh;
    this.job = job
    this.calcAge = function () {
        return 2022 - this.yearOfBirth
    }
}
const emel = new Personn('emel',1989,'teacher');
console.log(emel instanceof Personn);
console.log(emel.calcAge())

//******************************************************** */
console.log('***************************************');



//---Prototype (#263.video)
let Personnn = function (name,yearOfBirh,job) {
    this.name = name;
    this.yearOfBirth = yearOfBirh;
    this.job = job
}

Personnn.prototype.calcAge = function () {
    return 2022 - this.yearOfBirth
}
Personnn.prototype.getName = function () {
    return this.name.toUpperCase()
}
Personnn.prototype.lastName = 'Turan' 

const sadik = new Personnn('sadik',1985,'IT-teacher');
console.log(sadik);
console.log(sadik.calcAge());
console.log(sadik.getName());
console.log(sadik.hasOwnProperty('name')); // const func
console.log(sadik.hasOwnProperty('lastName')); //protoda 

//******************************************************** */
console.log('***************************************');

//---uygulama(#264.video)
const Employee = function (name,salary) {
    this.name = name;
    this.salary = salary
}

Employee.prototype.calcSalary = function () {
    let month = new Date().getMonth() + 1;
    let tax = 0;
    let total = this.salary * month;
    
    if (total <= 20000) {
        tax = total * 0.2;
    } else if((total>20000 && total <=30000)){
        tax = total * 0.25
    } else {
        tax = total * 0.3
    }
    return `Personelin ${month}. ay itibariyle toplam maaşı ${total} TL olmuş olup ödediği vergi tutarı ${tax} TL dir. Eline geçen tutar ${total -tax} TL olmuştur.`
}

const emp1 = new Employee('ali ihsan',3000);
const emp2 = new Employee('mikail',5000);

console.log(emp1.calcSalary());
console.log(emp2.calcSalary());
console.log(emp2);

//******************************************************** */
console.log('***************************************');

//---Object.create()  #265.video
// let emp3 = Object.create(Employee)
// console.log(emp3);
// emp3.name = 'habip';
// emp3.salary = 3500;
// console.log(emp3.calcSalary());

//******************************************************** */
console.log('***************************************');

//---prototyapl inheritance  #266.video

function Personnel(name,yearOfBirth,job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Personnel.prototype.calcAge = function () {
    return 2022 -this.yearOfBirth;
}


function Teacher(name,yearOfBirth,job,subject) {
    // this.name = name;
    // this.yearOfBirth = yearOfBirh;
    // this.job = job;
    //yukarıdakileri tek tek yazmak yerine call methodu ile Personnel constructor func çağıracağız. burada ilk this Teacher objesini temsil eder. Yani Personnel const içindeki name,yearOfBirth,job parametrelerini al Teacher'a this'e aktar.
    Personnel.call(this,name,yearOfBirth,job)

    this.subject = subject;
}

const sibel = new Teacher('sibel',1980,'teacher','English');
console.log(sibel);

// Inherit the Personnel prototype methods
Teacher.prototype = Object.create(Personnel.prototype)

// set Teacher constructor
Teacher.prototype.constructor = Teacher;

const selim = new Teacher('selim',1970,'teacher','Math');
console.log(selim);

//
Teacher.prototype.greeting = function () {
    return 'Hello my name is ' + this.name
}

const özlem = new Teacher('özlem',1970,'teacher','Bio');
console.log(özlem);

//******************************************************** */
console.log('***************************************');

//---Built-in Constructors
let str1 = 'ersen'
console.log(str1);
console.log(typeof str1);  //string

let str2 = new String(str1);
console.log(str2);
console.log(typeof str2);   

let num1 = 10;              //number
let num2 = new Number(10)
console.log(typeof num1);
console.log(typeof num2);

let obj1 = {            // object
    name : 'ersen'
}
const obj2 = new Object({
    name : 'ersen'
});
console.log(typeof obj1);
console.log(typeof obj2);

let arr1 = ['ali','veli','deli','zırdeli'];      //array
console.log(typeof arr1);
console.log(arr1);
let arr2 = new Array('ali','veli','deli','zırdeli');
console.log(typeof arr2);
console.log(arr2);

//// ilave  bir şeyler yapmak istersek
Array.prototype.kaldir = function(member){
    let index = this.indexOf(member);
    if (index > -1){
        this.splice(index,1);
    }
    return this; 
}   
console.log(arr1.kaldir('araba'));
console.log(arr1.kaldir('zırdeli'));

//******************************************************** */
console.log('***************************************');

//---#268.ders inheritance uygulama---//
//1-Person>> 11 student 12teacher >>121headmaster

function Peerson(name) { //Peerson const
    this.name = name
}

Peerson.prototype.introduce = function () {
    return `Hi! I'm ${this.name} `
}
//      //      //
function Teeacher(name,branch) {  //Teeacher const
    Peerson.call(this,name);
    this.branch = branch
}

Teeacher.prototype = Object.create(Peerson.prototype) //Peerson prototype ını Teeacherın prototype ına yarattık.(inherit burada gerçekleşiyor)
Teeacher.prototype.constructor = Teeacher;

Teeacher.prototype.teach = function () {
    return `I teach ${this.branch}`
}
//      //     //
function Stuudent(name,number) {  //Stuudent const
    Peerson.call(this,name);
    this.number = number;
}

Stuudent.prototype = Object.create(Peerson.prototype);
Stuudent.prototype.constructor = Stuudent

Stuudent.prototype.study = function () {
    return `I have already studied hard`
}
//      //     //
function HeadMaster(name,branch,gender) {
    Teeacher.call(this,name,branch)
    this.gender = gender
}

HeadMaster.prototype = Object.create(Teeacher.prototype)
HeadMaster.prototype.constructor = HeadMaster

HeadMaster.prototype.shareTask = function () {
    return `All tasks alady done`
}


const ersen = new Peerson('ersen');
console.log(ersen.introduce());

const hrmet = new Teeacher('hrmet','cyber')
console.log(hrmet.introduce());
console.log(hrmet.teach());

const serife = new Stuudent('serife',111);
console.log(serife);
console.log(serife.study());

const hilmi = new HeadMaster('hilmi','guard',true);
console.log(hilmi);
console.log(hilmi.introduce());
console.log(hilmi.teach());
console.log(hilmi.shareTask());

//******************************************************** */
console.log('***************************************');

//---stack-heap #269.ders
let n1 = 100;
let n2 = n1;
console.log(n1);
console.log(n2);

const myObj1 = {
    country:'England',
    name:'Alex'
}

const myObj2 = myObj1;
myObj1.country = 'France'
console.log(myObj1);
console.log(myObj2);

//******************************************************** */
console.log('***************************************');

//---callback Functions #270.ders
let deneme;

function MultipleByTwo(n1,n2,n3) {
    let arr = [];
    for (let i = 0; i < arguments.length; i++) {
        arr[i] = arguments[i]*2
    }
    return arr;
}

function addOne(a) {
    return a+1;
}

deneme = MultipleByTwo(5,15,25)
console.log(deneme);

for (let i = 0; i < deneme.length; i++) {
    deneme[i] = addOne(deneme[i]);
}
console.log(deneme);


// // asılolay aşağıda

function MultipleByBlaBla(a,b,c,callback){
    let arr = [];
        for(let i=0;i<(arguments.length-1);i++){
            arr[i] = callback(arguments[i]*2);
        }

    return arr;
}

function addOne(a){
    return a+1;
}

function addTwo(a){
    return a+2;
}

function addThree(a){
    return a+3;
}

console.log(MultipleByBlaBla(5,10,20,addThree))

//******************************************************** */
console.log('***************************************');

//---Immediate Functions #271.ders
// yazdığımız funcların sadce uygulama başına çalışamsını istediğimiz durumda

/* dene-gör
function welcome() {
    let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

    let currentDay = new Date().getDay()
    return `Welcome! Today is ${days[currentDay]}`;
}
console.log(welcome());
*/

(function(){
    let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

    let currentDay = new Date().getDay()
    console.log(`Welcome! Today is ${days[currentDay]}`);;
})();

//*****

(function(name){
    let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

    let currentDay = new Date().getDay()
    console.log(`Welcome ${name.toUpperCase()}! Today is ${days[currentDay]}`);;
})('ersen');

//******************************************************** */
console.log('***************************************');

//---Functions that Return Functions #272.ders
function Question(hobby){
   
    switch(hobby){
        case 'car':
            return function(name){
                console.log(name +' do you have a car ?');
            }
        break;

        case 'book':
            return function(name){
                console.log(name +' what is your favourite book ?');
            }
        break;

        case 'software':
            return function(name,type){
                console.log(name +' are you interested in '+type+' ?');
            }
        break;
          
        default:
            return function(name){
                console.log(name +' how are you ?');
            }
    }
}

let hobbyCar = Question('car')
hobbyCar('ersen')

let hobbyBook = Question('book');
console.log(hobbyBook('gunes'));

let softwareQuestion = Question('software');
softwareQuestion('ersen','REACT');

//******************************************************** */
console.log('***************************************');

//---Getter & Setter #273.ders
//before
const me = {
    firstName : 'ersen',
    lastName : 'ozturk',
    getfullName : function () {
        return `${this.firstName} ${this.lastName}`
    },
    setfullName : function (value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}
me.setfullName('mikail dokgoz')
console.log(me.getfullName());

//after
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
me2.fullName = 'mikail dokgoz'
console.log(me2.fullName);

console.log(me);
console.log(me2);

//******************************************************** */
console.log('***************************************');

//---Call,Apply & Bind methods #274.ders
// bu methodlar func üzerinden çağırılır

function greeting() {
    return `Hello..I'm ${this.name} and my native language is ${this.lang}`;
}

let p1 = {name:'Mark', lang:'French'}
console.log(greeting.call(p1)); // parametre yoksa func da apply ile call methodlarının kullanımı aynı
console.log(greeting.apply(p1));
console.log(greeting.bind(p1)); // *** dikkat func döner ***


greetingMark = greeting.bind(p1); //func dan referans alarak yeni func döner
console.log(greetingMark());   //

// call ve apply parametre de işler değişir
function greetingWelcome(a,b) {
    return `Hello..I'm ${this.name} and my native language is ${this.lang}. Are you interested in ${a} or ${b}`;
}

console.log(greetingWelcome.call(p1,'REACT','NODE.JS'));
console.log(greetingWelcome.apply(p1,['REACT','NODE.JS']));

greetingWelcomeMark = greetingWelcome.bind(p1);
console.log(greetingWelcomeMark('REACT','NODE.JS'));   //

//******************************************************** */
console.log('***************************************');

//---Call,Apply & Bind uygulama #275.ders
//func gönderilen herhangi bir sayının belirlibir aralıkta olup olmadığını kontrol edelim

let num ={
    min : 0,
    max : 100,
    checkNumericRange : function(value){
        if (typeof value !== 'number'){
            return false;
        }else{
            return value>=this.min && value<=this.max;
        }
    }
}

console.log(num.checkNumericRange(20));
console.log(num.checkNumericRange(-20));

let numm1 = {min : 10 , max : 30};

console.log(num.checkNumericRange.call(numm1,25));
console.log(num.checkNumericRange.apply(numm1,[52]));

let checkNumber = num.checkNumericRange.bind(numm1);

console.log(checkNumber(56));