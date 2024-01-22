import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
     console.log("props : "+ props);
    const {resData} = props;
    // Optional Chaining , TRICKY
    const {name,cuisines,cloudinaryImageId,  costForTwoString,
      avgRating} = resData?.info;
  
    return (
      <div className="rest-card m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
        <img
          className="rest-card-logo rounded-lg"
          src= {CDN_URL +
          cloudinaryImageId}
        />
        <h2 className="font-bold py-4 text-lg" > {name}</h2>
        <h4> {cuisines.join(", ")}</h4>
        <h4> {costForTwoString}</h4>
        <h4> {avgRating} </h4>
  
      </div>
    );
  };

  export default RestaurantCard;