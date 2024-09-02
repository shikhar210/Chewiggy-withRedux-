import { Shimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenuData from "../Utils/useRestaurantMenuData";
import { useDispatch } from "react-redux";
import { addItem } from "../Redux/CartSlice";

export const RestaurantMenu = () => {
    const {resId} = useParams();
    const [restaurantMenuData, menuData] = useRestaurantMenuData(resId);

    const dispatch = useDispatch();

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
                        <li key={menu.card.info.id}>{menu.card.info.name} <button onClick={()=> { dispatch(addItem(menu.card.info.name))}}>Add</button></li>
                    )
                })}
            </ul>
        </div>
        )
    );
}