import { useState,useEffect } from "react";
import { swiggy_api_menu_list_URL } from "./constants";


const useRestaurantMenu =(resId) => {
    const [restMenuInfo, setRestMenuInfo]= useState(null);
    // fetch data 

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

    return restMenuInfo;
}

export default useRestaurantMenu;