const marvel_heros=["AB","DH","GJ"]
const dc=["mn","kl","vc"]
//marvel_heros.push(dc)
//console.log(marvel_heros);//it merge the array but second array it take  next element ex.,[ 'AB', 'DH', 'GJ', [ 'mn', 'kl', 'vc' ] ]
//when we want to access that elements .....like that 
//console.log(marvel_heros[3][1]);//[ 'AB', 'DH', 'GJ', [ 'mn', 'kl', 'vc' ] ]kl

const allheros =marvel_heros.concat(dc)//Combines two or more arrays. This method returns a new array without modifying any existing arrays.
//console.log(allheros);

const all_new_heros=[...marvel_heros,...dc]//same work like concat but it more than values  to concat 
//console.log(all_new_heros);

const another_array=[1,2,3,[4,5,6,],7,[8,9,[5,7]]]
const real_another_array=another_array.flat(4)
console.log(real_another_array);/*(method) Array<number | (number | number[])[]>.flat<(number | (number | number[])[])[], 
                                    4>(this: (number | (number | number[])[])[], depth?: 4 | undefined): number[]
                                    Returns a new array with all sub-array elements concatenated into it 
                                    recursively up to the specified depth.*/ 

  console.log(Array.isArray("ashu"))//false
  console.log(Array.from("ashu"))//Creates an array from an iterable object.ex.[ 'a', 's', 'h', 'u' ]
  console.log(Array.from({name:"ashu"}))//it creates  one array  of all keys

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));//[ 100, 200, 300 ]

