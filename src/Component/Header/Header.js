import React from 'react'
import { useClock, useDate } from '../../Hook/Time'
import './header.scss'

const Header = (props) => {
    const time = useClock()
    const date = useDate()
    const { humidity, pressure, sunrise, sunset, wind_speed } =
        props.data.current
    let { latitude, longitude } = props.location
    // console.log(props.data.current)
    var sr = new Date(sunrise * 1000)
    var ss = new Date(sunset * 1000)
    return (
        <header className="header">
            <section className="date">
                <div className="date-time">
                    <h1 className="date-hour">{time}</h1>
                    <p className="date-day">{date}</p>
                </div>
                <ul className="info-list">
                    <li className="info-item">
                        <p className="info-name">Humidity</p>
                        <p className="info-detail">{humidity}</p>
                    </li>
                    <li className="info-item">
                        <p className="info-name">Pressure</p>
                        <p className="info-detail">{pressure}</p>
                    </li>
                    <li className="info-item">
                        <p className="info-name">Wind Speed</p>
                        <p className="info-detail">{wind_speed}</p>
                    </li>
                    <li className="info-item">
                        <p className="info-name">Sunrise</p>
                        <p className="info-detail">{`${sr.getHours()}:${sr.getMinutes()}`}</p>
                    </li>
                    <li className="info-item">
                        <p className="info-name">Sunset</p>
                        <p className="info-detail">{`${ss.getHours()}:${ss.getMinutes()}`}</p>
                    </li>
                </ul>
            </section>

            <section className="location">
                <div className="location-wrapper">
                    <h1 className="location-name">LaoBao/VietNam</h1>
                    <p className="location-latlon">{`${latitude.toFixed(
                        4
                    )}N ${longitude.toFixed(4)}E`}</p>
                </div>
            </section>
        </header>
    )
}

export default Header
