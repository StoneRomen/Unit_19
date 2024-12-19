
// За допомогою запиту вивести виджет погоди. Ресурс API https://openweathermap.org/current
// Також потрібно додати кнопку оновлення данних.

const lat = 51.5074;
const lon = 0.1278;
const apiKey = '8407b8d68e8c84f10dd74678afaef51f';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

async function fetchWeather() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const temp = Math.round(data.main.temp);
        const description = data.weather[0].description;
        document.getElementById('weatherWidget').textContent = `${temp}°C, ${description}`;
    } catch (error) {
        document.getElementById('weatherWidget').textContent = 'Failed to load weather data';
    }
}

document.getElementById('refreshButton').addEventListener('click', fetchWeather);

fetchWeather();



