import { useEffect } from "react";
import { useState } from "react";
import Shimmer from "./Shimmer";
import RestaurantMenu from "./RestaurantMenu";
import { Link } from "react-router-dom";

export default function Restaurant() {
  const [RestData, setRestData] = useState([]);

  useEffect(() => {
    async function FetchData() {
      const Proxy = "https://cors-anywhere.herokuapp.com/";
      const swiggyAPI =
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2505&lng=77.4065&is-seo-homepage-enabled=true";
      const response = await fetch(Proxy + swiggyAPI);
      const data = await response.json();
      setRestData(
        data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
      );
    }
    FetchData();
  }, []);

  if (RestData.length == 0) {
    return <Shimmer></Shimmer>;
  }

  return (
    <div className="mt-20 mx-auto w-[80%]">
      <div className="grid grid-cols-4 gap-6">
        {RestData.map((restInfo) => (
          <div key={restInfo.info.id}>
          <Link to={"/city/bhopal/" + restInfo.info.id}>
            <div className="w-full transform transition duration-200 hover:scale-95">
              <img
                className="w-full h-[180px] object-cover rounded-lg"
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/" +
                  restInfo.info.cloudinaryImageId
                }
                alt={restInfo.info.name}
              />
              <div className="mt-3">
                <h3 className="text-lg font-bold truncate">
                  {restInfo.info.name}
                </h3>

                <div className="flex items-center gap-2 mt-1">
                  <div className="flex items-center justify-center bg-green-600 rounded-full w-4 h-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-3 h-3"
                      fill="white"
                    >
                      <path d="M12 2l2.9 6.1 6.7.6-5 4.4 1.5 6.6L12 16.8 5.9 19.7l1.5-6.6-5-4.4 6.7-.6L12 2z" />
                    </svg>
                  </div>

                  <span className="text-sm">{restInfo.info.avgRating} •</span>

                  <span className="text-sm font-semibold">
                    {restInfo.info.sla.slaString}
                  </span>
                </div>

                <p className="text-sm text-gray-600 truncate mt-1">
                  {restInfo.info.cuisines.join(", ")}
                </p>
                <p className="text-sm text-gray-600 truncate mt-1">
                  {restInfo.info.areaName}
                </p>
              </div>
            </div>
          </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
