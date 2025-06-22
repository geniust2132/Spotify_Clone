// let arr = [1, 2, 4, 5, 7]
//  Index  0, 1, 2, 3, 4

// arr[0] = 5666;
// console.log(arr, typeof arr);
// console.log(arr.length)

// console.log(arr[0]) //5666 print krega and not 1 q ki change hua hai
// console.log(arr[2])
// console.log(arr[4])

// console.log(arr.toString()) //5666,2,4,5,7 (array ko string mein badal dega)
// console.log(arr.join(" and ")) //5666 and 2 and 4 and 5 and 7


 
// let numbers = [1, 2, 3, 4, 5] 
// numbers.splice(1, 2)    
// numbers.splice(1, 3)  
// numbers.splice(1, 3, 222, 333) 
// (4) [1, 222, 333, 5]

//-----------------------------------------------------------------------------------------------
// LOOPs
// let a = [1, 93, 5, 6, 88]

// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element)
    
// }

// //upar wla for loop ke jgah niche wla for loop use kre skte hai

// a.forEach((value, index, arr)=>{
//     console.log(value, index, arr)
// })

// // for in LOOP----------------------------------------------------------
// let obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }
// for (const key in obj) {
//     if (Object.hasOwnProperty.call(obj, key)) {
//         const element = obj[key]; 
//         console.log(key, element)
//     }
// }

// //for of LOOP------------------------------------------------------------
// for (const value of a) {
//     console.log(value)
// }

//--------------------------------------------------------------------------
let arr11 = [1, 13, 5 ,7, 11];
// let newArr = []
// for (let index = 0; index < arr11.length; index++) {
//     const element = arr11[index];
//     newArr.push(element**2) //store the square value of the above arr11
// }

// //upar wla ke jgah we can use .map 
// let newArr = arr11.map((e, index, array)=>{
//     return e**2
// })
// console.log(newArr)


//------------------------------------------------------------
// // printing all the nmber greater 7
// // .filter we use here 
const greaterThanSeven = (e)=>{
    if(e>7){
        return true
    }
    return false
}
console.log(arr11.filter(greaterThanSeven))

//------------------------------------------------------------------
// // .reduce we can use (ye arr2 ke har element mein lgega) like
// // 1+2 then (1+2)+3 and so on....
let arr2 = [1,2,3,4,5,6]

const red = (a, b)=>{
    return a+b
}
console.log(arr2.reduce(red))