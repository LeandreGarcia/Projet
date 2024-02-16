const apiKey = "8ffb64bee3a847ce9b9102913241502";
function searchWeather() {
    const cityName = document.getElementById("searchInput").value;
    const apiUrl = "https://api.weatherapi.com/v1/forecast.json?key=" + apiKey + "&q=" + cityName + "&lang=fr&days=3&aqi=no&alerts=no"
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json()
        })
        .then(data => {
            console.log(data);
            console.log(data.forecast.forecastday[1].date)
            const weatherData = {
                cityName: data.location.name,
                country: data.location.country,
                temperature: data.current.temp_c + "°c",
                weatherImage: data.current.condition.icon,
                humidity: data.current.humidity + "%",
                windSpeed: Math.floor(data.current.wind_kph) + " Km/H",
                meteo: data.current.condition.text,
                otherForecast: data.forecast.forecastday

            };

            displayWeather(weatherData);
            displayOtherForecast(weatherData);

        })
        .catch(error => {
            console.error('Error:', error);
            const weatherInfoContainer = document.getElementById("weatherInfo");
            weatherInfoContainer.innerHTML = ` <p>Veuillez entrer une ville valide</p>`;
            const forecastContainer = document.getElementById("daysForecasts");
            forecastContainer.innerHTML = '';
        })
}

function displayWeather(data) {
    const weatherInfoContainer = document.getElementById("weatherInfo");
    weatherInfoContainer.innerHTML = `
        <div class="weather-info">
            <h2>Voici la météo pour ${data.cityName}, ${data.country}</h2>
            <img src="https:${data.weatherImage}" alt="Weather">
            <p>${data.meteo}</p>
            <p>Température: ${data.temperature}</p>
            <p>Taux d'humidité: ${data.humidity}</p>
            <p>Vent: ${data.windSpeed}</p>
        </div>
    `;
    const forecastContainerOnce = document.getElementById("daysForecasts");
    const titleForecast = `
    <h3>Les previsions des 3 prochains jours</h3>
    `
    forecastContainerOnce.innerHTML += titleForecast
}

function displayOtherForecast(data) {
    const forecastContainer = document.getElementById("daysForecasts");
    forecastContainer.innerHTML = '';

    const datess = data.otherForecast;
    datess.forEach(date => {
        const forecastTemplate = `
        <div class="frctClass">
                    <p>Le: ${date.date}<br>
                    Température: ${date.day.avgtemp_c}<br>
                    <img src="https:${date.day.condition.icon}" class="imgFWeather" alt="Weather of future days"><br>
                    ${date.day.condition.text}</p>
                </div>`
        forecastContainer.innerHTML += forecastTemplate;
    });
}

document.getElementById("searchInput").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        searchWeather();
    }
});