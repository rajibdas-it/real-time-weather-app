import { useState, useEffect } from "react"


const useLocalStorage = (storageKey, defaultvalue) => {
    const initialValue = JSON.parse(localStorage.getItem(storageKey)) ?? defaultvalue

    const [value, setValue] = useState(initialValue)

    useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(value))
    }, [storageKey, value])


    return [value, setValue]
}

export default useLocalStorage