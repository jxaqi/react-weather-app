import React from 'react';

import "./WeatherForecast.css";

function WeatherForecastDay(props) {
    const day = () => {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();
        let days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

        return days[day];
    }

    const maxTemp = () => {
        let temp = Math.round(props.data.temp.max);
        return `${temp}`;
    }

    const minTemp = () => {
        let temp = Math.round(props.data.temp.min);
        return `${temp}`;
    }

    return (
        <div>
            <div className="forecast-day">{day()}</div>
            <div className="forecast-icon">
                <img src={"http://openweathermap.org/img/wn/" + props.data.weather[0].icon + "@2x.png"} alt={props.data.description} />
                <div>
                    <span className="max-forecast">{maxTemp()}˚</span>{" "}
                    <span className="min-forecast">{minTemp()}˚</span>
                </div>
            </div>
        </div>
    );
}

export default WeatherForecastDay;