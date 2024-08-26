import { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import { useParams } from "react-router-dom";

export const RestaurantMenu = () => {

    const [restaurantMenuData, setRestaurantMenuData] = useState([]);
    const [menuData, setMenuData] = useState([]);
    const {resId} = useParams();

    useEffect(()=>{
        fetchMenuData();
    },[]);

    const fetchMenuData = async () => {
        let response, json;
        try{
            response = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.61610&lng=73.72860&restaurantId=" + resId);
        }
        catch(error) {
            json = null;
        }
        if(response){
            
        json = await response.json();
        console.log(json.data.cards[2]?.card?.card?.info);
        setRestaurantMenuData(json?.data);
        setMenuData(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
        }
    };

    // const { name, cloudinaryImageId, cuisines, costForTwoMessage } = restaurantMenuData?.cards[2]?.card?.card?.info;

    return(
        restaurantMenuData.length===0 ? <Shimmer/> : (
            <div className="restaurant-menu-container">
            <h1>{restaurantMenuData?.cards[2]?.card?.card?.info?.name}</h1>
            <h3>{restaurantMenuData?.cards[2]?.card?.card?.info?.cuisines.join(", ")}</h3>
            <h3>{restaurantMenuData?.cards[2]?.card?.card?.info?.costForTwoMessage}</h3>
            <h2>Menu</h2>
            <ul>
                {menuData.map((menu)=>{
                    return(
                        <li key={menu.card.info.id}>{menu.card.info.name}</li>
                    )
                })}
            </ul>
        </div>
        )
    );
}