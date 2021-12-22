//REPLACE ALL
const string = 'Javascript es maravilloso, con javascript puedo crear el futuro de la web.';

//Con replace
const replacedString = string.replace("Javascript", "Python"); //Esto solo remplaza la primer coincidencia.
console.log(replacedString);
const replacedString2 = string.replaceAll('Javascript', 'Python'); //El error replaceAll is not a function esta dado por la version de node.

//METODOS PRIVADOS
class Message {
    #show(val) {
        console.log(val);
    }; //asi se declara privado

    get #add(val) {
        //...
    }
}

const message = new Message();
message.show('Holassss!!!');

//PROMISE ANY => devuelve el primer valor que se resuelva primero en un array de promesas...

const promise1 = new Promise((resolve, reject) => {
    reject(1);
});

const promise2 = new Promise((resolve, reject) => {
    resolve(2);
});

const promise3 = new Promise((resolve, reject) => {
    resolve(3);
});

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response)); //Error any is not a function es por el node...

//Referencia debil . . .
class anyClass {
    constructor(element) {
        this.ref = new WeakRef(element);
    }
}

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

let isTrue = true;
let isFalse = false;
console.log(isTrue ||= isFalse);

let isTrue = undefined;
let isFalse = false;
console.log(isTrue ??= isFalse);