function nis() {
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            reject(new Error ("rejected after 3 seconds"))    
        }, 3000);
    })
};

async function han(params) {
    try {
        let a = await nis();
        console.log('success',a);

        

    } catch (error) {
         console.error("error caught",error.message)
        
    }
    
}

han();
