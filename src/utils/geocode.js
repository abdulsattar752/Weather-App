// src/utils/geocode.js
export const getCoordinates = async (city, apiKey) => {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(city)}&limit=1&appid=${apiKey}`
    );
    if (!res.ok) throw new Error('City not found. Please try again.');
    const data = await res.json();
    if (data.length === 0) throw new Error('City not found. Please check spelling.');
    return { lat: data[0].lat, lon: data[0].lon, name: data[0].name };
  } catch (err) {
    throw err;
  }
};