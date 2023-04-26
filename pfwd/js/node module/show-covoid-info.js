const fs = require("fs");

fs.readFile('covoid-info.json', (err, data) => {
    if (err){
        console.log(err);
    }else {
        const result = JSON.parse(data);
        const global = result.Global;
        const all_countries = result.Countries;
        const myanmar = all_countries.find( c => c.Country === "Myanmar");

        console.log("Global :", global, "Myanmar :", myanmar);

    }
})