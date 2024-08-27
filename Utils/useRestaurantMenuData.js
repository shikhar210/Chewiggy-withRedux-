import { useEffect, useState } from "react";


const useRestaurantMenuData = (restaurantId) => {
    const [restaurantMenuData, setRestaurantMenuData] = useState([]);
    const [menuData, setMenuData] = useState([]);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () => {
        let response;
        try{
            response = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?"
            +"page-type=REGULAR_MENU&complete-menu=true&lat=18.61610&lng=73.72860&restaurantId=" + restaurantId);
        }
        catch(error){
            response = null;
        }
        if(response) {
            const json = await response.json();
            setRestaurantMenuData(json?.data);
            setMenuData(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
        }
    }

    return [restaurantMenuData, menuData];
};

export default useRestaurantMenuData;