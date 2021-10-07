import { UseLocation } from '../Hook/Time'

function fetchData(lat, lon) {
    // const key = '7a48f997c4cbf992ada8ce8e44129c66'
    const newKey = 'b6d77cb69d800cebfb5cae9a3d247f5b'

    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=${newKey}`
    return fetch(url)
        .then((res) => res.json())
        .then((data) => data)
}

const wrapPromise = (promise) => {
    const { lat, lon } = UseLocation()
    let status = 'pending'
    let result = ''
    let suspender = promise(lat, lon).then(
        (r) => {
            status = 'success'
            result = r
        },
        (e) => {
            status = 'error'
            result = e
        }
    )

    return {
        read() {
            if (status === 'pending') {
                throw suspender
            } else if (status === 'error') {
                throw result
            }
            return result
        },
    }
}

export const createResource = () => {
    return {
        data: wrapPromise(fetchData),
    }
}
