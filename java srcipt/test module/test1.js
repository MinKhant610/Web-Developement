city = ['yangon','mandaly','pyinoolwin','naypyitaw']

for (i = 0 ; i < city.length ; i ++) {
    console.log (city[i])
}

const caculate = (...param) => {
    let total = 0 
    
    for (i = 0 ; i < param.length ; i++){
        
        total += param [i] 
    }
    console.log(total)  
}

caculate (1,2,3,4)

const customer = [
    {name:'Mg Mg' , age : 18 , gender : 'male'},
    {name:'Aung Aung',age :17,gender:'male'},
    {name:'Hla Hla',age :20 , gender:'female'}
]

customer.filter(array=>array.gender === 'female')
//
const ret = customer.map ( n => {n.booking = [] ; return n  })

class Dog {
    constructor(name) {
    this.name = name
    }
    run() {
    console.log(`${this.name} is running...`)
    }
}

//
function add1000 () {
    let result = 0 ;

    for (let i = 1 ; i < 1000 ; i++) {
        result += i ;
    }

    return result ;
}


async function add1000later () {
    let result = await add1000 () ;
    console.log (result) ;
}

console.log ('some process') ;
add1000later () ;
console.log ('more process') ;


async function covidInfo() {
    const response = await fetch("https://api.covid19api.com/summary")
    const data = await response.json()
    const global = data.Global
    const allCountries = data.Countries
    const myanmar = allCountries.find(c => c.Country === "Myanmar")
    console.log("Global:", global, "Myanmar:", myanmar)
    }
    
covidInfo()

