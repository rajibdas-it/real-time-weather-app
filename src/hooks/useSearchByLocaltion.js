/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";


const useSearchByLocaltion = (searchTerm) => {
    const [searchData, setSearchData] = useState(
        {
            location: "",
            longitude: 0,
            latitude: 0

        })

    const [loading, setLoading] = useState({
        state: false,
        message: ""
    })

    const [error, setError] = useState(null)

    const fetchLocation = async (searchTerm) => {

        try {
            setLoading({
                ...loading,
                state: true,
                message: "Searching Location"
            })

            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&APPID=${import.meta.env.VITE_WEATHER_API_KEY}`)
            if (!response.ok) {
                const errorMessage = `Fetching Location failed: ${response.status}`
                throw new Error(errorMessage)
            }
            const data = await response.json()
            setSearchData({
                ...searchData,
                location: data?.name,
                longitude: data?.coord?.lon,
                latitude: data?.coord?.lat

            })
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
        fetchLocation(searchTerm)

    }, [searchTerm])

    return {
        searchData,
        loading,
        error
    }

};

export default useSearchByLocaltion;