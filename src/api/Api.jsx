import React, { useEffect, useState } from "react";

import axios from "axios";

const Api = ({ city }) => {
  const [reslocation, setLocation] = useState({});
  const [rescurrent, setCurrent] = useState({});
  const [loading, setLoading] = useState(false);

  const API_Key = "10c70dab3b444cf481a110056241204";

  useEffect(() => {
    const getWeather = async () => {
      console.log("Enter is pressed");
      console.log("Inside getWeather function");
      const URL = `https://api.weatherapi.com/v1/current.json?key=${API_Key}&q=${city}`;

      const { location, current } = await axios
        .get(URL)
        .then((res) => {
          console.log(res.data);
          return res.data;
        })
        .catch((err) => console.log(err));
      setLocation(location);
      setCurrent(current);
      setLoading(true);
    };

    if (city) {
      getWeather();
    }
  }, [city, API_Key]);

  return (
    <>
      {loading ? (
        <div className="city">
          <h2 className="city-name">
            <span>{reslocation.name}</span>
            <sup>{reslocation.country}</sup>
          </h2>
          <div className="city-temp">
            <span>{rescurrent.temp_c}</span>
            <span>&deg;C</span>
          </div>
          <div className="info">
            <img src={rescurrent.condition.icon} />
            <p>{rescurrent.condition.text}</p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Api;
