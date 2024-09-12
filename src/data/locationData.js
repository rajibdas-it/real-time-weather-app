const data = [
    {
        location: "London",
        latitude: 51.5073219,
        longitude: -0.1276474,
    },
    {
        location: "Kolkata",
        latitude: 22.5726723,
        longitude: 88.3638815,
    },
    {
        location: "Dhaka",
        latitude: 23.777176,
        longitude: 90.399452,
    },
    {
        location: "Singapore",
        latitude: 1.2899175,
        longitude: 103.8519072,
    },
    {
        location: "New York",
        latitude: 40.7127281,
        longitude: -74.0060152,
    },
    {
        location: "Toronto",
        latitude: 43.6534817,
        longitude: -79.3839347,
    },
];

const getLocations = () => {
    return data
}

const getLocationByName = (location) => {
    // console.log(location);
    if (!location) return null
    const filted = data.filter((item) => item.location.toLowerCase() === location.toLowerCase())
    if (filted.length > 0) {
        return filted[0]
    } else {
        const defaultLocation = {
            location: "",
            longitude: 0,
            latitude: 0
        }
        return defaultLocation
    }
}

// getLocationByName('london');

export { getLocations, getLocationByName }