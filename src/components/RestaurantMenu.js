import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantMenuCategory from "./RestaurantMenuCategory";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);
  const [showindex, setShowIndex] = useState(null);
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;
  // console.log("resInfo: ", resInfo);
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;
  const items =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card
      ?.card?.itemCards;
  // console.log(items[0]?.card?.info);
  const categoris =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categoris);

  return (
    <div className="menu text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <h3 className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </h3>
      {/* {console.log(categoris[0]?.card?.card)} */}
      {categoris.map((category, index) => (
        // Controlled Component
        <RestaurantMenuCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showindex && true}
          setShowIndex={() => showindex === index ? setShowIndex(null) : setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
