console.log('Hello, Animesh');

const API_KEY = "b25832a5e0ff3f0b092cf057be0ac669";

function renderWeatherInfo(data) {
    let newPara = document.createElement('p');
    let tempInCelsius = data.main.temp - 273.15;
    newPara.textContent = `${tempInCelsius.toFixed(2)} °C`;

    document.body.appendChild(newPara);

}

async function fetchWeatherDetails() {

    try {
        let city = "ranchi";

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`);
        const data = await response.json();

        console.log("Weather data:-> ", data);

        renderWeatherInfo(data);

    }
    catch (err) {
        //Handle errors as needed
        console.log("Error found", err);
    }
}

async function customWeatherDetails() {
    try {
        let latitude = 17.6333;
        let longitude = 18.3333;

        let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);

        let data = await result.json();

        console.log(data);
    }
    catch (err) {
        console.log("Error found", err);
    }
}

function switchTab(clickedTab) {

    apiErrorContainer.classList.remove("active");

    if (clickedTab !== currentTab) {
        currentTab.classList.remove("current-tab");
        currentTab = clickedTab;
        currentTab.classList.add("current-tab");

        if (!searchForm.classList.contains("active")) {
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            searchForm.classList.add("active");
        }
        else {
            searchForm.classList.remove("active");
            userInfoContainer.classList.remove("active");
            //getFromSessionStorage();
        }

        // console.log("Current Tab", currentTab);
    }
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
        console.log("No geolocation support");
    }
}

function showPosition(position) {
    let lat = position.coords.latitude;
    let longi = position.coords.longitude;

    console.log(lat);
    console.log(longi);

}