import React, { useState } from 'react';

import "./WeatherInfo.css";

function WeatherTemperature(props) {
    const [unit, setUnit] = useState("metrics");

    const toFahrenheit = event => {
        event.preventDefault();
        setUnit("imperial");
    }

    const toCelsius = event => {
        event.preventDefault();
        setUnit("metrics");
    }

    const fahrenheit = () => {
        return Math.round((props.celsius * 9) / 5 + 32);
    }

    if (unit === "metrics") {
        return (
            <span>
                <span className="temperature">{Math.round(props.celsius)}</span>
                <span className="units">
                    &nbsp; ˚C |&nbsp;
                    <a href="/" className="text-decoration-none" onClick={toFahrenheit}>˚F</a>
                </span>
            </span>
        );
    } else {
        return (
            <span>
                <span className="temperature">{fahrenheit()}</span>
                <span className="units">
                    &nbsp;
                    <a href="/" className="text-decoration-none" onClick={toCelsius}>˚C&nbsp;</a>
                    | ˚F
                </span>
            </span>
        );
    }
}

export default WeatherTemperature;