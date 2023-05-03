fetch("json/minkhant.json")
.then((response)=>{
    if (response.status === 404){
        throw new Error("Your link is not available");
    }
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((err) => {
    console.log(err.message);
})