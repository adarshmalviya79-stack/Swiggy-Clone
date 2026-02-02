import { imageGridCards } from "../utils/foodData";

export default function FoodOption() {
  return (
    <div className="w-[80%] mx-auto mt-30">

      {/* Heading */}
      <h1 className="text-2xl font-bold mb-6">
        Order our best food options
      </h1>

      {/* Images */}
      <div className="flex flex-nowrap gap-5 overflow-x-auto scrollbar-hide ">
        <div className="grid grid-rows-2 grid-flow-col auto-cols-max gap-x-6 gap-y-8">
        {imageGridCards.map((foodData) => (
          <div className="flex-none text-center" key={foodData.id}>
            <a href={foodData.link}>
              <img
                className=" w-36"
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/" +
                  foodData.image
                }
          
                alt={foodData.name}
              />
            </a>
          </div>
          
        ))}
        </div>
      </div>

    </div>
  );
}
