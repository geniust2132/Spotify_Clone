console.log("I am a tutorial on Loops")

let a = 1;

//for Loop______________________________________
// for (let i = 0; i < 5; i++) { 
//     console.log(a + i); 
// }

let obj = {
    name: "Harry",
    role: "Programmer",
    company: "CodeWithHarry AI"
}
 
//for-In Loop________________________________________
for (const key in obj) {  
    console.log(key)
    console.log(obj)
    const element = obj[key];
    console.log(key,element)
}

//for-Of Loop_________________________________________________________
// for (const c of "Harry") {
//     console.log(c) //print every character like H,a,r,r,y
// }

//While Loop___________________________________________________________
// let i = 0;
// while (i<60000) {
//     console.log(i)
//     i++;
// }


//do-While Loop______________________________________________________________
// let i = 10;
// do {
//     console.log(i)
//     i++;
// } while (i<6);


