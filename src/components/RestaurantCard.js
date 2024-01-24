import { CDN_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  console.log("props : " + props);
  const { resData } = props;

  const { loggedInUser } = useContext(UserContext);

  // Optional Chaining , TRICKY
  const { name, cuisines, cloudinaryImageId, costForTwoString, avgRating } =
    resData?.info;

  return (
    <div className="rest-card m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="rest-card-logo rounded-lg"
        src={CDN_URL + cloudinaryImageId}
      />
      <h2 className="font-bold py-4 text-lg"> {name}</h2>
      <h4> {cuisines.join(", ")}</h4>
      <h4> {costForTwoString}</h4>
      <h4> {avgRating} </h4>
      <h4>User : {loggedInUser} </h4>
    </div>
  );
};

//Higher Order Component - accept component and return the component (piece of JSX component check syntax)
//with promoted label

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} /> 
         {/* // args to pass */}
      </div>
    );
  };
};

export default RestaurantCard;
