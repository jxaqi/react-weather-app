import React from 'react';
import WeatherIcon from './WeatherIcon';

export default (props) => {
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
            <div className="forecase-icon">
                <WeatherIcon code={props.data.weather[0].icon} />
                <div>
                    <span className="maxForecast">{maxTemp()}˚</span>{" "}
                    <span className="minForecast">{minTemp()}˚</span>
                </div>
            </div>
        </div>
    );
}