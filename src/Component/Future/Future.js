import React from 'react'
import './future.scss'

const Future = (props) => {
    const daily = props.data.daily
    return (
        <section className="future">
            <ul className="future-list">
                {daily.map((day, index) => {
                    var a = new Date(day.dt * 1000)
                    const ddd = a.toString().split(' ')[0]
                    const icon = day.weather[0].icon
                    const url = `https://openweathermap.org/img/wn//${icon}@4x.png`
                    return index === 0 ? (
                        <div className="today" key={index}>
                            <img className="today-img" src={url} alt="" />
                            <div className="today-desc">
                                <h2 className="today-day day">{ddd}</h2>
                                <p className="today-temp desc">
                                    Night - {day.temp.night}
                                </p>
                                <p className="today-temp desc">
                                    Day - {day.temp.day}
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className="future-item" key={index}>
                            <h2 className="day">{ddd}</h2>
                            <img className="future-img" src={url} alt="" />
                            <p className="future-temp desc">
                                Night - {day.temp.night}
                            </p>
                            <p className="future-temp desc">
                                Day - {day.temp.day}
                            </p>
                        </div>
                    )
                })}
            </ul>
        </section>
    )
}

export default Future
