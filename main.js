const API_KEY ="66bfe77dabe3f6cee628caada8c0f389";

const getCurrentWeatherData = async()=>{
    const city="Jakarta";
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    return response.json()
}

const formatTemperature = (temp) => `${temp?.toFixed(1)}°C`

loadCurrentForecast = ({name, main: {temp, temp_max, temp_min}, weather: [{description}] }) =>{
    const currentForecastElement = document.querySelector("#current-forecast");
    currentForecastElement.querySelector(".city").textContent = name;
    currentForecastElement.querySelector(".temp").textContent = formatTemperature(temp);
    currentForecastElement.querySelector(".description").textContent = description;
    currentForecastElement.querySelector(".min-max-temp").textContent = `H: ${formatTemperature(temp_max)} L: ${formatTemperature(temp_min)}`;
    
    // <h1>City Name</h1>
    //         <p class="temp">Temp</p>
    //         <p class="description">Description</p>
    //         <p class="min-max-temp">High Low</p>
}

document.addEventListener("DOMContentLoaded", async()=>{
   const currentWeather = await getCurrentWeatherData();
   loadCurrentForecast(currentWeather)

})