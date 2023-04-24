let add30 = () => {
    let result = 0;
    for (i = 0; i < 1000; i++){
        result += 1;
    }
    return result;
}

// function add300Later(){
//     return new Promise((resolve, reject) => {
//         let result = add30();

//         if (result) resolve(result)
//         else reject()
//     })
// }

// console.log('hello');
// add300Later()
// .then(result => console.log(result))
// .catch(console.log("error"));
// console.log('hi');

async function add300Later(){
    let result = await add30();
    console.log(result);
}

console.log("hello");
add300Later();
console.log('hi');

