const api ={
    key: 'a32b37de442b205107ea2a2805ca54e7',
    base: 'http://api.openweathermap.org/data/2.5/'
}
//set up event listener on the search box
const searchBox= document.querySelector('.search-box');
searchBox.addEventListener('keypress', setQuery);
//when we press a key and then the key were actually looking to be pressed it's number 13 which is equal to the enter key or the return key on your keyboard and this will over ride this
function setQuery(evt){
    if(evt.keyCode ==13){
        getResults(searchBox.value);
        //console.log(searchBox.value)
    }
}
//then it will run a fetch request which is going to say .we are gonna get the API dot base of this. we are gonna attach the weather at the end we are then gonna pass through a query which is got from our search box
//then we are gonna set a units like celsius and then we will set the APP id which is equal to the Api key as well.then this will return our weather.we are going to confer into json and then we are going to pass that json through our display results named as weather now.
function getResults(query){
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
  .then(weather =>{
      return weather.json();
  }).then(displayResults);

}
function displayResults(weather){
    console.log(weather);
}