import { useState } from "react";
import ItemList from "./ItemList";


const RestaurantMenuCategory = ({ data, showItems, setShowIndex }) => {
  // const [showItems, setShowItems] = useState(false);
  // console.log("data: ", data);
  const { title, itemCards } = data;
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4">
        <div className="flex justify-between" onClick={handleClick}>
          <span className="font-bold text-lg">
            {title} ({itemCards.length})
          </span>{" "}
          <span>⬇️</span>{" "}
        </div>
        
        <div>
          {showItems && <ItemList items={itemCards} />}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenuCategory;
