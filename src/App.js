import { useState, useEffect } from 'react'
import Header from './Component/Header/Header.js'
import './app.scss'
import Future from './Component/Future/Future.js'
import Loading from './Component/Loading/Loading'

const App = () => {
    const [data, setData] = useState({})
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((success) => {
            const lat = success.coords.latitude
            const lon = success.coords.longitude
            const newKey = 'b6d77cb69d800cebfb5cae9a3d247f5b'
            const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=${newKey}`
            fetch(url)
                .then((res) => res.json())
                .then((data) => {
                    setData(data)
                    setLoading(false)
                })
        })
    }, [])

    if (isLoading) {
        return <Loading />
    }
    return (
        <div className="app">
            <Header data={data} />
            <Future data={data} />
        </div>
    )
}

export default App
