import React, { useState } from 'react';

export default (props) => {
    const [unit, setUnit] = useState("metrics");

    const toFahrenheit = e => {
        e.preventDefault();
        setUnit("imperial");
    }

    const toCelsius = e => {
        e.preventDefault();
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
                    {" "} ˚C |{" "}
                    <a href="/" onClick={toFahrenheit}>˚F</a>
                </span>
            </span>
        );
    } else {
        return (
            <span>
                <span className="temperature">{fahrenheit()}</span>
                <span className="units">
                    {" "}
                    <a href="/" onClick={toCelsius}>˚C{" "}</a>
                    | ˚F
                </span>
            </span>
        );
    }
}