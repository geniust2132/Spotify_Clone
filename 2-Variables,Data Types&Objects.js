//var is variable here 
//var globally scoped
var a = 7
a = a + 1
var b = 2
var c = "misbah"
var _a = 23 // _a is permissible
// var 55a = 32 is not permissble
console.log("after addition",(a+b))
console.log(typeof a,typeof b,typeof c) // print the type of the var i.e variable

//let is block specific/scoped
//let can be updated but not redeclared
{
    let a = 32;
    console.log(a) //yeh 32 print krega but upar wla "a" print krta agr upar wla let a present nai hota to 
}
console.log(a) //yeh a print krega

//const means contant
//will not be change bymistake 
const a1 = 6;
// a1 = a1 + 1; //a1 = a1 + 1; cannot change the value cuz its contant

//modern day mein always use let instead of var
let a3 = 7
let b3 = 2
console.log(a3)

//Data Types----------------------------------------
let x = "Misbah bhai";
let y = 22;
let z = 3.55;
const p = true;
let q = undefined;
let r = null;

console.log(x, y, z, p, q, r)
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r)

//Objects------------------------------------------------------------------------------------
let o = {
    "name": "Harry",
    "job code": 5600,
    "is_handsome": true
}

console.log(o);
o.salary = "100crores";
console.log(o);
o.salary = "500crores";
console.log(o);