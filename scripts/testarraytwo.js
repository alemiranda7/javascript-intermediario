let num = [5,6,1,4,2,3]
console.log(num[0])
console.log(num[1])
console.log(num[2])
console.log(num[3])
console.log(num[4])
console.log(num[5])

console.log('----------------------------------')

for(let pos = 0;pos<num.length;pos++){
    //num.sort()
    console.log(num[pos])
}

console.log(num.sort())
console.log('----------------------------------')

let valores = [5,4,6,1,2,3,7,8,9]
for(let pos in valores){
    console.log(valores[pos])
}
