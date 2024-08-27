import { useEffect, useState } from "react"

const useRestaurantList = () => {
    const [restaurantList, setRestaurantList] = useState([]);
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () => {
        let response;
        try {
            response = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants"+
                "/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        } catch (error) {
            response=null;
        }
        if(response){
            const json = await response.json();
            setRestaurantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }
    }
    return restaurantList;
}

export default useRestaurantList;