function WeatherCard({ date, temp, description, icon }) {
  return (
    <div className="glass-card small">
      <p>{date}</p>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="icon"
      />
      <h3>{temp}°C</h3>
      <p>{description}</p>
    </div>
  );
}

export default WeatherCard;
