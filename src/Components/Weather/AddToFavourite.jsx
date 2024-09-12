import { useContext, useState } from "react";
import favImg from "../../assets/heart.svg";
import redHeart from "../../assets/heart-red.svg";
import { FavouriteContext, WeatherContext } from "../../context";
const AddToFavourite = () => {
  const { weatherData } = useContext(WeatherContext);
  const { location, latitude, longitude } = weatherData;
  console.log(location, latitude, longitude);
  const { favs, addToFavs, removeFromFavs } = useContext(FavouriteContext);
  const [isFav, setIsFav] = useState(false);

  const handleFavs = () => {
    setIsFav(!isFav);
    // if (isFav) {
    //   addToFavs(location, latitude, longitude);
    // } else {
    //   removeFromFavs(location);
    // }
  };

  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          onClick={handleFavs}
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
        >
          <span>{isFav ? "Add To Favourite" : "Remove From Favourite"}</span>
          <img src={isFav ? favImg : redHeart} alt="" />
        </button>
      </div>
    </div>
  );
};

export default AddToFavourite;
