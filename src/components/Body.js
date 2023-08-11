import { useContext, useEffect, useState } from "react";
import RestaurantCard, { WithPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { RESTAURANT_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const Body = () => {
  // State Variable - Super Powerful Variables
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = WithPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchdata();
  }, []);
  const fetchdata = async () => {
    const data = await fetch(RESTAURANT_URL);
    const response = await data.json();
    const cards = response?.data?.cards;
    let resturants = cards.filter(
      (card) => card?.card?.card?.id === "restaurant_grid_listing"
    );
    // console.log(resturants);
    resturants =
      resturants[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    // let resturants =
    //   response?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
    //     ?.restaurants;
    resturants = resturants ? resturants : [];
    // console.log(resturants[0]);
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
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <div>
        <h1> Looks like you are offline. Please check your Internet. </h1>
      </div>
    );
  }

  const { loggedInUser, setUserName } = useContext(UserContext);

  return listOfRestaurants.length === 0 ? (
    <div className="body">
      <div className="filter">
        <button className="filter-btn">Top rated restaurants</button>
      </div>
      <Shimmer />
    </div>
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="search-box border border-solid border-black rounded-md"
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
              filterData(event.target.value);
            }}
          />
          <button
            className="search-btn px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              filterData(searchText);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          {/* <button
            className="filter-btn px-4 py-2 bg-gray-100 m-4 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter((res) => {
                return res.info.avgRating > 4;
              });
              setFilteredRestaurants(filteredList);
            }}
          >
            Top rated restaurants
          </button> */}
          <label className="">User Name: </label>
          <input className="border border-black" value={loggedInUser} onChange={(e) => setUserName(e.target.value)}></input>
        </div>
      </div>
      <div className="res-container flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <Link
            to={"restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {
              /** if the restaurant is promoted then add a promoted label to it */

              restaurant.info.promoted === undefined ? (
                <RestaurantCardPromoted
                  key={restaurant.info.id}
                  resData={restaurant}
                />
              ) : (
                <RestaurantCard key={restaurant.info.id} resData={restaurant} />
              )
            }
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
