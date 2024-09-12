/* eslint-disable react-hooks/exhaustive-deps */


import { useState, useEffect, useContext } from "react"
import { LocationContext } from "../context"

const useWeather = () => {

    const [weatherData, setWeatherData] = useState({
        location: "",
        climate: "",
        temp: "",
        maxTemperature: "",
        minTemperature: "",
        humidity: "",
        cloudPercentage: "",
        wind: "",
        time: "",
        longitude: "",
        latitude: ""
    })

    const [loading, setLoading] = useState({
        state: false,
        message: ""
    })

    const [error, setError] = useState(null)

    const { searchLocation } = useContext(LocationContext);
    // console.log(searchLocation);


    const fetchWeatherData = async (latitude, longitude) => {
        try {
            setLoading({
                ...loading,
                state: true,
                message: "Featching weather data..."
            })
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`)

            if (!response.ok) {
                const errorMessage = `Fetching weather data failed:${response.status}`
                throw new Error(errorMessage) //error throw korar karone eibar catch block run hobe
            }

            const data = await response.json()
            const updatedWeatherData = {
                ...weatherData,
                location: data?.name,
                climate: data?.weather[0]?.main,
                temp: data?.main?.temp,
                maxTemperature: data?.main?.temp_max,
                minTemperature: data?.main?.temp_min,
                humidity: data?.main?.humidity,
                cloudPercentage: data?.clouds?.all,
                wind: data?.wind?.speed,
                time: data?.dt,
                latitude: latitude,
                longitude: longitude

            }
            setWeatherData(updatedWeatherData)



        } catch (error) {
            setError(error)

        } finally {
            setLoading({
                ...loading,
                state: false,
                message: ""
            })
        }

    }

    useEffect(() => {
        setLoading({
            ...loading,
            state: true,
            message: "Finding Location..."
        })
        // navigator.geolocation.getCurrentPosition(function (position) {
        //     fetchWeatherData(position.coords.latitude, position.coords.longitude)
        // })

        if (searchLocation.latitude && searchLocation.longitude) {
            fetchWeatherData(searchLocation.latitude, searchLocation.longitude)
        } else {
            navigator.geolocation.getCurrentPosition((position) => {
                fetchWeatherData(position.coords.latitude, position.coords.longitude)
            })
        }



    }, [searchLocation.latitude, searchLocation.longitude])

    return {
        weatherData,
        loading,
        error
    }


}

export default useWeather

