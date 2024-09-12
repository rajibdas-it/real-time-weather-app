import FavouriteProvider from "./provider/favouriteProvider";
import LocationProvider from "./provider/LocationProvider";
import WeatherProvider from "./provider/WeatherProvider";
import WeatherAppPage from "./WeatherAppPage";

const App = () => {
  return (
    <LocationProvider>
      <WeatherProvider>
        <FavouriteProvider>
          <WeatherAppPage />
        </FavouriteProvider>
      </WeatherProvider>
    </LocationProvider>
  );
};

export default App;
