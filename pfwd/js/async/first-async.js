
/*
    stage 1 open();
    stage 2 send();
    stage 3 loading 
    stage 4 opreating done 
*/

const getTodos = (callback) =>{
    let request = new XMLHttpRequest();
    request.addEventListener("readystatechange", ()=>{
        if (request.readyState === 4 && request.status === 200){
           callback(request.responseText, undefined);
        }else if (request.status === 404){
            callback(undefined, "Error 404 not found");
        }
    })
    
    request.open("GET", "https://jsonplaceholder.typicode.com/todos");
    request.send();
}

getTodos((data, error)=>{
    if (data){
        console.log(data);
    }else {
        console.log(error);
    }
})