import React from 'react'
import { useClock, useDate } from '../../Hook/Time'
import './header.scss'

const Header = () => {
    const time = useClock()
    const date = useDate()

    return (
        <header className="header">
            <section className="date">
                <div className="date-time">
                    <h1 className="date-hour">{time}</h1>
                    <p className="date-day">{date}</p>
                </div>
                <ul className="info-list">
                    <li className="info-item">
                        <p className="info-name">Humiaity</p>
                        <p className="info-detail">72%</p>
                    </li>
                    <li className="info-item">
                        <p className="info-name">Humiaity</p>
                        <p className="info-detail">72%</p>
                    </li>
                    <li className="info-item">
                        <p className="info-name">Humiaity</p>
                        <p className="info-detail">72%</p>
                    </li>
                    <li className="info-item">
                        <p className="info-name">Humiaity</p>
                        <p className="info-detail">72%</p>
                    </li>
                </ul>
            </section>

            <section className="location">
                <div className="location-wrapper">
                    <h1 className="location-name">LaoBao/VietNam</h1>
                    <p className="location-latlon">10.9505N 76.6343E</p>
                </div>
            </section>
        </header>
    )
}

export default Header
