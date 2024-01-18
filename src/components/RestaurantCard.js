import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
     console.log("props : "+ props);
    const {resData} = props;
    // Optional Chaining , TRICKY
    const {name,cuisines,cloudinaryImageId,  costForTwoString,
      avgRating} = resData?.info;
  
    return (
      <div className="rest-card">
        <img
          className="rest-card-logo"
          src= {CDN_URL +
          cloudinaryImageId}
        />
        <h2> {name}</h2>
        <h4> {cuisines.join(", ")}</h4>
        <h4> {costForTwoString}</h4>
        <h4> {avgRating} </h4>
  
      </div>
    );
  };

  export default RestaurantCard;