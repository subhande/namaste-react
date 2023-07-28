import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
  // State Variable - Super Powerful Variables

  // Normal JS Variable
  let defaultListOfRestaurants = [
    {
      info: {
        id: "439189",
        name: "Kanak Durga ",
        cloudinaryImageId: "dnrzjcqjnhlshb4gzbzd",
        locality: "Ghoradhara",
        areaName: "Jhargram Locality",
        costForTwo: "₹200 for two",
        cuisines: ["Biryani", "Chinese", "Snacks"],
        avgRating: 3.9,
        deliveryTime: 22,
      },
    },
    {
      info: {
        id: "521506",
        name: "Kolkata Ashirwad Biryani",
        cloudinaryImageId: "bn4ynfwb9jlwijhvytho",
        locality: "Raghunatpur College More",
        areaName: "Jhargram Locality",
        costForTwo: "₹150 for two",
        cuisines: ["Biryani", "North Indian"],
        avgRating: 4.5,
        deliveryTime: 22,
      },
    },
  ];
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter((res) => {
              return res.info.avgRating > 4;
            });
            setListOfRestaurants(filteredList);
          }}
        >
          Top rated restaurants
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            setListOfRestaurants(resList);
          }}
        >
          Show All
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
