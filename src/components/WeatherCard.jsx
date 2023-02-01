import React from 'react'
import './styles/WeatherCard.css'

export const WeatherCard = ({weather, isCelsius, temps, changeUnitTemp}) => {
  return (
    <section className='weatherCard'>
        <h1 className='weatherCard_title'></h1>
        <h2 className='weatherCard_place'>{weather?.name}, {weather?.sys.country}</h2>
        <div className='weatherCard_img'>
            <img src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="icon weather" />
        </div>
        <h3 className='weatherCard_temp'>{isCelsius ? temps?.celsius + " °C" : temps?.fahrenheit + " °F"}</h3>
        <ul className='weatherCard_list'>
            <li className='weatherCard_description'>{weather?.weather[0].main}{weather?.weather[0].descrption}</li>
            <li><span>Wind Speed: </span> {weather?.wind.speed} m/sec</li>
            <li><span>Clouds: </span> {weather?.clouds.alls}%</li>
            <li><span>Pressure: </span> {weather?.main.pressure} hPa</li>
        </ul>
        <button className='weatherCard_btn' onClick={changeUnitTemp}>&deg;C / &deg; F</button>
    </section>
  )
}
