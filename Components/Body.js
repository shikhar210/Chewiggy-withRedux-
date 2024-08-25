import { useEffect, useState } from "react";
import { ResturantCard } from "./ResturantCard"
import { Shimmer } from "./Shimmer";

export const Body = () => {
    const [listOfResturant, setListOfResturant] = useState([]);
    const [filteredListOfResturant, setFilteredListOfResturant] = useState([]);
    const [filterFlag, setFilterFlag] = useState(false);
    const [searchText, setSearchText] = useState("");

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () => {
        const response = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await response.json();
        const data = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfResturant(data);
        setFilteredListOfResturant(data);
    }

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
            setFilteredListOfResturant(listOfResturant);
        } else {
            const filteredList = listOfResturant.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setFilteredListOfResturant(filteredList);
        }
    }

    const filterOnRatingButton = () => {
        if(!filterFlag) {
            setFilteredListOfResturant(listOfResturant);
        } else {
            const filteredList = listOfResturant.filter((res)=> res.info.avgRating>4);
            setFilteredListOfResturant(filteredList);
        }
    }

    const handleFilterRatingButton = () => {
        setFilterFlag(!filterFlag);
    }

    return (
        filteredListOfResturant.length===0 ? <Shimmer/> : 
        <div className="body">
            <div className="search">
                <input placeholder="Search" onChange={handleSearch}/>
            </div>
            <div className="filter">
                <button
                    onClick={handleFilterRatingButton}
                >{filterFlag ? 'Show all' : 'Filter rating above 4'}</button>
            </div>
            <div className="resturant-container">
            {filteredListOfResturant.map(({ info }) => {
                return <ResturantCard key={info.id} name ={info.name} cuisines={info.cuisines} avgRating={info.avgRating} costForTwo={info.costForTwo} imgId={info.cloudinaryImageId}/>
            })}
            </div>
        </div>
    )
}