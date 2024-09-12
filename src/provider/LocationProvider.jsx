/* eslint-disable react/prop-types */

import { useState } from "react";
import { LocationContext } from "../context";

const LocationProvider = ({ children }) => {
  const [searchLocation, setSearchLocation] = useState({
    location: "",
    longitude: 0,
    latitude: 0,
  });
  return (
    <LocationContext.Provider value={{ searchLocation, setSearchLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

export default LocationProvider;
