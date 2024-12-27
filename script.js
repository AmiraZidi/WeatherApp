const apiKey = "313a3e7b2f9b4d76fddb036a1bf02344";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();


    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    console.log(data);



};

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});


searchBox.addEventListener("keypress", function(event){
    if (event.key=="Enter") {
        checkWeather(searchBox.value);
    }
});