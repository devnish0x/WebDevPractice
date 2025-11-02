
adjectives=["crazy","amazing","fire"]
shopname=["engine","food","garments"]
aword = ["bros","limited","hub"]

function chose() {
    return Math.floor(Math.random()*3)
}
let namee;

namee = adjectives[chose()]+" "+shopname[chose()]+" "+aword[chose()]

console.log(namee)


// a = [1,2,3,4,5,6]

// newa = a.map((e) => {
//     return e**2

// })

// console.log(newa)