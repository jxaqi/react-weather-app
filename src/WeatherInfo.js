import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherDate from './WeatherDate';

import './WeatherInfo.css';

function WeatherInfo(props) {
    return (
        <div className="weatherInfo">
            <div className="row heading">
                <div className="title col-6">
                    <h3>{props.data.city}</h3>
                </div>
                <div className="icon col-6">                    
                    <img src={"http://openweathermap.org/img/wn/" + props.data.icon + "@2x.png"} alt={props.data.description} />
                    <WeatherTemperature celsius={props.data.temperature} />
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <ul>
                        <li className="text-mute">last updated:
                        </li>
                        <li>
                            <WeatherDate date={props.data.date} />
                        </li>
                        <li className="text-capitalize">{props.data.description}</li>
                    </ul>
                </div>
                <div className="col-6 right">
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