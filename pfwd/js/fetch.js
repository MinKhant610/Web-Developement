// fetch("https://api.covid19api.com/summary")
// .then(res => res.json())
// .then(data => {
//     const global = data.Global
//     const all_country = data.Countries
//     const myanmar = all_country.find(c => c.Country === "Myanmar")
//     console.log("Global : ", global, "Myanmar :", myanmar);
// })

async function covoidInfo (){
    const response = await fetch("https://api.covid19api.com/summary");
    const data = await response.json();

    const global = data.Global;
    const all_country = data.Countries;
    const myanmar = all_country.find(c => c.Country === "Myanmar");

    console.log("Global :", global, "Myanmar :", myanmar);
}

covoidInfo();