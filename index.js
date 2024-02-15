function searchWeather() {
    const cityName = document.getElementById("searchInput").value;
    // Replace the below line with your API call to fetch weather data for the entered city
    // For simplicity, I'm assuming the weather data is retrieved from an API
    const weatherData = {
        cityName: "Paris",
        temperature: "20°C",
        weatherImage: "cloudy.png",
        humidity: "65%",
        windSpeed: "10 km/h"
    };

    displayWeather(weatherData);
}

function displayWeather(data) {
    const weatherInfoContainer = document.getElementById("weatherInfo");
    weatherInfoContainer.innerHTML = `
        <div class="weather-info">
            <h2>Voici la météo pour ${data.cityName}</h2>
            <img src="${data.weatherImage}" alt="Weather">
            <p>Température: ${data.temperature}</p>
            <p>Taux d'humidité: ${data.humidity}</p>
            <p>Vent: ${data.windSpeed}</p>
        </div>
    `;
}
