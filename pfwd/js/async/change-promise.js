const getTodos = (resource) =>{
    return new Promise ((resolve, reject)=>{
        let request = new XMLHttpRequest();

        request.addEventListener("readystatechange", ()=>{
            if (request.readyState === 4 && request.status === 200){
                let data = JSON.parse(request.responseText);
                resolve(data);
            }else if (request.status === 404){
                reject("Error 404 not found");
            }
        })

        request.open("GET", resource);
        request.send();
    })
}

getTodos("json/minkhant.json")
.then((data)=>{
    console.log(data);
    return getTodos("json/minkhant.json");
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})