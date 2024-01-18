import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { swiggy_api_menu_list_URL } from "../utils/constants";
import { useParams } from "react-router-dom";





const RestaurantMenu = ()=> {
    const [restMenuInfo, setRestMenuInfo]= useState(null);

    //const params = useParams();
    const params = useParams();  // destruction
    console.log(params);

    const {resId} = useParams();  // destruction
    

    useEffect( ()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async  () => {
       const data = await fetch(swiggy_api_menu_list_URL + resId);
        const json =  await data.json();

        console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards);
        // for shimmer effect - useState
        setRestMenuInfo(json.data);
    }
    
    
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