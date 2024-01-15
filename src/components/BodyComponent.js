import RestaurantCard from "./RestaurantCard";
import mockRestaurantList from "../utils/mockData";
import { useEffect, useState } from "react";
import { swiggy_api_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const BodyComponent = () => {
  // special local state variables created from useState Hook methods

  // save a copy of the api rest list and render only once after shimmer effect and do not change(cache it)
  const [restaurantList, setRestaurantList] = useState([]);
  // change only filter list state based on the input box text and search.
  const [ filteredRestaurantList, setFilteredRestaurantList ] = useState([]);
  const [searchText, setSearchText] = useState("");
  

  console.log("Body rendered");

  // destructuring the arr returned: as below
  // const arr = useState(mockRestaurantList);
  //   const restaurantList= arr[0];
  //   const setRestaurantList = arr[1];

  // after Body commponent is rendered use effect call back function is called , use debugger to see flow
  //   useEffect(() => {
  //     console.log("use effect called ");
  //   }, []);

  //   console.log("Body rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(swiggy_api_URL);
    const json = await data.json();
    console.log(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    console.log("received responese from swiggy api");
    const restaurantList =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    
    setRestaurantList(restaurantList);
    setFilteredRestaurantList(restaurantList);
  };

  // conditional rendering..
  if (restaurantList.length === 0) {
    return <Shimmer />;
  }

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            //Body render when each letter is typed in the search box
            // e-> event listener object from text box
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>

          <button
            onClick={() => {
              console.log(searchText);
              
              // filter the restaurant cards and update on the UI
              const filteredRest = restaurantList.filter((restaurant) => 
                 restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              console.log("filtered rest list ")
              console.log(filteredRest);
              setFilteredRestaurantList(filteredRest);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="top-rated-butn"
          //  call back function to be invoked
          onClick={() => {
            const filteredRestaurants = restaurantList.filter(
              (restaurant) => restaurant.info.avgRating >= 4.5
            );
            setFilteredRestaurantList(filteredRestaurants);
            //console.log("clicked");
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="rest-card-holders">
        {filteredRestaurantList.map((restaurant, index) => {
          return <RestaurantCard key={index} resData={restaurant} />;
        })}
      </div>
    </div>
  );
};

export default BodyComponent;
