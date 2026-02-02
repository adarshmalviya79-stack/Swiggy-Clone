import { GroceryGridCard } from "../utils/groceries";

export default function GroceryOption() {
  return (
    <div className="mt-25 w-[80%] mx-auto">

      <h1 className="text-2xl font-bold mb-6">
        Shop groceries on Instamart
      </h1>

      <div className="flex flex-nowrap overflow-x-auto gap-5 scrollbar-hide">
        {GroceryGridCard.map((foodData) => (
          <div className="flex-none text-center" key={foodData.id}>
            <a href={foodData.link}>
              <img
                className="w-36 mx-auto"
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/" +
                  foodData.imageId
                }
                alt={foodData.title}
              />
            </a>
            <h2 className="mt-2 text-xl flex-wrap">{foodData.title}</h2>
          </div>
        ))}
      </div>

    </div>
  );
}
