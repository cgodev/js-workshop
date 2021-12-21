//DEFAULT PARAMS
//Antes de ES6
function newFunction(name, age, country) {
    var name = name || 'Carlos';
    var age = age || '25';
    var country = country || 'CO';

    console.log(name, age, country);
}

//ES6
function newfunction2(name = 'Carlos', age = 25, country = 'CO') {
    console.log(name, age, country);
}

newfunction2();
newfunction2('Ricardo', 30, 'ES');

//TEMPLATE LITERALS
let hello = 'Hello';
let world = 'World';
//Antes de ES6
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

//ES6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

//STRING MULTILINEA
let lorem = "Aprendiendo Ecma Script 6 \n" + "pero esta es la manera antigua del multilinea";

let loremES6 = `Esto si es chingon
Presione enter y ya es otra linea
`;

console.log(lorem);
console.log(loremES6);

//DESESTRUCTURACION DE ELEMENTOS

let person = {
    'name': 'Carlos',
    'age': 32,
    'country': 'CO',
}
//ANTES DE ES6
console.log(person.name)
//ES6
let {
    name,
    age,
    country
} = person;

console.log(name, age, country);

//SPREAD OPERATOR O PROPAGACION
let team1 = ['Oscar', 'Carlos', 'Alejo'];
let team2 = ['Andree', 'Chucho', 'Mateo'];

let education = ['Diana', ...team1, ...team2];

console.log(education);

//let y const
//Antes de ES6
{
    var globalVar = 'Golbal Var'; //Esta variable es de scope global
}

{
    let globalLet = 'Global Let'; //Solo es accesible en el scope que fue definida
    console.log(globalLet);
}

console.log(globalVar);
//console.log(globalLet); => Error globalLet is not defined.

//Para const es simplemente que no son reasignables las variables declaradas.

//PROPIEDAD DE OBJETOS MEJORADAS

let name = 'Carlos';
let age = 32;

//Antes de ES6
obj = {
    name: name,
    age: age
};

//ES6
obj2 = {
    name,
    age
};

console.log(obj2);

//ARROW FUNCTIONS

const names = [{
        name: 'Carlos',
        age: 22
    },
    {
        name: 'Ricardo',
        age: 33
    }
]

//Antes de ES6

let listOfNames = names.map(function name(item) {
    console.log(item.name)
});

//ES6
let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
    //...
}

const listOfNames4 = name => {
    //...
}

const square = num => num * num;

//PROMISES

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Promise true');
        } else {
            reject('Algo salio Mal');
        }

    })
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('Holitas'))
    .catch(error => console.log(error))

//CLASES, MODULOS Y GENERADORES => POO
class calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }

    sumar(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}
const calc = new calculator();
console.log(calc.sumar(3,8));

//MODULOS

const hello = require('./module')
console.log(hello())

//GENERATORS

function* helloWorld() {
    if(true){
        yield 'Hello, ';
    }

    if(true){
        yield 'World';
    }
};

const generatorHello = helloWorld();

console.log(generatorHello.next().value);//Hello
console.log(generatorHello.next().value);//World
console.log(generatorHello.next().value);//undefined

