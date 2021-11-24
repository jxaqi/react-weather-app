import React, { useState } from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';
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

    if (weather.ready) {
        return (
            <div className="card">
                <div className="card-header">
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-10">
                                <input className="form-control" type="text" placeholder="Search for a city" onChange={handleChange}></input>
                            </div>
                            <div className="col-2">
                                <button className="btn btn-light mb-3" type="submit">Search</button>
                            </div>
                        </div>
                    </form>
                    <WeatherInfo data={weather} />
                    <WeatherForecast coordinates={weather.coordinates} />
                </div>
            </div>
        );
    } else {
        searchCity();
        return (
            <Loader type="Rings" color="#fff" height={80} width={80} />
        );
    }
}

export default Weather;