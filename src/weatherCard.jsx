import { getWeatherIcon, formatDate } from "./api";

function WeatherCard({ weather }) {
  if (!weather) return null;

  const { current, daily, name, country } = weather;

  return (
    <div className="weather-card">
      <h2 className="weather-city">{name}, {country}</h2>
      <p className="weather-date-time">{formatDate()}</p>
      <div className="weather-main">
        <div className="weather-icon">{getWeatherIcon(current.weather_code)}</div>
        <div className="weather-temprature">{current.temperature_2m}°C</div>
      </div>

      <p className="weather-min">Min: {daily.temperature_2m_min[0]}°C</p>
      <p className="weather-max">Max: {daily.temperature_2m_max[0]}°C</p>
      <p className="weather-feelsLike">Feels Like: {current.apparent_temperature}°C</p>
      <p className="weather-humidity">Humidity: {current.relative_humidity_2m}%</p>
      <p className="weather-wind">Wind: {current.wind_speed_10m} km/h</p>
      <p className="weather-pressure">Pressure: {current.surface_pressure} hPa</p>
    </div>
  );
}

export default WeatherCard;
