const getTodos = (resource, callback) =>{
    let request = new XMLHttpRequest();
    request.addEventListener("readystatechange", ()=>{
        if (request.readyState === 4 && request.status === 200){
            let data = JSON.parse(request.responseText)
           callback(data, undefined);
        }else if (request.status === 404){
            callback(undefined, "Error 404 not found");
        }
    })
    
    request.open("GET", resource);
    request.send();
}

getTodos("json/minkhant.json",(data, error)=>{
    if (data){
        console.log(data);
    }else {
        console.log(error);
    }
})