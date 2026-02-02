import { dineoutRestaurants } from "../utils/DineData";

export default function DineOption() {
  return (
    <div className="w-[80%] mx-auto mt-10 mb-20">
      <p className="text-2xl font-bold mb-4">
        Discover best restaurants on Dineout
      </p>

      <div className="flex gap-6 overflow-x-auto scrollbar-hide">
        {dineoutRestaurants.map((RestData) => (
          <div
            key={RestData.id}
            className="w-[320px] flex-none bg-white rounded-2xl shadow-md overflow-hidden"
          >
            {/* IMAGE */}
            <div className="relative">
              <img
                className="w-full h-[200px] object-cover"
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/" +
                  RestData.image
                }
                alt={RestData.name}
              />

              {/* NAME */}
              <p className="absolute bottom-3 left-3 text-white font-bold text-lg z-30 ">
                {RestData.name}
              </p>

              {/* RATING */}
              <div className="absolute z-30 bottom-4 right-2 flex items-center gap-1">
                <div className="w-4 h-4 rounded-full bg-green-600 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-2.5 h-2.5 fill-white"
                  >
                    <path d="M12 2l2.9 6.1 6.7.6-5 4.4 1.5 6.6L12 16.8 5.9 19.7l1.5-6.6-5-4.4 6.7-.6L12 2z" />
                  </svg>
                </div>

                <span className=" text-white text-base font-bold">
                  {RestData?.rating}
                </span>
              </div>

              {/* GRADIENT */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
            </div>

            {/* DETAILS */}
            <div className="p-4 space-y-1">
              <div className="flex justify-between text-sm text-gray-600 font-semibold">
                <span>{RestData.cuisines}</span>
                <span>{RestData.costForTwo}</span>
              </div>

              <div className="space-y-1">
                <div className="flex text-sm text-gray-600 justify-between font-semibold">
                  <span>{RestData.address}</span>
                  <span>{RestData.distance}</span>
                </div>
              </div>

              {/* TABLE BOOKING */}
              
              <div className="flex items-center gap-1 text-sm text-gray-600 mt-2 font-semibold ">
                <img
                  className="w-4 h-4"
                  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/highlights/book.png"
                  alt="book"
                />
                <span>Table booking</span>
              </div>
              

              {/* OFFERS */}
              <div className="mt-3 space-y-2 font-extrabold">
                <div className="bg-[#1BA672] text-white text-sm px-3 py-2 rounded-lg font-medium">
                  {RestData.offer} on pre-booking
                </div>

                <div className="bg-[#C8F9E5] text-[#065F46] text-sm px-3 py-2 rounded-lg font-medium">
                  Up to 10% off with bank offers
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
