//Read the countries API using fetch and orint properties

const countriesAPI = 'https://restcountries.eu/rest/v2/all'
const fetchData = async() => {
  try{
    const response = await fetch(countriesAPI)
    const countries = await response.json()
    countries.forEach(country => {
      console.log("Name; "+ country.name +"City: "+ country.capital +"Population: "+ country.population + "Area: "+country.area = "Languages" + country.languages )
    });
}catch(error){
    console.log(error)
  }
}
fetchData()
