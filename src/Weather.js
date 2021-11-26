import React, { useState } from 'react';
import axios from 'axios';
import WeatherInfo from './WeatherInfo';
import WeatherForecast from './WeatherForecast';

import './Weather.css';

function Weather(props) {
    const [weather, setWeather] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);

    const displayApp = result => {
        setWeather({
            ready: true,
            city: result.data.name,
            coordinates: result.data.coord,
            date: new Date(result.data.dt * 1000),
            description: result.data.weather[0].description,
            temperature: result.data.main.temp,
            humidity: result.data.main.humidity,
            windspeed: result.data.wind.speed,
            icon: result.data.weather[0].icon,
            sunrise: result.data.sys.sunrise,
            sunset: result.data.sys.sunset,
        });
    }

    const handleSubmit = event => {
        event.preventDefault();
        searchCity();
    }

    const searchCity = () => {
        const apiKey = "52792a740fc0591b5643f27ca50121b7";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(displayApp);
    }

    const handleChange = event => {
        setCity(event.target.value);
    }

    // const colorTheme = () => {
    //     let unix_sunrise = `${sunrise}`;
    //     let date_sunrise = new Date(unix_sunrise * 1000);
    //     let hours_sunrise = date.getHours();
    //     let mins_sunrise = date.getMinutes();
    //     let time_sunrise = hours_sunrise + ":" + mins_sunrise.substr(-2);

    //     let hours = props.date.getHours();
    //     let mins = props.date.getMinutes();
    //     let time = `${hours}:${mins}`;
    // }

    if (weather.ready) {
        return (
            <div className="card">
                <div className="card-header">
                    <form onSubmit={handleSubmit}>
                        <div className="row mt-2">
                            <div className="col-7">
                                <input className="form-control" type="text" placeholder="Search for a city" onChange={handleChange}></input>
                            </div>
                            <div className="col-3">
                                <button className="btn btn-light mb-3" type="submit">Search</button>
                            </div>
                        </div>
                    </form>
                    <WeatherInfo data={weather} />
                </div>
                <div className="card-body">
                    <WeatherForecast coordinates={weather.coordinates} />
                </div>
            </div>
        );
    } else {
        searchCity();
        return null;
    }
}

export default Weather;