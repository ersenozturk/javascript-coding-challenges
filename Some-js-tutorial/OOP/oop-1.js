const person = {
    name:'gunes',
    surname: 'ozturk',
    age: 1,
    fullName : function () {
        return this.name + ' ' + this.surname
    }
}

console.log(person);
console.log(person.fullName());

//******************************************** */

function Man(height,weight,age) {
    this.height = height;
    this.weight = weight;
    this.age = age;
    this.avarage = function () {
        return this.height / this.weight
    }
}

const ersen = new Man(173,80,29)
console.log(ersen.avarage());
console.log(ersen);
// Object + height,weight,age,avarage() --> Man --> ersen

console.log(ersen.__proto__);

const enes = new Man(180,70,22)
enes.job = 'Data scientist'
console.log(enes);
// Object + height,weight,age,avarage() --> Man + job --> enes

// ****************
// ***************

function Women(height,weight,age) {
    this.height = height;
    this.weight = weight;
    this.age = age;
    this.avarage = function () {
        return this.height / this.weight
    }
}

Women.prototype.avarage = function () {  // ortağa aldım
    return this.height / this.weight
}

Women.prototype.country = 'France'  // ortağa aldım

const helen = new Women(163,55,20);
console.log(helen.country);
console.log(helen.avarage().toFixed(2));

//****
//****
// object destructison
// oblectin bize yararlı olan kısmını destruc yapcaz
const books = [
    {
        name:'aaa',
        page:345
    },
    
    {
        name:'BBB',
        page: 434
    },


    {
        name:'CCCc',
        page: 1431
    }
]

for (const {name,page} of books) {
    console.log(`${name} isimli kitap ${page} sayfadan oluşur.`);
}

//spread operator

const kızım = {
    name:'gunes',
    surname: 'ozturk',
    age: 1,
    fullName : function () {
        return this.name + ' ' + this.surname
    }
}

const kızım2 = {...kızım};
console.log(kızım2);
/////////
const myObj1 = {
    name: 'Arin',
    age: 6
}

const myObj2 = {
    country: 'Turkey',
    city: 'Balıkesir'
}

const arin_girl = {...myObj1, ...myObj2}
console.log(arin_girl);
//
const arin_girl2 = {...myObj1, job:'student', ...myObj2}
console.log(arin_girl2);

//REST Operator //rest şart değil temsili kullanımdır.

const wife = {
    name:'sahinder',
    surname: 'ozturk',
    age: 29,
    fullName : function () {
        return this.name + ' ' + this.surname
    }
}

/* const{name,surname,age} = wife;
console.log(wife.name); */

const {name,...rest} = wife
console.log(name);
console.log(rest);


//object values - object entries

const wifess = {
    name:'aaa',
    surname: 'bbb',
    age: 29,
    fullName : function () {
        return this.name + ' ' + this.surname
    }
}

console.log(Object.keys(wifess)); //arr içinde yazdrma
console.log(Object.values(wifess)); //arr içinde yazdrma
console.log(Object.entries(wifess)); //arr içinde çift yazdrma

//************************************************************************************************************* */
// JS Classes

function Student(name,surname,age,) {
    this.name = name;
    this.surname = surname;
    this.age = age
    this.fullName = ()=> {
        return this.name + ' ' + this.surname
    }
}

const studentAyse = new Student('ayse','esya',10)
console.log(studentAyse);

//***

function Student1(name,surname,age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
}

// function fullName() {
//     return this.name + ' ' + this.surname
// }

Student1.prototype.fullName = function() {return this.name + ' ' + this.surname};

const aliStudent1 = new Student1('ali','deli',99);
console.log(aliStudent1.fullName());
console.log(aliStudent1);

//****
//***

class Student2 {
    constructor(name,surname,age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.friends = ['ali', 'veli']  //-->
    }

    fullName() {
        return this.name + ' ' + this.surname
    }
}

const elis = new Student2('elis','çekiç',3)
// burada elis'e Student2'nin instance si denir
console.log('*********',elis instanceof Student2,'*********');

console.log(elis);
console.log(elis.fullName());
console.log(elis.friends);

elis.friends.push('Cinar') // <-- 
console.log(elis);
console.log(elis.friends)   

console.log(typeof Student2);  // func


//inheritance

// class Engineer extends Student2 {}; //Engineer subclass ;;student2 super 

class Engineer extends Student2 {
    constructor(name,surname,age,job){
        super(name,surname,age);
        this.job = job;
    }
    getMoney(){
        console.log('make money');
    }
}

const gurcan = new Engineer('gürcan','cekic',40,'Pc Engineer');
console.log(gurcan);

/*  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */
