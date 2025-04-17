async function getWeather(event) {
    // Prevent form submission which reloads the page
    event.preventDefault();

    const city = document.getElementById("city").value;
    const apiKey = "daa0805aaf99442ebf9140617251504";
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        const temperature = `${data.current.temp_c}°C`;
        const feelslyk = `${data.current.feelslike_c}°C (feelslike)`
        const condition = data.current.condition.text;
        const humidity = `${data.current.humidity}%`;
        const wind = `${data.current.wind_kph} kph`;
        const visibility = `${data.current.vis_km} km`;

        // Update the UI
        document.getElementById("temprerature").innerText = temperature;
        document.getElementById("flslyk").innerText = feelslyk
        document.getElementById("condition").innerText = condition;
        document.getElementById("humidity").innerText = humidity;
        document.getElementById("wind").innerText = wind;
        document.getElementById("vis").innerText = visibility;

        document.getElementById("details").innerHTML = `<div><h2>Showing reports for: </h1>
        <p>${data.location.name},${data.location.region},${data.location.country}</p><div>`;

    } catch (error) {
        alert(`Error: ${error.message}`);
        console.log(error);
    }
}