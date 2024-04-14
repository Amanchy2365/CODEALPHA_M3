document.addEventListener("DOMContentLoaded", function() {
    const apiKey = 'ec692ec68530b0442932c91c1f545243';
    const url = 'https://api.openweathermap.org/data/2.5/weather';

    async function fetchWeatherData(cityName) {
        const apiUrl = `${url}?q=${cityName}&appid=${apiKey}&units=metric`; 
        
        try {
            const response = await axios.get(apiUrl);
            return response.data;
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    }

   
    function displayWeatherData(weatherData) {
        const cityName = weatherData.name;
        const date = new Date(weatherData.dt * 1000);
        const iconUrl = `http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
        const temperature = `${weatherData.main.temp} °C`; 
        const description = weatherData.weather[0].description;
        const windSpeed = `Wind: ${weatherData.wind.speed} m/s`; 
        const pressure = `Air Pressure: ${weatherData.main.pressure} hPa`;
        const visibility = `Visibility: ${(weatherData.visibility / 1000).toFixed(2)} km`; 
        const minTemp = `Min Temp: ${weatherData.main.temp_min} °C`; 
        const maxTemp = `Max Temp: ${weatherData.main.temp_max} °C`; 
        const humidity = `Humidity: ${weatherData.main.humidity}%`;

        document.getElementById("city-name").textContent = cityName;
        document.getElementById("date").textContent = date.toDateString();
        document.getElementById("weather-icon").src = iconUrl;
        document.getElementById("temperature").textContent = temperature;
        document.getElementById("description").textContent = description;
        document.getElementById("wind-speed").textContent = windSpeed;
        document.getElementById("pressure").textContent = pressure;
        document.getElementById("visibility").textContent = visibility;
        document.getElementById("min-temp").textContent = minTemp;
        document.getElementById("max-temp").textContent = maxTemp;
        document.getElementById("humidity").textContent = humidity;

        
        document.getElementById("weather-info").style.display = "block";
    }


    document.getElementById("city-input-btn").addEventListener("click", async function() {
        const cityName = document.getElementById("city-input").value;
        if (cityName) {
            const weatherData = await fetchWeatherData(cityName);
            if (weatherData) {
                displayWeatherData(weatherData);
            }
        }
    });
});
