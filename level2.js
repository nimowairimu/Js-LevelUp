const catsAPI = 'https://api.thecatapi.com/v1/breeds'
const  fetchData = async () => {
  try{
    const response = await fetch(catsAPI)
    const cats = await response.json()
       var catName =""
       cats.forEach((cats) => {
         catName += cats.name + ", "
       });
       console.log(catName)
  }catch(error){
    console.log(error)
  }
  }
fetchData()
