console.log("Starting Line________")
let age = 15
let grace = 2;

age += grace
console.log(age)
console.log(age + grace)
console.log(age - grace)
console.log(age * grace)
console.log(age / grace)
console.log(age ** grace)
console.log(age % grace)

// if statement
if(age>18)
{
    console.log("PASS")
}
else{
    console.log("FAIL")
}

//if else ladder 
if (age == 18) {
    console.log("You can drive");
}

else if (age == 0) {
    console.log("Are you kidding?")
}

else if (age == 1) {
    console.log("Are you again kidding?")
}

else {
    console.log("You cannot drive");
}

// Ternary Operator__________________________________________
a = 6;
b = 8;
let c = a > b ? (a - b) : (b - a); //single line mein if else likh skte hai
console.log(c)

/*
translates to:
if(a>b){
    let c = a - b;
}
else {
    let c = a - b;
}

*/