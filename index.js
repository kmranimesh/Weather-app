console.log('Hello, Animesh');

const API_KEY = "b25832a5e0ff3f0b092cf057be0ac669";



async function showWeather() {
    // let latitude = 15.3333;
    // let longitude = 74.0833;
    let city = "ranchi";

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`);

    const data = await response.json();
    console.log("Weather data:-> " + data);

    let newPara = document.createElement('p');
    let tempInCelsius = data.main.temp - 273.15;
    newPara.textContent = `${tempInCelsius.toFixed(2)} °C`;


    document.body.appendChild(newPara);
}