//arrays
const myArr=[0,1,2,3,4,5,6,7,8]
const myHeros=["shaktiman"," Chota-Bheem"]

const myArr2=new Array(0,1,2,3,4,5,6,7,8)
//console.log(myHeros[1]);

//************************arrays methods
//myArr.push(6)//add value
// myArr.push(8) 
// console.log(myArr);

// myArr.pop(6)//remove  value 
//  console.log(myArr);

// myArr.unshift(6)//shift all array from 1st and add element 
// console.log(myArr);

// myArr.shift()//remove that  shifted  values 
// console.log(myArr);

// console.log(myArr.includes(9));//it check number  prsent or not
// console.log(myArr.indexOf(4));

// const newArr=myArr.join()//it convert data into string  orjoin tye data
// console.log(myArr);
// console.log(newArr);

//slice or splice
console.log("A",myArr);
const myn1=myArr.slice(1)//it pick only selected values and remove  other when  we take  only one element  it remove  only that

console.log(myn1);
//console.log("B",myArr);

const myn2=myArr.splice(1,3)//it remove only  what range we set upto that range
// console.log("c",myArr);
// console.log(myn2);

