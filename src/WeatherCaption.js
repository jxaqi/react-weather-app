import React from "react";

function WeatherCaption(props) {
    const weatherMapping = {
        "01d": "SPF is a must",
        "02d": "a perfect hangout day",
        "03d": "rainy day alert",
        "04d": "better wear a hoodie if you are lazy to bring an umbrella",
        "09d": "remember to bring an umbrella before you go out",
        "10d": "remember to bring an umbrella before you go out",
        "11d": "thunderstorms alert - better stay indoors",
        "13d": "cold weather alert - wear thick clothes",
        "50d": "pretend you are acting in a mystery movie with all the fogs",
        "01n": "perfect day for stargazing",
        "02n": "some clouds to keep you company if going out",
        "03n": "heavy clouds but you can still spot the moon",
        "04n": "get yourself a hot chocolate and chill at home",
        "09n": "a perfect ASMR weather",
        "10n": "a perfect ASMR weather",
        "11n": "put on earbuds for a better sleep",
        "13n": "get cozy at home and Netflix",
        "50n": "dark and foggy",
    };

    return <span>{weatherMapping[props.code]}</span>
}

export default WeatherCaption;