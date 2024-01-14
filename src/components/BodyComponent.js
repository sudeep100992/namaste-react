import RestaurantCard from "./RestaurantCard";
import mockRestaurantList from "../utils/mockData";
import { useState } from "react";




const BodyComponent = () => {

 const [restaurantList, setRestaurantList] = useState(mockRestaurantList);
 // destructuring the arr returned: as below
// const arr = useState(mockRestaurantList);
//   const restaurantList= arr[0];
//   const setRestaurantList = arr[1];


  return (
    <div className="body">
      
      <button
        className="top-rated-butn"
        //  call back function to be invoked
        onClick={() => {
          const filteredRestaurants = restaurantList.filter(
            (restaurant) => restaurant.data.avgRating >= 4.0
          );
          setRestaurantList(filteredRestaurants);
          //console.log("clicked");
        }}
      >
        Top Rated Restaurants
      </button>

      <div className="rest-card-holders">
        {restaurantList.map((restaurant, index) => {
          return <RestaurantCard key={index} resData={restaurant} />;
        })}

        {/* <RestaurantCard  resData={restaurantList[0]}  /> */}
      </div>
    </div>
  );
};

export default BodyComponent;
