### Instructions on How to Run the Application Locally:

1. **Prerequisites**:
   - Ensure you have a modern web browser (e.g., Chrome, Firefox, Safari).
   - Have an internet connection to fetch weather data from the OpenWeatherMap API.

2. **Clone or Download the Repository**:
   - Clone the repository using `git clone <https://github.com/kmranimesh/Weather-app>` or download the zip file and extract it.

3. **API Key**:
   - Get an API key from [OpenWeatherMap](https://home.openweathermap.org/users/sign_up).
   - Replace the placeholder `API_KEY` in `index.js` with your actual API key.

4. **File Structure**:
   - Ensure you have the following files in your project directory:
     ```
     index.html
     styles.css
     index.js
     assets/
       - location.png
       - search.png
       - loading.gif
       - wind.png
       - humidity.png
       - cloud.png
     ```

5. **Run the Application**:
   - Open `index.html` in your web browser to run the application.

### Brief Description of the Approach and Technologies Used:

**Approach**:
- The application is a simple weather application that allows users to view weather information for their current location and search for weather information of multiple locations.
- It uses the OpenWeatherMap API to fetch weather data.
- The application supports both light and dark modes.
- It displays additional weather information such as Humidity, Wind Speed and Clouds.
- Clean, readable, and maintainable code with comments and documentation.
- It is built using HTML for structure, CSS for styling, and JavaScript for functionality.

**Technologies Used**:
- **HTML**: Provides the structure of the application.
- **CSS**: Handles the styling, including support for light and dark themes.
- **JavaScript**: Manages the functionality of the application, including:
  - Fetching weather data from the OpenWeatherMap API.
  - Handling user interactions (e.g., searching for a city, granting location access).
  - Rendering weather information dynamically.
  - Switching between light and dark modes.
  - Displaying weather information for multiple locations simultaneously.

### Known Issues or Limitations:

1. **Geolocation**:
   - If the user denies location access, the application will not be able to fetch and display the user's weather information.
   - Geolocation may not work in all browsers or on all devices.

2. **API Rate Limits**:
   - The OpenWeatherMap API has rate limits. If too many requests are made in a short period, the API may stop responding temporarily.

3. **Single API Key**:
   - The application uses a single API key. If multiple users or instances of the application are used, the rate limit could be quickly reached.

4. **Performance**:
   - Fetching and rendering data for multiple locations simultaneously may affect performance, especially with a large number of locations.

5. **Weather Data Accuracy**:
   - The accuracy of the weather information depends on the OpenWeatherMap API.
