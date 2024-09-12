/* eslint-disable react/prop-types */
import { FavouriteContext } from "../context";
import useLocalStorage from "../hooks/useLocalStorage";

const FavouriteProvider = ({ children }) => {
  console.log(useLocalStorage("favs", []));
  const [favs, setFavs] = useLocalStorage("favs", []);

  const addToFavs = (latitude, longitude, location) => {
    setFavs(...favs, {
      latitude,
      longitude,
      location,
    });
  };

  const removeFromFavs = (location) => {
    const restFavs = favs.filter((fav) => fav.location !== location);
    setFavs(restFavs);
  };
  return (
    <FavouriteContext.Provider value={{ favs, addToFavs, removeFromFavs }}>
      {children}
    </FavouriteContext.Provider>
  );
};

export default FavouriteProvider;
