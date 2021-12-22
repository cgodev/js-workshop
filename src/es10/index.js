//ARRAY FLAT Y FLATMAP
let arr = [1,2,3,[1,2,3,4,[1,2,3,4,5]]];
console.log(arr.flat())//Aplana el array un nivel si no le envio un parametro
let arr = [1,2,3,4];
console.log(arr.flatMap(x => [x, x*2]));

//TRIM START, END
let hello = '      Hello     '
console.log(hello.trimStart());
console.log(hello.trimEnd());

//TRY CATCH WITHOUTH PARAMS
try{

}catch{
    console.log(error)//Ya esta disponible sin pasarlo como argumento por el catch
}

//OBJECT.FROMENTRIES
let entries = [[name, "oscar"],["age", 32]];
console.log(Object.fromEntries(entries));

//OBJETOS DE TIPO SYMBOL
let mySymbol = `My Symbol`;

let symbol = Symbol(mySymbol);
console.log(symbol.description);