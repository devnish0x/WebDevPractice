let a = prompt("Enter first number:");
let b = prompt("Enter second number:")
let c = prompt("Enter operator (+, -, *, /):")
 
let r = Math.random()
console.log(r)  

let x =
{
    "+":"-",
    "-":"/",
    "*":"+",
    "/":"**"
}   

if (r<0.1) {
    c = x(c)
    console.log(`${a} ${c} ${b} = ${eval(a+c+b)}`) 
    
}
else {
    console.log(`${a} ${c} ${b} = ${eval(a+c+b)}`) 
}
