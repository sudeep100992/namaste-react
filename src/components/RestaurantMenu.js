
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";





const RestaurantMenu = ()=> {

    //const params = useParams();
    const params = useParams();  // destruction
    //console.log(params);

    const dummy = "Dummy Data";

    const {resId} = useParams();  // destruction
    
    // Custome hook to fetch the data and manage the state. 
    // create in utils
    const restMenuInfo  = useRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState(null);

    if(restMenuInfo===null){
        return <Shimmer />;
    }
    console.log(restMenuInfo.cards[0]);
    const {name, cuisines, costForTwoMessage} = restMenuInfo?.cards[0]?.card?.card?.info;
    // only recommended menu items
    //data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards
    const {itemCards} = restMenuInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
   // console.log(itemCards);


    
    const categories =
    restMenuInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  //console.log(categories);

    return (
        <div className="text-center">
        <h1 className="font-bold my-6 text-2xl">{name}</h1>
        <p className="font-bold text-lg">
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
        {/* categories accordions */}
        {categories.map((category, index) => (
          // controlled component
          <RestaurantCategory
            key={category?.card?.card.title}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
            dummy={dummy}
          />
        ))}
      </div>
    )
}

export default RestaurantMenu;