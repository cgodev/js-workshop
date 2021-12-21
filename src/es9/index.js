//OPERADOR DE REPOSO -> EXTRAER LAS PROPIEDADES DE UN OBJETO QUE AUN NO SE HA CONSTRUIDO
const obj = {
    name: 'Oscar',
    age: 31,
    country: 'MX',

}

let {name, ...all} = obj;
console.log(name, all);


//SPREAD
const obj = {
    name: 'oscar',
    age: 33
}

const obj1 = {
    ...obj,
    country: 'MX'
}
console.log(obj1);

//PROMISE.FINALLY

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(()=>{
                resolve('Hello World');
            }, 3000)
            : reject(new Error('Test Error'))
    })
}

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Ya finalizo.'))

