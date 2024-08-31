import { useContext, useEffect, useState } from "react";
import { RestaurantCard } from "./RestaurantCard"
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantList from "../Utils/useRestaurantList";
import useOnlineStatus from "../Utils/useOnlineStatus";
import CartContext from "../Utils/CartContext";

export const Body = () => {
    const onlineStatus = useOnlineStatus();
    const listOfRestaurant = useRestaurantList();
    const [filteredListOfRestaurant, setFilteredListOfRestaurant] = useState([]);
    const [filterFlag, setFilterFlag] = useState(false);
    const [searchText, setSearchText] = useState("");

    const { setCartItems } = useContext(CartContext);
    useEffect(()=>{
        setCartItems([]);
    },[]);

    useEffect(()=>{
        setFilteredListOfRestaurant(listOfRestaurant);
    },[listOfRestaurant]);

    useEffect(()=>{
        filterOnSearch()
    },[searchText]);

    useEffect(()=>{
        filterOnRatingButton()
    },[filterFlag]);

    const handleSearch = (e) => {
        setSearchText(e.target.value);
    }

    const filterOnSearch = () => {
        if(searchText==="") {
            setFilteredListOfRestaurant(listOfRestaurant);
        } else {
            const filteredList = listOfRestaurant.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setFilteredListOfRestaurant(filteredList);
        }
    }

    const filterOnRatingButton = () => {
        if(!filterFlag) {
            setFilteredListOfRestaurant(listOfRestaurant);
        } else {
            const filteredList = listOfRestaurant.filter((res)=> res.info.avgRating>4);
            setFilteredListOfRestaurant(filteredList);
        }
    }

    const handleFilterRatingButton = () => {
        setFilterFlag(!filterFlag);
    }

    if(!onlineStatus) {
        return(
            <div>
                <h1>You are offline</h1>
            </div>
        );
    }
    return (
        filteredListOfRestaurant.length===0 ? <Shimmer/> : 
        <div className="body">
            <div className="search">
                <input placeholder="Search" onChange={handleSearch}/>
            </div>
            <div className="filter">
                <button
                    onClick={handleFilterRatingButton}
                >{filterFlag ? 'Show all' : 'Filter rating above 4'}</button>
            </div>
            <div className="restaurant-container">
            {filteredListOfRestaurant.map(({ info }) => {
                return <Link key={info.id} to ={"/restaurants/"+info.id}>
                            <RestaurantCard
                                name ={info.name}
                                cuisines={info.cuisines}
                                avgRating={info.avgRating}
                                costForTwo={info.costForTwo}
                                imgId={info.cloudinaryImageId}
                            />
                        </Link>
            })}
            </div>
        </div>
    )
}