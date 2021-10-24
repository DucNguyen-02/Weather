import { useState, useEffect } from 'react'

function formatTime(date) {
    const hours = `0${date.getHours()}`.slice(-2)
    const minutes = `0${date.getMinutes()}`.slice(-2)
    const seconds = `0${date.getSeconds()}`.slice(-2)

    return `${hours}:${minutes}:${seconds}`
}

function formatDate(date) {
    const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Satuday',
    ]
    const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ]

    const day = days[date.getDay()]
    const month = months[date.getMonth()]
    const n = date.getDate()

    return `${day}, ${n} ${month}`
}

export function useClock() {
    const [timeString, setTimeString] = useState('')

    useEffect(() => {
        const clock = setInterval(() => {
            const now = new Date()
            const formatedDate = formatTime(now)
            setTimeString(formatedDate)
        }, 1000)
        return () => {
            clearInterval(clock)
        }
    }, [])

    return timeString
}

export function useDate() {
    const [dateString, setDateString] = useState('')

    useEffect(() => {
        const date = setInterval(() => {
            const now = new Date()
            const formatedDate = formatDate(now)
            setDateString(formatedDate)
        }, 1000)
        return () => {
            clearInterval(date)
        }
    }, [])

    return dateString
}

export function UseLocation() {
    const [location, setLocation] = useState('')
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((success) => {
            const lat = success.coords.latitude
            const lon = success.coords.longitude
            setLocation({
                lat,
                lon,
            })
        })
    }, [])

    return location
}
