import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  console.log(resId);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const url = MENU_URL + resId;
    const response = await fetch(url);
    const data = await response.json();
    setResInfo(data.data);
  };

  if (resInfo === null) {
    return <Shimmer />;
  } else {
    const { name, cuisines, costForTwoMessage } =
      resInfo?.cards[0]?.card?.card?.info;
    const items =
      resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card
        ?.card?.itemCards;
    console.log(items[0]?.card?.info);
    return (
      <div className="menu">
        <h1>{name}</h1>
        <h3>
          {cuisines.join(", ")} - {costForTwoMessage}
        </h3>
        <h2>Menu</h2>
        <ul>
          {items.map((item) => {
            const { name, price, id } = item?.card?.info;
            return (
              <li key={id}>
                {name} - Rs. {price / 100}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
};

export default RestaurantMenu;
