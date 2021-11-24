import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherForecastDay from './WeatherForecastDay';

function WeatherForecast(props) {
    const [loading, setLoading] = useState(false);
    const [forecast, setForecast] = useState(null);

    useEffect(() => {
        setLoading(false);
    }, [props.coordinates]);

    const displayForecast = response => {
        setForecast(response.data.daily);
        setLoading(true);
    }

    const load = () => {
        const apiKey = "52792a740fc0591b5643f27ca50121b7";
        let latitude = props.coordinates.lat;
        let longitude = props.coordinates.lon;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(displayForecast);

        return <div>Loading forecast...</div>
    }

    if (loading) {
        return (
            <div className="weatherForecast">
                <div className="row">
                    {forecast.map((dailyForecast, index) => {
                        if (index < 5) {
                            return (
                                <div className="col" key="{index}">
                                    <WeatherForecastDay data={dailyForecast} />
                                </div>
                            );
                        } else {
                            return null;
                        }
                    })}
                </div>
            </div>
        );
    } else {
        return load();
    }
}

export default WeatherForecast;