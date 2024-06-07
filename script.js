document.getElementById('get-weather').addEventListener('click', function() {
    const city = document.getElementById('city-input').value;
    const apiKey = '2851e93f336371e624a6c3c86bbef2da';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById('city-name').innerText = data.name;
                document.getElementById('temperature').innerText = `Temperature: ${data.main.temp}°C`;
                document.getElementById('description').innerText = `Description: ${data.weather[0].description}`;
            } else {
                document.getElementById('city-name').innerText = 'City not found';
                document.getElementById('temperature').innerText = '';
                document.getElementById('description').innerText = '';
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById('city-name').innerText = 'Error fetching weather data';
            document.getElementById('temperature').innerText = '';
            document.getElementById('description').innerText = '';
        });
});