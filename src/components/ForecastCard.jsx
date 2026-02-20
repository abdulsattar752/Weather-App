function ForecastCard({ day, temp, description, icon }) {
  return (
    <div style={{
      background: "white",
      borderRadius: "10px",
      padding: "15px",
      margin: "10px",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      textAlign: "center",
      width: "140px",
      transition: "0.3s",
    }}
    onMouseOver={(e)=>e.currentTarget.style.transform="scale(1.05)"}
    onMouseOut={(e)=>e.currentTarget.style.transform="scale(1)"}
    >
      <h4 style={{color:"#1E3A8A"}}>{day}</h4>
      <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt={description}/>
      <p style={{fontWeight:"600"}}>{temp} °C</p>
      <p style={{fontSize:"12px", textTransform:"capitalize"}}>{description}</p>
    </div>
  );
}

export default ForecastCard;