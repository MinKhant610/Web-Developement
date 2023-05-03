const getTodos = async(resource)=>{
    let response = await fetch(resource);
    if (response.status === 404){
        throw new Error("Your link is not available");
    }
    let data = await response.json();
    return data;
}

getTodos("json/minkant.json")
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err.message);
})