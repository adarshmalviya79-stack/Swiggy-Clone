import { useState } from "react";

export default function MenuCard({ menuItems, foodSelected }) {
  const [isOpen, setIsOpen] = useState(true);

  // CATEGORY TYPE
  if ("categories" in menuItems) {
    return (
      <div className="w-full">
        <p className="text-2xl font-bold ml-45 mt-5">
          {menuItems.title}
        </p>
        <div>
          {menuItems.categories.map((items) => (
            <MenuCard
              key={items.title}
              menuItems={items}
              foodSelected={foodSelected}
            />
          ))}
        </div>
      </div>
    );

  }

  if(foodSelected==='veg'){
    return (
    <div className="w-full flex justify-center">
      <div className="w-[60%]">
        {/* HEADER */}
        <div className="flex justify-between items-center w-full">
          <p className="font-extrabold text-lg mt-10 mb-5">
            {menuItems?.title}
          </p>

          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "˄" : "˅"}
          </button>
        </div>

        <div className="h-1 bg-gray-200 mb-4"></div>

        {/* ITEMS */}
        {isOpen &&
          menuItems?.itemCards
            ?.filter((food)=> "isVeg" in food?.card?.info).map((item) => (
              <div key={item.card.info.id}>
                <div className="w-full flex justify-between mb-10">
                  <div className="w-[70%]">
                    {/* NAME + VEG/NONVEG ICON */}
                    <p className="text-lg text-gray-700 font-bold mb-1 flex items-center gap-2">
                      {item.card.info.name}

                      {/* VEG ICON */}
                      {item.card.info.isVeg === 1 ? (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <rect
                            x="3"
                            y="3"
                            width="18"
                            height="18"
                            rx="2"
                            stroke="green"
                            strokeWidth="2"
                          />
                          <circle cx="12" cy="12" r="4" fill="green" />
                        </svg>
                      ) : (
                        /* NON-VEG ICON */
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <rect
                            x="3"
                            y="3"
                            width="18"
                            height="18"
                            rx="2"
                            stroke="red"
                            strokeWidth="2"
                          />
                          <polygon points="12,7 17,17 7,17" fill="red" />
                        </svg>
                      )}
                    </p>

                    <p className="text-lg mb-2">
                      ₹
                      {(item.card.info.defaultPrice ||
                        item.card.info.price) / 100}
                    </p>

                    <span className="text-green-700 text-sm">
                      {item.card.info.ratings?.aggregatedRating?.rating}
                      {" ("}
                      {item.card.info.ratings?.aggregatedRating?.ratingCountV2}
                      {")"}
                    </span>

                    <p className="line-clamp-2 mt-2">
                      {item.card.info.description}
                    </p>
                  </div>

                  <div className="w-[30%] relative">
                    <img
                      className="w-40 h-40 object-cover rounded-2xl ml-20 mt-2"
                      src={
                        "https://media-assets.swiggy.com/swiggy/image/upload/" +
                        item.card.info.imageId
                      }
                      alt=""
                    />
                    <button className="absolute bottom-0 left-25 shadow-md border border-white rounded-xl text-green-600 px-10 py-2 bg-white font-bold">
                      ADD
                    </button>
                    <p className="absolute mt-1 ml-30 text-xs font-bold text-gray-400">Customisable</p>
                  </div>
                </div>

                <hr className="mb-10 mt-10" />
              </div>
            ))}
      </div>
    </div>
  );
  }

  if(foodSelected==='nonveg'){
          return (
    <div className="w-full flex justify-center">
      <div className="w-[60%]">
        {/* HEADER */}
        <div className="flex justify-between items-center w-full">
          <p className="font-extrabold text-lg mt-10 mb-5">
            {menuItems?.title}
          </p>

          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "˄" : "˅"}
          </button>
        </div>

        <div className="h-1 bg-gray-200 mb-4"></div>

        {/* ITEMS */}
        {isOpen &&
          menuItems?.itemCards
            ?.filter((food)=> !("isVeg" in food?.card?.info)).map((item) => (
              <div key={item.card.info.id}>
                <div className="w-full flex justify-between mb-10">
                  <div className="w-[70%]">
                    {/* NAME + VEG/NONVEG ICON */}
                    <p className="text-lg text-gray-700 font-bold mb-1 flex items-center gap-2">
                      {item.card.info.name}

                      {/* VEG ICON */}
                      {item.card.info.isVeg === 1 ? (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <rect
                            x="3"
                            y="3"
                            width="18"
                            height="18"
                            rx="2"
                            stroke="green"
                            strokeWidth="2"
                          />
                          <circle cx="12" cy="12" r="4" fill="green" />
                        </svg>
                      ) : (
                        /* NON-VEG ICON */
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <rect
                            x="3"
                            y="3"
                            width="18"
                            height="18"
                            rx="2"
                            stroke="red"
                            strokeWidth="2"
                          />
                          <polygon points="12,7 17,17 7,17" fill="red" />
                        </svg>
                      )}
                    </p>

                    <p className="text-lg mb-2">
                      ₹
                      {(item.card.info.defaultPrice ||
                        item.card.info.price) / 100}
                    </p>

                    <span className="text-green-700 text-sm">
                      {item.card.info.ratings?.aggregatedRating?.rating}
                      {" ("}
                      {item.card.info.ratings?.aggregatedRating?.ratingCountV2}
                      {")"}
                    </span>

                    <p className="line-clamp-2 mt-2">
                      {item.card.info.description}
                    </p>
                  </div>

                  <div className="w-[30%] relative">
                    <img
                      className="w-40 h-40 object-cover rounded-2xl ml-20 mt-2"
                      src={
                        "https://media-assets.swiggy.com/swiggy/image/upload/" +
                        item.card.info.imageId
                      }
                      alt=""
                    />
                    <button className="absolute bottom-0 left-25 shadow-md border border-white rounded-xl text-green-600 px-10 py-2 bg-white font-bold">
                      ADD
                    </button>
                    <p className="absolute mt-1 ml-30 text-xs font-bold text-gray-400">Customisable</p>
                  </div>
                </div>

                <hr className="mb-10 mt-10" />
              </div>
            ))}
      </div>
    </div>
  );
  }

  // ITEM TYPE
  return (
    <div className="w-full flex justify-center">
      <div className="w-[60%]">
        {/* HEADER */}
        <div className="flex justify-between items-center w-full">
          <p className="font-extrabold text-lg mt-10 mb-5">
            {menuItems?.title}
          </p>

          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "˄" : "˅"}
          </button>
        </div>

        <div className="h-1 bg-gray-200 mb-4"></div>

        {/* ITEMS */}
        {isOpen &&
          menuItems?.itemCards
            ?.map((item) => (
              <div key={item.card.info.id}>
                <div className="w-full flex justify-between mb-10">
                  <div className="w-[70%]">
                    {/* NAME + VEG/NONVEG ICON */}
                    <p className="text-l text-gray-700 font-extrabold mb-1 flex items-center gap-2">
                      {item.card.info.name}

                      {/* VEG ICON */}
                      {item.card.info.isVeg === 1 ? (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <rect
                            x="3"
                            y="3"
                            width="18"
                            height="18"
                            rx="2"
                            stroke="green"
                            strokeWidth="2"
                          />
                          <circle cx="12" cy="12" r="4" fill="green" />
                        </svg>
                      ) : (
                        /* NON-VEG ICON */
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <rect
                            x="3"
                            y="3"
                            width="18"
                            height="18"
                            rx="2"
                            stroke="red"
                            strokeWidth="2"
                          />
                          <polygon points="12,7 17,17 7,17" fill="red" />
                        </svg>
                      )}
                    </p>

                    <p className="text-l mb-1">
                      ₹
                      {(item.card.info.defaultPrice ||
                        item.card.info.price) / 100}
                    </p>

                    <span className="text-green-700 text-xs font-bold">
                      {item.card.info.ratings?.aggregatedRating?.rating}
                      {" ("}
                      {item.card.info.ratings?.aggregatedRating?.ratingCountV2}
                      {")"}
                    </span>

                    <p className="line-clamp-2 mt-2 font-semibold text-gray-600">
                      {item.card.info.description}
                    </p>
                  </div>

                  <div className="w-[30%] relative">
                    <img
                      className="w-40 h-40 object-cover rounded-2xl ml-20 mt-2"
                      src={
                        "https://media-assets.swiggy.com/swiggy/image/upload/" +
                        item.card.info.imageId
                      }
                      alt=""
                    />
                    <div>
                    <button className="absolute bottom-0 left-25 shadow-md border border-white rounded-xl text-green-600 px-10 py-2 bg-white font-bold">
                      ADD
                    </button>
                    <p className="absolute mt-1 ml-30 text-xs font-bold text-gray-400">Customisable</p>
                    </div>
                    
                  </div>
                </div>

                <hr className="mb-10 mt-10" />
              </div>
            ))}
      </div>
    </div>
  );
}
