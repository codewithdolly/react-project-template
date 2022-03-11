let cities = [
    {name: 'Los Angeles', population: 3792621},
    {name: 'New York', population: 8175133},
    {name: 'Chicago', population: 2695598},
    {name: 'Houston', population: 2099451},
    {name: 'Philadelphia', population: 1526006}
];

//second wey
let bigCities = cities.filter(city => city.population > 3000000);

console.log(bigCities);


//map
let cityName= bigCities.map((city)=>{
return city.name
})

console.log(cityName);

let sortName= cities.sort((name)=>{
    
})