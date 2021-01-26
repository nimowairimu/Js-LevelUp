//Exercise3(Question1:Read the cats api and find the average weight of cat in metric unit)
const catsAPI = 'https://api.thecatapi.com/v1/breeds'
const  metricWeight = async () => {
  try {
    const response = await fetch(catsAPI)
    const cats = await response.json()
      cats.forEach(data => {
          var weightDetails = data.weight.metric.split("-");
          var averageWeight = parseInt(weightDetails[0] + weightDetails[1] / 2);
          console.log(averageWeight);
      });
   } catch (error){
     console.log(error)
   }
}

  metricWeight()
//(Question2:Read the countries api and find out the 10 largest countries
const countriesAPI = 'https://restcountries.eu/rest/v2/all'
const countrySize = async () =>{
  try {
    const results = await fetch(countriesAPI)
    const countries = await results.json()
    largestCountries = countries.sort*
  } catch (error) {
    console.log(error)
  }
}
