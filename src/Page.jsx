import { useContext, useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import WeatherBoard from "./Components/Weather/WeatherBoard";
import { WeatherContext } from "./context";
import { generateBackgroundImage } from "./utils/generateBackgroundImg";
import LoadingAvatar from "./assets/loading-avatar.svg";

const Page = () => {
  const { weatherData, loading } = useContext(WeatherContext);
  const [climateImage, setClimateImage] = useState("");

  useEffect(() => {
    const bgImage = generateBackgroundImage(weatherData.climate);
    setClimateImage(bgImage);
  }, [weatherData.climate]);
  return (
    <>
      {loading.state ? (
        <div className="min-h-screen flex justify-center items-center">
          <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
          <img src={LoadingAvatar} alt="" className="rounded-full h-28 w-28" />
        </div>
      ) : (
        <div
          style={{ backgroundImage: `url('${climateImage}')` }}
          className={`grid place-items-center h-screen bg-no-repeat bg-cover`}
        >
          <Header />
          <main>
            <section>
              <WeatherBoard />
            </section>
          </main>
        </div>
      )}
    </>
  );
};

export default Page;
