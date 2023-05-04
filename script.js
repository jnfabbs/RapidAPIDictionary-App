// searchinput
// searchbtn

// let searchBtn = document.getElementById("#searchBtn")
// let searchinput = document.getElementById("#searchinput")

const dictionary = (word)=> {
 const options = {
  method: 'GET',
  headers: {
   'X-RapidAPI-Key': '93743195c1msh4dd9a20933864e8p109b4ajsn781f1e7ed840',
   'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
  }
 };
 
 fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=' + word, options)
  .then(response => response.json())
  .then((response) => {
   
   console.log(response)
   wordhead.innerHTML = "Word & Meaning: " + response.word;
   definition.innerHTML = response.definition.replace("2.", "<br>2.").replace("3.", "<br>3.").replace("4.", "<br>4.");
  //  console.log(word, response)

  
  })
  .catch(err => console.error(err));
}

searchbtn.addEventListener("click", (e)=>{
    e.preventDefault();
    dictionary(searchinput.value)
})