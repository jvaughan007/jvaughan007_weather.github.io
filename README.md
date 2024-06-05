#Weather App

##Description
The Weather App is a React-based application that allows users to get up-to-date weather information for any location by entering a ZIP code and selecting a country. The app uses the OpenWeatherMap API to fetch weather data.

##Features

-Search for weather by ZIP code and country.
-Display the location name, weather description, and temperature in Fahrenheit.
-Error handling for missing inputs.

##Getting Started

###Prerequisites
Before you begin, ensure you have met the following requirements:

-You have installed the latest version of Node.js and npm.
-You have a OpenWeatherMap API key.

##Installation

###Clone the repository:

```
git clone https://github.com/your-username/weather-app.git
cd weather-app
```

###Install the necessary dependencies:

```
npm install
```

###Create a .env file in the root directory and add your OpenWeatherMap API key:

```
REACT_APP_WEATHER_API_KEY=your_api_key_here
```

###Running the App

To run the app locally, use the following command:

```
npm start
```

The app will be available at http://localhost:3000.

##Usage

1. Enter a ZIP code in the input field.
2. Select a country from the dropdown menu.
3. Click the "Search" button to fetch the weather data.

The app will display the location name, weather description, and temperature in Fahrenheit.

##Components

###App.js
This is the main component of the application. It includes the following functionality:

-State management for zipcode, countrycode, weather, and error.
-Handlers for input changes and the search button click.
-API call to fetch weather data from OpenWeatherMap.
-Rendering of the weather data.
-State Management
    -zipcode: Stores the user's input for the ZIP code.
    -countrycode: Stores the user's selection for the country -code.
    -weather: Stores the fetched weather data.
    -error: Stores any error messages related to input validation or API calls.
-Handlers
-handleChangZipcode: Updates the zipcode state when the input changes.
-handleChangeCountry: Updates the countrycode state when the country selection changes.
-handleSearch: Validates inputs, makes the API call, and updates the weather state.