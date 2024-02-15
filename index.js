const apiKey = "8ffb64bee3a847ce9b9102913241502";

function searchWeather() {
    let city = "paris"
    const cityName = document.getElementById("searchInput").value;
    const apiUrl = "http://api.weatherapi.com/v1/current.json?key=" + apiKey + "&q=" + city;
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json()
        })
        .then(data => {
            console.log(data);
            const weatherData = {
                cityName: data.location.name,
                temperature: data.current.temp_c + "°c",
                weatherImage: data.current.condition.icon,
                humidity: data.current.humidity +"%",
                windSpeed: Math.floor(data.current.wind_kph)+" Km/H"
            };
            console.log(weatherData.cityName)

            displayWeather(weatherData);
            //outputElement.textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            console.error('Error:', error);
        })
    // Replace the below line with your API call to fetch weather data for the entered city
    // For simplicity, I'm assuming the weather data is retrieved from an API

}
searchWeather();

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
