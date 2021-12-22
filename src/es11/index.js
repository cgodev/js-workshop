//DYNAMIC IMPORT
const button = document.getElementById('btn');

button.addEventListener('click', async function () {
    const module = await import('./file.js');
    module.hello();
});

//BIG INT PERMITE TRABAJAR CON NUMEROS MAYORES A 2^53

const aBigNumber = 9007199254740991n;
const anotherBigNumber = BigInt(9007199254740991);

console.log(aBigNumber);
console.log(anotherBigNumber);

//PROMISE
const promise1 = new Promise((resolve, reject) => {
    reject('reject')
});

const promise2 = new Promise((resolve, reject) => {
    resolve('resolve')
});

const promise3 = new Promise((resolve, reject) => {
    resolve('resolve1')
});

//CON PROMISE.ALL() Devuelve una de dos promesas: 
//una que se cumple cuando todas las promesas en el argumento iterable han sido cumplidas, 
//o una que se rechaza tan pronto como una de las promesas del argumento iterable es rechazada. 
//Si la promesa retornada es cumplida, lo hace con un arreglo de los valores de las promesas cumplidas 
//en el mismo orden definido en el iterable. Si la promesa retornada es rechazada, es rechazada con la razón de la primera promesa rechazada en el iterable. Este método puede ser útil para agregar resultados de múltiples promesas

//CON PROMISE ALLSETTLED LA EJECUCION FINALIZA CUNADO TODAS LAS PROMESAS SE HAN RESUELTO SIN IMPORTAR SI ES CON RESOLVE O REJECT

Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response)); //NO IMPO

//globalThis => Me devuleve el objeto global del entorno.
console.log(window);
console.log(globalThis);

//OPERADOR NULO

const foo = null ?? 'default string';
console.log(foo);

//OPTIONAL CHAINING
const user = {};
console.log(user?.profile?.email) //Si las propiedades con ? no existen, no rompe la app simplemente devuelve undefined