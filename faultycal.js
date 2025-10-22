function cal(a,b,op) {
    x = Math.random()

    if (x <0.1){

        if (op =="+"){
            return a-b
        }

        else if (op =="-"){
            return a/b;

        }

        else if (op =="*"){
            return a+b;
        }
        else if (op =="/"){
            return a**b

        }
    }

    else {
        if (op =="+"){
            return a+b

        }
        else if (op =="-"){
            return a-b;

        }
        else if (op =="*"){
            return a*b;
        }   

        else if (op =="/"){
            return a/b  
        }

    }

    
    
}

console.log(cal(5,10,"+"))
console.log(cal(20,5,"-"))
console.log(cal(4,5,"*"))
console.log(cal(20,4,"/"))
