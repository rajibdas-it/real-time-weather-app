import cloudIcon from "../assets/cloud.svg";
import hazeIcon from "../assets/haze.svg";
import snowIcon from "../assets/icons/snow.svg";
import sunnyIcon from "../assets/icons/sunny.svg";
import rainIcon from "../assets/rainy.svg";
import thunderIcon from "../assets/thunder.svg";

export default function getWeatherIcon(climate) {
    switch (climate) {
        case "Rain":
            return rainIcon;
        case "Clouds":
            return cloudIcon;
        case "Clear":
            return sunnyIcon;
        case "Snow":
            return snowIcon;
        case "Thunder":
            return thunderIcon;
        case "Haze":
            return hazeIcon;
        case "Fog":
            return hazeIcon;
        case "Mist":
            return hazeIcon;
        default:
            return sunnyIcon;
    }
}

