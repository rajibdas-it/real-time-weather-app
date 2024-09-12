/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import favImg from "../../assets/heart.svg";
import redHeart from "../../assets/heart-red.svg";
import { FavouriteContext, WeatherContext } from "../../context";
const AddToFavourite = () => {
  const { weatherData } = useContext(WeatherContext);
  const { location, latitude, longitude } = weatherData;
  // console.log(location, latitude, longitude);
  const { favs, addToFavs, removeFromFavs } = useContext(FavouriteContext);
  // console.log(favs);
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    const found = favs.find((fav) => fav.location === location);
    if (found) {
      setIsFav(found);
    }
  }, []);

  const handleFavs = () => {
    const found = favs.find((fav) => fav.location === location);
    if (!found) {
      addToFavs(latitude, longitude, location);
    } else {
      removeFromFavs(location);
    }
    setIsFav(!isFav);
  };

  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          onClick={handleFavs}
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
        >
          <span>Add To Favourite</span>
          <img src={isFav ? redHeart : favImg} alt="" />
        </button>
      </div>
    </div>
  );
};

export default AddToFavourite;
