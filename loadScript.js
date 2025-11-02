// // Promise-based loadScript function
function loadScript(src) {
  return new Promise((resolve, reject) => {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Failed to load script: ${src}`));

    document.head.append(script);
  });
}

// // Using async/await
// async function main() {
//   try {
//     let script = await loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js');
//     console.log(`${script.src} loaded successfully!`);

//     // You can use functions or variables from the loaded script here
//   } catch (error) {
//     console.error(error);
//   }
// }

// main();

//promise function with handling the function inside the same function


// function load(src) {
//     let p = new Promise((resolve,reject) =>{
//         let script = document.createElement("script")
//         script.src = src

//         script.onload = () => resolve(script)
//         script.onerror = () => reject(new Error(`Failed to fetch ${script.src}`))

//         document.head.append(script)
//     });

//     p.then(script =>{
//         alert("loaded succesfully");
//     }).catch(error =>{
//         alert("error")
//         console.log('errrrooorrrr');
        
//     })
// }

// load('https://invalid-url.com/fake-script.js');


//using async and await

async function sync() {
    let gett = await loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js')

    console.log(`${gett.src} loaded succesfully`);
        
}

sync()


