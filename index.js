const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]");
const userContainer = document.querySelector(".weather-container");

const grantAccessContainer = document.querySelector(".grant-location-container");
const searchForm = document.querySelector("[data-searchForm");
const loadingScreen = document.querySelector(".loading-container");
const userInfoContainer = document.querySelector(".user-info-container");

//initial variables - needed

let oldTab = userTab;
const API_KEY = "b25832a5e0ff3f0b092cf057be0ac669";
oldTabTab.classList.add("current-tab");


function switchTab(clickedTab) {
    if (oldTab != newTab) {
        //processing will happen
        oldTab.classList.remove("current-tab");     //removed properties from currentTab
        oldTab = newTab;
        oldTab.classList.add("current-tab");    // added properties to clicked tab which is now the current tab

        if (!searchForm.classList.contains("active")) {
            // Is search form container is invisible, if yes, then make visible
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            // now I'm in user's weather tab, so display weather by checking local storage first for coordinates if we have them saved
            searchForm.classList.add("active");
        }
        else {
            // previously, search tab was visible, now user's weather tab should be made visible
            searchForm.classList.remove("active");
            userInfoContainer.classList.remove("active");
            getFromSessionStorage();
        }
    }
}

userTab.addEventListener("click", () => {
    //pass clicked tab as input parameter
    switchTab(userTab);
});

searchTab.addEventListener("click", () => {
    //pass clicked tab as input parameter
    switchTab(searchTab);
});

// check if coordinates are already present in session storage
function getFromSessionStorage() {
    const localCoordinates = sessionStorage.getItem("user-coordinates");
    if (!localCoordinates) {
        // if local coordinates are not available
        grantAccessContainer.classList.add("active");
    }
    else {
        const coordinates = JSON.parse(localCoordinates);
        fetchUserWeatherInfo(coordinates);
    }
}

async function fetchUserWeatherInfo(coordinates) {
    const { lat, lon } = coordinates;
    // make grantlocation container invisible
    grantAccessContainer.classList.remove("active");
    //make loader visible
    loadingScreen.classList.add("active");

    // API call
    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);

        const data = await response.json();

        loadingScreen.classList.remove("active");
        userContainer.classList.add("active");
        renderWeatherInfo(data);

    }
    catch(err) {
        //Handle errors as needed
        console.log("Error found", err);
    }
}

