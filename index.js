let sozlar =  ['non', 'asal', 'banan', 'olma', 'aziza', 'Gul', 'mashina']

let nbor=[];

let nyoq=[];

for (let i = 0; i < 7; i++){
    if (sozlar[i] .indexOf('n') !== -1){
        nbor.push (sozlar[i])
    } else {
        nyoq. push(sozlar[i])
    }
}

console.log(nbor)
console.log(nyoq)



