import React, { useState, useEffect } from 'react'
import './Home.css'
import axios from 'axios';
function Home() {
    const [city, setCity] = useState('kopargaon');
    const [temperature, setTemperature] = useState('0')
    const [message, setMessage] = useState('')
    async function loadWeatherInfo() {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?id=2172797&appid=98d8748228167e2a3f7086edc1b2fba4`)
            setTemperature((response.data.main.temp - 273).toFixed(2));
            setMessage('☁️ Data Fetched Successfully...')
        }
        catch (err) {
            setTemperature(0)
            setMessage('city Not Found')
        }
    }
    useEffect(() => {
        loadWeatherInfo()
    }, [city])
    return (
        <div>
            <h1 className='app-title'>Weather For {city}
            </h1>

            <input className='search-bar'
                type="text" placeholder="Enter city..."
                value={city}
                onChange={(e) => {
                    setCity(e.target.value)
                }}
            />
            <p className='message-text'>{message}</p>
            <h1 className="Temerature-text">Temerature : {temperature}°C</h1>

        </div>
    )
}
export default Home