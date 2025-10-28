document.getElementById("a").style.backgroundColor = "blue";

console.log(document.querySelector(".container"));

console.log(document.querySelectorAll(".container"));

document.querySelector(".box").style.backgroundColor = "red";

document.querySelectorAll(".box").forEach(e => {
    e.style.backgroundColor="yellow";
}); 