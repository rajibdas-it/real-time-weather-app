import ClearSkyImage from "../assets/backgrounds/clear-sky.jpg";
import fewClouds from "../assets/backgrounds/few-clouds.jpg";
import mist from "../assets/backgrounds/mist.jpeg";
import rainyDay from "../assets/backgrounds/rainy-day.jpg";
import scatteredClouds from "../assets/backgrounds/scattered-clouds.jpg";
import sunny from "../assets/backgrounds/sunny.jpg";
import thunderstorm from "../assets/backgrounds/thunderstorm.jpg";
import winter from "../assets/backgrounds/winter.jpg";

const generateBackgroundImage = (climate) => {
    switch (climate) {
        case "Rain":
            return rainyDay;
        case "Clouds":
            return scatteredClouds;
        case "Clear":
            return ClearSkyImage;
        case "Snow":
            return sunny;
        case "Thunder":
            return thunderstorm;
        case "Haze":
            return fewClouds;
        case "Fog":
            return winter;
        case "Mist":
            return mist;
        default:
            return ClearSkyImage;
    }
}

export { generateBackgroundImage }