import pin from "../../assets/pin.svg";
import cloud from "../../assets/cloud.svg";
import { useContext } from "react";
import { WeatherContext } from "../../context";

const WeatherHeadline = () => {
  const { loading, weatherData, error } = useContext(WeatherContext);
  console.log(loading, weatherData, error);
  return (
    <div>
      <div className="max-md:flex items-center justify-between md:-mt-10">
        <img src={cloud} alt="cloud" />
        <div className="max-md:flex items-center max-md:space-x-4">
          <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
            {Math.round(weatherData.temp)}°
          </h1>
          <div className="flex items-center space-x-4 md:mb-4">
            <img src={pin} />
            <h2 className="text-2xl lg:text-[50px]">{weatherData.name}</h2>
          </div>
        </div>
      </div>
      <p className="text-sm lg:text-lg">06:09 - Sunday, 9 Dec ‘23</p>
    </div>
  );
};

export default WeatherHeadline;
