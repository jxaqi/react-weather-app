import React from 'react';
import WeatherIcon from './WeatherIcon';
import WeatherTemperature from './WeatherTemperature';
import WeatherDate from './WeatherDate';

function WeatherInfo(props) {
    return (
        <div className="weatherInfo">
            <div className="row">
                <div className="col-8">
                    <h3>{props.data.city}</h3>
                </div>
                <div className="col-4">
                    <WeatherIcon code={props.data.icon} alt={props.data.description} />
                    <WeatherTemperature celsius={props.data.temperature} />
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <ul>
                        <li>last updated:
                        </li>
                        <li>
                            <WeatherDate date={props.data.date} />
                        </li>
                        <li className="text-capitalize">{props.data.description}</li>
                    </ul>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Humidity: {props.data.humidity} %</li>
                        <li>Wind: {props.data.windspeed} km/h</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default WeatherInfo;