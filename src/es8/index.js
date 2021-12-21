//OBJECT.ENTRIES
const data = {
    frontend: 'Carlos',
    backend: 'Edison',
    uxui: 'Jorge'
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

//OBJECT.VALUES

const data2 = {
    frontend: 'Carlos',
    backend: 'Edison',
    uxui: 'Jorge'
}

const values = Object.values(data2);
console.log(values);
console.log(values.length);

//PADDING
const string = 'hello';
console.log(string.padStart(7, 'hi')); //hihello
console.log(string.padEnd(12, ' ------')); //hello ------
console.log('food'.padEnd(12, ' ---------')) //food ------

//TRAILING COMMAS

const obj = {
    name: 'carlos', // la coma indica que puede haber valor o no
}

//ASYNC AWAIT
//PROMISE
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (false) ?
        setTimeout(() => {
            resolve('hello world')
        }, 3000): reject(new Error('test error'))
    })
};
//ASYNC AWAIT
const helloAsync = async () => {
    const hello = await helloWorld();
    const hello2 = await helloWorld();
    console.log(hello);
    console.log(hello2);
}

helloAsync();

const anotherFunction = async () => {
    try{
        const hello = await helloWorld();
        console.log(hello);
    }catch(error){
        console.log(error);
    }
}

anotherFunction();