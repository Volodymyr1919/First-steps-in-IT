import React, { useState, useEffect } from "react";

export default function Weather() {

    let nDate = new Date();

    const [error, setError]         = useState(null);
    const [loading, setLoading]     = useState(true);
    const [humidity, setHumidity]   = useState("");
    const [wind, setWind]           = useState("");
    const [weathMain, setWeathMain] = useState("");
    const [temp, setTemp]           = useState("");
    const [country, setCountry]     = useState("DE");
    const [hours, setHours]         = useState(nDate.getHours());
    const [minutes, setMinutes]     = useState(nDate.getMinutes());
    const [location, setLocation]   = useState("Gräfelfing");
    const [apiKey, setApiKey]       = useState("e491aa3f6f567802cc8b29591911072a");

    // useEffect(() => {
    //     function setWeather() {
    //         fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`, {
    //             method: 'GET',
    //             headers: {
    //                 "Access-Control-Allow-Origin"   : "*",
    //                 "content-type"                  : "application/json"
    //             }
    //         }).then((data) => {
    //             data.json();
    //         }).then((data) => {
    //             setLocation(data.name);
    //             setCountry(data.sys.country);
    //             setWeathMain(data.weather[0].main);
    //             setWind(data.wind.speed);
    //             setHumidity(data.main.humidity);
    //             setTemp(data.main.temp);
    //         }).catch(err => {
    //             setError(err);
    //             setLoading(false);
    //         });
    //     }
    //     setWeather();
    // }, []);
    let _day = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    let _month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December" 
    ]
    let _response = {
                "coord": {
                "lon": 11.4294,
                "lat": 48.1188
                },
                "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
                ],
                "base": "stations",
                "main": {
                "temp": 276.42,
                "feels_like": 270.37,
                "temp_min": 275.83,
                "temp_max": 277.18,
                "pressure": 1026,
                "humidity": 91
                },
                "visibility": 10000,
                "wind": {
                "speed": 10.29,
                "deg": 250,
                "gust": 15.95
                },
                "rain": {
                "1h": 0.27
                },
                "clouds": {
                "all": 100
                },
                "dt": 1675354473,
                "sys": {
                "type": 2,
                "id": 2013241,
                "country": "DE",
                "sunrise": 1675320100,
                "sunset": 1675354448
                },
                "timezone": 3600,
                "id": 2918368,
                "name": "Gräfelfing",
                "cod": 200
            }
                function adjMinutes() {
                    if(minutes < 10) {
                        return "0" + minutes;
                    } else {
                        return minutes;
                    }
                }
    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error: {error.message}</p>;

    return(
        <div className="card weather">
          <img
            className="condition"
            src="https://user-images.githubusercontent.com/30212452/203724734-5f748507-7ae4-49f9-89f8-7fce3112cd95.png"
          />
          <div className="content">
          {/* {Math.round(temp - 273.15)}°C */}
            {Math.round(_response.main.temp - 273.15)}°C
            <br />
            {/* {weathMain} */}
            {_response.weather[0].main}
            <br />
            {/* Wind: {wind} km/h <br /> Humidity: {humidity} % */}
            <span style={{fontSize:"15px", position:"absolute", top:"150px"}}>Wind: {_response.wind.speed} km/h <br /> Humidity: {_response.main.humidity} %</span>
        </div>
          <div className="meta">
            <span className="location">
              <span className="iconoir-pin-alt"></span>
              {location}, {country}
            </span>
            <div className="datetime">
              <span className="iconoir-calendar">{_day[nDate.getDay()]},</span>
              <span className="date">{nDate.getDate()} {_month[nDate.getMonth()]}, {nDate.getFullYear()}</span>
              <span className="time">{hours}:{adjMinutes()}</span>
            </div>
          </div>
        </div>
    );
}