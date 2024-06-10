import { useState, useEffect } from "react";
import Temprature from "./components/Temprature";
import Highlights from "./components/Highlights";

function App() {
  const [city, setCity] = useState("Ha Noi");
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=64bb8afae73c411da8a145858241704%20&q=${city}&aqi=no`;

    fetch(apiUrl)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Could not get data");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setWeatherData(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [city]);

  return (
    <>
      <div className="bg-slate-800 h-screen flex justify-center align-top">
        <div className=" bg-slate-800 mt-40 w-1/5 h-1/3">
          {weatherData && (
            <Temprature
              setCity={setCity}
              stats={{
                temp: weatherData.current.temp_c,
                condition: weatherData.current.text,
                isDay: weatherData.current.is_Day,
                location: weatherData.location.name,
                time: weatherData.location.localtime,
                tx: weatherData.current.condition.text,
              }}
            />
          )}
        </div>
        <div className=" mt-40 w-1/3 h-1/3 p-10 grid grid-cols-2 gap-6">
          <h2 className="text-slate-400  text-2xl col-span-2">
            Today's Highlights
          </h2>
          {weatherData && (
            <>
              <Highlights
                stats={{
                  title: "Wind Status",
                  value: weatherData.current.wind_mph,
                  unit: "mph",
                  direction: weatherData.current.wind_dir,
                }}
              />
              <Highlights
                stats={{
                  title: "Humidity",
                  value: weatherData.current.humidity,
                  unit: " % ",
                }}
              />
              <Highlights
                stats={{
                  title: "Visibility",
                  value: weatherData.current.vis_miles,
                  unit: " miles ",
                }}
              />
              <Highlights
                stats={{
                  title: "Air Pressure",
                  value: weatherData.current.pressure_mb,
                  unit: " mb ",
                }}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
