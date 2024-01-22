import { useEffect, useState } from "react";


const useOnlineStatus = () => {

    // logic to fetch the internet status and set the state of online status
    

    const [onlineStatus,setOnlineStatus] = useState(true);
    // add event listeners once into useEffect which needs to added only once since [] , here we have window.addEventListener 

    useEffect(()=>{
        
        window.addEventListener("online", ()=>{
            setOnlineStatus(true);
        })
        window.addEventListener("offline",()=> {
            setOnlineStatus(false);
        })
    },[]);

    return onlineStatus;
}

export default useOnlineStatus;