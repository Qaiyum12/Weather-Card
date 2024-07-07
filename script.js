let APIkey = "75650efcc4e2c49aa365c4941d5a2855" ;
let APIurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q= " ;

let temp = document.querySelector("#temp");
let citys = document.querySelector("#city");
let humidity = document.querySelector("#percent");
let wind = document.querySelector("#percent1")
let searchbox = document.querySelector(".searchbar input");
let searchbtn = document.querySelector(".searchbar button");
let weather_icon = document.querySelector(".weather img")

async function checkweather(city) {
    const response = await fetch(APIurl + city + `&appid=${APIkey}`);
    var data = await response.json();

    console.log(data);

    temp.innerText = Math.round(data.main.temp) +" °c";
    citys.innerText = data.name;
    humidity.innerText = data.main.humidity + " %";
    wind.innerText = data.wind.speed + " km/h" ;
    
    if(data.weather[0].main == "Clouds"){
        weather_icon.src = "images/cloudy.png";
    }else if(data.weather[0].main == "Clear"){
        weather_icon.src = "images/clear.png";
    }else if(data.weather[0].main == "Rainy"){
        weather_icon.src = "images/rain.png";
    }else if(data.weather[0].main == "Drizzel"){
        weather_icon.src = "images/drizzel.png";
    }else if(data.weather[0].main == "Mist"){
        weather_icon.src = "images/mist.png";
    }else if(data.weather[0].main == "Snow "){
        weather_icon.src = "images/snow.png";
    }
}

searchbtn.addEventListener("click", () => {
    checkweather(searchbox.value);
});