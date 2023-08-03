import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  // State Variable - Super Powerful Variables
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchdata();
  }, []);
  const fetchdata = async () => {
    const url =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5753931&lng=88.47979029999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
    const data = await fetch(url);
    const response = await data.json();
    let resturants =
      response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    resturants = resturants ? resturants : [];
    console.log(resturants[0]);
    setListOfRestaurants(resturants);
    setFilteredRestaurants(resturants);
  };

  const filterData = (searchText) => {
    if (searchText !== "") {
      const filteredRestaurantsData = listOfRestaurants.filter((res) => {
        return res.info.name.toLowerCase().includes(searchText.toLowerCase());
      });
      setFilteredRestaurants(filteredRestaurantsData);
    } else {
      setFilteredRestaurants(listOfRestaurants);
    }
  };

  return listOfRestaurants.length === 0 ? (
    <div className="body">
      <div className="filter">
        <button className="filter-btn">Top rated restaurants</button>
      </div>
      <Shimmer />
    </div>
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
              filterData(event.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              filterData(searchText);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter((res) => {
              return res.info.avgRating > 4;
            });
            setFilteredRestaurants(filteredList);
          }}
        >
          Top rated restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
