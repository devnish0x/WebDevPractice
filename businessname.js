//excecuted using index.html


adjectives=["crazy","amazing","fire"]
shopname=["engine","food","garments"]
aword = ["bros","limited","hub"]

function chose() {
    return Math.floor(Math.random()*3)
}
let namee;

namee = adjectives[chose()]+" "+shopname[chose()]+" "+aword[chose()]

console.log(namee)
