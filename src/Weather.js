import React, { useState } from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import WeatherInfo from './WeatherInfo';
import WeatherForecast from './WeatherForecast';

import './Weather.css';

export default (props) => {
    const [city, setCity] = useState(props.defaultCity);
    const [weatherData, setWeatherData] = useState({ ready: false });

    const displayApp = response => {
        setWeatherData({
            ready: true,
            city: response.data.name,
            coordinates: response.data.coord,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            windspeed: response.data.wind.speed,
            icon: response.data.weather[0].icon,
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        searchCity();
    }

    const searchCity = () => {
        const apiKey = "e697c1877f48a82f71267dda2449fba8";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
        axios.get(apiUrl).then(displayApp);
    }

    const handleCity = e => {
        setCity(e.target.value);
    }

    if (weatherData.ready) {
        return (
            <div className="card">
                <div className="card-header">
                    Title
                    <form onSubmit="{handleSubmit}" className="row g-3">
                        <div className="row">
                            <div className="col-10">
                                <input className="form-control" type="text" id="inputCity" placeholder="Seearch for a city" onChange={handleCity}></input>
                            </div>
                            <div className="col-2">
                                <button className="btn btn-light mb-3" type="submit">Search</button>
                            </div>
                        </div>
                    </form>
                    <WeatherInfo data={weatherData} />
                    <WeatherForecast coordinates={weatherData.coordinates} />
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