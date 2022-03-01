console.log('deneme');
// Var - Ler -Const
//var -->> global-funtional scope
var x = 1;
console.log(x);
console.log('object');
if (x === 1)  {
    var x = 10;
    console.log(x);
}

console.log(x);

console.log(window.x,'inceleye bak');
console.log('**************************');

//let >> block scope
let y = 1;
console.log(y);

if (y === 1)  {
    let y = 10;
    console.log(y);
}

console.log(y);
console.log(window.y,'inceleye bak');

//hoisting

var z;
console.log(z);
var z = 3;
/* 
let t;
console.log(t);
let t = 3;
*/


// genel bildiğimiz = function declaration(statement) --> hoisted olarak çalışır (tanımlamadan öncede yukarda çalışır)

console.log(karesi(3));

function karesi(sayi) {
    return sayi * sayi
}

console.log(karesi(4));

//  function expression --> declerationu bir değişkene atanmış halidir.  decleratiodnan farkı-->(hoisted olmaz --> isim verme zorunluluğumz yok anonim )


const kAresi = function (sayi) {return sayi * sayi} //anonomys
console.log(kAresi);
console.log(kAresi());
console.log(kAresi(6));


// bir fonk bir değişkene atandığı zamna artık ona 'first-class fnc diyebilriz' **** bu sayede değişkenler ne yaparsa funclarda yapar !!
// JS de func ları func expression olarak yaptığımızda, func bir değişken olarak davranır.

const myArr = ['ersen', 29, function (){console.log('bu myArr dizisinin bir elemanı olan funcdan türemiştir')}]
myArr[2]();  // func çağırmak için ()  oldduğuna dikkat et

const myObj = {
    name: 'ersen',
    age: 29,
    funcObj: function(){console.log('bu myObj objesinin bir elemanı olan funcObjden türemiştir')}
}
myObj.funcObj()

console.log(10 + function(){return 100}); //aşğdki ile syntax farkına bk
console.log(10 + (   function(){return 100}  )());  //İİFE örneği

// first-class func devam;  ---->
// bir fonk başka  bir fonk argüman olarak alabiirz .

const addFive = function (num,mYfunc) {
    console.log(num + mYfunc());
}

addFive(95,function(){return 5});

//bir fonk başka  bir fonk retun ifadesinde de kullanabilriz

const içiçe = function(a){
    return function toDouble(){  //parametre almadığına dikkat et
        console.log(a * 2);
    }
}

içiçe(25) // bak harika bir şey var burda. içiçe fonk olduğu için olmadı ancak >
içiçe(25)() // ikinci fonk unda () lerini eklemek lazım


const içiçe2 = function(a){
    return function toDouble2(b){  //parametre aldı bu sefer
        console.log(a * 2 * b);
    }
}

içiçe2(25)(-1)


const result = içiçe(7)  //90. sırayı çalıştırdı.
console.log(result());


//İİFE(immediately invocable function expression) --> bir func olştrldğunda hemen çalışmasını istemek  
// Self invoking functions

const tpla = function () {
    console.log(5 + 12);
}
tpla(); 

// pekiii oluşturduğumuz anda çalıştımak için(syntx farklarına dikkat)
/*Uncaught SyntaxError: Function statements require a function name 
function() {                
    console.log(5 + 12);
}()
*/

(function() {                
    console.log(5 + 12);
})()

console.log(10 + function(){return 100}); //aşğdki ile syntax farkına bk
console.log(10 + (   function(){return 100}  )());  //İİFE örneği

function newFunction() {
    console.log(tpla());
}


// ### Arrow Function
// Arrow function uses arrow instead of the keyword *function* to declare a function.

function square(n) {   // normal or declaration function
    return n * n
  }
console.log(square(2)) // 4


const square = n => {       // arrow func
    return n * n
  }
console.log(square(2))  // -> 4


const square = n => n * n // if we have only one line in the code block, explicit return


// another example
const changeToUpperCase = arr => {
    const newArr = []
    for (const element of arr) {
      newArr.push(element.toUpperCase())
    }
    return newArr
  }
  
const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
console.log(changeToUpperCase(countries))

// two parameters in arrow func
const printFullName = (firstName, lastName) => {
    return `${firstName} ${lastName}`
  }
console.log(printFullName('ersen', 'ozturk'))


//  ### Function with default parameters

function greetings(name = 'Peter') {
    let message = `${name}, welcome to 30 Days Of JavaScript!`
    return message
  }
console.log(greetings())
console.log(greetings('Asabeneh'))

//
function calculateAge(birthYear, currentYear = 2022) {
    let age = currentYear - birthYear
    return age
  }
console.log('Age: ', calculateAge(1993))


// yukarıdaki default ları birde arrowla yapalım
const greetings = (name = 'Dear User') => {
    let message = name + ', welcome to 30 Days Of JavaScript!'
    return message
  }
  
  console.log(greetings())
  console.log(greetings('Asabeneh'))

//
const calculateAges = (birthYear, currentYear = 2022) => { // => currentYear - birthYear tek str
    let age = currentYear - birthYear
    return age
  }
console.log('Age: ', calculateAge(1993))



// ******************************

// arguments objectinin kullanımı 
function sumAllNums() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i]
    }
    return sum
  }
  
  console.log(sumAllNums(1, 2, 3, 4)) // 10
  console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
  console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  //

  // dilersek arg içindeki değerleri değiştirrim.

  function sumAllNums() {
    let sum = 0
    arguments[0] = 10;
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i]
    }
    return sum
  }
  
  //  arguments objecti arrow fonk kullanılmaz. onun yerine rest parameter'ı kullanark gönderilen değerlere fonk içerisinde eriim ğlanır.

  const sumALL = (...otobüs) => {
      let sum = 0;
      for (let i = 0; i < otobüs.length; i++) {
          sum += otobüs[i];
      }
      return sum;
  } 
  console.log(sumALL(1,2,3,4));



  const sumAllNumss = (...args) => {
    let sum = 0
    for (const element of args) {
      sum += element
    }
    return sum
  }
  console.log(sumAllNumss(1, 2, 3, 4, 5)) // 15

  // **************************************