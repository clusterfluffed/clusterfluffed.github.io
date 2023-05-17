// const driveSprocket = document.querySelector('#driver-sprocket');
const rearSprocket = document.querySelector('#rear-sprocket');
let calcDriveSprocket = 0;
let calcRearSprocket = 0;
let ratio = document.getElementById('gear-ratio');

document.querySelector('#drive-sprocket').addEventListener("change", () => {
    calcDriveSprocket = document.querySelector('#drive-sprocket').value;
    console.log(calcDriveSprocket);
    if (calcDriveSprocket !== 0 && calcRearSprocket !== 0) {
        ratio.innerHTML = Math.round((calcRearSprocket / calcDriveSprocket + Number.EPSILON) * 100) / 100;
    }
})

document.querySelector('#rear-sprocket').addEventListener("change", () => {
    calcRearSprocket = document.querySelector('#rear-sprocket').value;
    console.log(calcRearSprocket);
    if (calcDriveSprocket !== 0 && calcRearSprocket !== 0) {
        ratio.innerHTML = Math.round((calcRearSprocket / calcDriveSprocket + Number.EPSILON) * 100) / 100;
    }
})

document.querySelector('#accordion-gear').addEventListener("click", () => {

    if(document.getElementById('ratio-reveal').hidden = true) {
        document.getElementById('accordion-icon-gear').setAttribute('class', 'fa-solid fa-angle-down header-icon-accordion');
        document.getElementById('ratio-reveal').hidden = false;
    }
});

document.querySelector('#accordion-gear').addEventListener("click", () => {

    if(document.getElementById('ratio-reveal').hidden = false) {
        document.getElementById('accordion-icon-gear').setAttribute('class', 'fa-solid fa-chevron-right header-icon-accordion');
        document.getElementById('ratio-reveal').hidden = true;
    }
});

//location and weather API
document.querySelector('#auto-weather').addEventListener("click", () => {
    let lat = 0;
    let latitude = '';
    let long = 0;
    let longitude = '';
    let weatherOutputTemp = document.getElementById('live-weather-temp');
    let weatherOutputWindSpeed = document.getElementById('live-weather-windspeed');
    let weatherOutputWindDirection = document.getElementById('live-weather-wind-direction');

        (function () {
            navigator.geolocation.getCurrentPosition(function (position) {
                lat = position.coords.latitude
                latitude = lat.toFixed(2);
                long = position.coords.longitude
                longitude = long.toFixed(2);
                console.log('lat', latitude);
                console.log('long', longitude);
                fetch(`https://api.open-meteo.com/v1/gfs?latitude=${latitude}&longitude=${longitude}&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch`)
                    // Handle success
                    .then(response => response.json())  // convert to json
                    .then(json => console.log(json.current_weather.temperature))    //print data to console
                    .catch(err => console.log('Request Failed', err)); // Catch errors
                // fetch(`https://api.open-meteo.com/v1/gfs?latitude=${latitude}&longitude=${longitude}&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch`)
                //     .then(response => response.text())
                //     .then(data => console.log(data));
                fetch(`https://api.open-meteo.com/v1/gfs?latitude=${latitude}&longitude=${longitude}&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch`)
                    .then((response) => {
                    if (!response.ok) {
                        throw new Error(`HTTP error, status = ${response.status}`);
                    }
                    return response.json();
                    })
                    .then((data) => {
                        const weatherResponseTemp = Math.round(data.current_weather.temperature);
                        console.log(`Temp:`, weatherResponseTemp);
                        const weatherResponseWindSpeed = Math.round(data.current_weather.windspeed);
                        console.log(`Wind Speed:`, weatherResponseWindSpeed);
                        const weatherResponseWindDirection = data.current_weather.winddirection;
                        console.log(`Wind Direction:`, weatherResponseWindDirection);
                        const weatherResponseCode = data.current_weather.weathercode;
                        console.log(`Weather Code:`, weatherResponseCode);
                        weatherOutputTemp.innerHTML = `Temp: <span>${weatherResponseTemp}</span>`;
                        windDirectionCalc(weatherResponseWindDirection);
                        //wind direction calculation
                        function windDirectionCalc(dir) {
                            let windDirectionOutput = '';
                        if (dir >= 346 && dir <= 360 || dir >= 0 && dir <= 15) {
                            windDirectionOutput = 'N';
                        } else if (dir >= 16 && dir <= 45) {
                            windDirectionOutput = 'NNE';
                        } else if (dir >= 46 && dir <= 75) {
                            windDirectionOutput = 'ENE';
                        } else if (dir >= 76 && dir <= 105) {
                            windDirectionOutput = 'E';
                        } else if (dir >= 106 && dir <= 135) {
                            windDirectionOutput = 'ESE';
                        } else if (dir >= 136 && dir <= 165) {
                            windDirectionOutput = 'SSE';
                        } else if (dir >= 166 && dir <= 195) {
                            windDirectionOutput = 'S';
                        } else if (dir >= 196 && dir <= 225) {
                            windDirectionOutput = 'SSW';
                        } else if (dir >= 226 && dir <= 255) {
                            windDirectionOutput = 'WSW';
                        } else if (dir >= 256 && dir <= 285) {
                            windDirectionOutput = 'W';
                        } else if (dir >= 286 && dir <= 315) {
                            windDirectionOutput = 'WNW';
                        } else if (dir >= 316 && dir <= 345) {
                            windDirectionOutput = 'NNW';
                        }
                        console.log(windDirectionOutput);
                        return weatherOutputWindDirection.innerHTML = `Wind: <span>${windDirectionOutput}</span> at <span>${weatherResponseWindSpeed} mph</span>`;
                        };
      })
            },
            function (error) {
                console.log("The Locator was denied. :(");
            })
        })();
    if(document.getElementById('auto-weather').checked===false) {
        document.getElementById('auto-weather-reveal').hidden = true;
        document.getElementById('auto-weather-reveal-header').hidden = true;
        document.getElementById('default-weather').hidden = false;
    }
});