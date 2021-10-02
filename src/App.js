import React, { useEffect, useState } from 'react'
import Header from './Component/Header/Header.js'
import './app.scss'
import Future from './Component/Future/Future.js'

const App = () => {
    const [data, setData] = useState('')
    let latlon = {}
    const [location, setLocation] = useState(latlon)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        var latitude, longitude
        navigator.geolocation.getCurrentPosition((success) => {
            latitude = success.coords.latitude
            longitude = success.coords.longitude
            const key = '7a48f997c4cbf992ada8ce8e44129c66'
            const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&appid=${key}`
            latlon = {
                latitude,
                longitude,
            }
            setLocation(latlon)

            try {
                fetch(url)
                    .then((res) => res.json())
                    .then((data) => setData(data))
            } catch (err) {
                console.log(err)
            }
        })
    }
    return (
        <div className="app">
            {typeof data == 'object' ? (
                <>
                    <Header data={data} location={location} />
                    <Future data={data} />
                </>
            ) : (
                ''
            )}
        </div>
    )
}

export default App
