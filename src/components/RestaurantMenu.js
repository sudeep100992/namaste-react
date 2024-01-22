
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";





const RestaurantMenu = ()=> {

    //const params = useParams();
    const params = useParams();  // destruction
    console.log(params);

    const {resId} = useParams();  // destruction
    
    // Custome hook to fetch the data and manage the state. 
    // create in utils
    const restMenuInfo  = useRestaurantMenu(resId);


    if(restMenuInfo===null){
        return <Shimmer />;
    }
    console.log(restMenuInfo.cards[0]);
    const {name, cuisines, costForTwoMessage} = restMenuInfo?.cards[0]?.card?.card?.info;
    // only recommended menu items
    //data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards
    const {itemCards} = restMenuInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
    console.log(itemCards);

    return (
        <div className="menu">
            <h1> {name}</h1>
            <p>
                {cuisines.join(", ")} - {costForTwoMessage}
            </p>
            <h2> Menu </h2>
            <ul>
                {/* <li> {itemCards[0].card.info.name}</li> */}
                { itemCards.map(  (item) =>  {
                    return ( <li key={item.card.info.id}> {item.card.info.name} - {item.card.info.price/100}</li> )
                } )}
            </ul>
        </div>
    )
}

export default RestaurantMenu;