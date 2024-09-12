import { useContext, useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import WeatherBoard from "./Components/Weather/WeatherBoard";
import { WeatherContext } from "./context";
import { generateBackgroundImage } from "./utils/generateBackgroundImg";
import Loading from "./Components/Loading";

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
        <Loading />
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
