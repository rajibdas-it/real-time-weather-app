import { useContext, useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import WeatherBoard from "./Components/Weather/WeatherBoard";
import { WeatherContext } from "./context";
import { generateBackgroundImage } from "./utils/generateBackgroundImg";

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
        <p className="text-xl text-red-400 text-center">{loading.message}</p>
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
