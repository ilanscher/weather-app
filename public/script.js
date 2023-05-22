
function getWeather() {
    var city = document.getElementById("cityInput").value;
    var apiKey = "88a70be8e0e85835c1cfa246b878baa0"; // Replace with your own API key

    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    )
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            displayWeather(data);
        })
        .catch(function () {
            alert("Error fetching weather data");
        });
}

function displayWeather(data) {
    var weatherInfo = document.getElementById("weatherInfo");
    weatherInfo.innerHTML = `
    <h3>${data.name}, ${data.sys.country}</h3>
    <p>Temperature: ${data.main.temp}°C</p>
    <p>Description: ${data.weather[0].description}</p>
    <p>Humidity: ${data.main.humidity}%</p>
    <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
}

