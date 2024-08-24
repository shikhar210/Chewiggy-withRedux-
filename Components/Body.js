import { useEffect, useState } from "react";
import { restaurantsDetails } from "../Utils/mockData";
import { ResturantCard } from "./ResturantCard"

export const Body = () => {
    const [listOfResturant, setListOfResturant] = useState(restaurantsDetails);
    const [filterFlag, setFilterFlag] = useState(false);
    const [searchText, setSearchText] = useState("");

    useEffect(()=>{
        filterOnSearch()
    },[searchText]);

    useEffect(()=>{
        filterOnRatingButton()
    },[filterFlag]);

    const handleSearch = (e) => {
        setSearchText(e.target.value);
        // filterOnSearch();
    }

    const filterOnSearch = () => {
        if(searchText==="") {
            setListOfResturant(restaurantsDetails);
        } else {
            const filteredList = restaurantsDetails.filter((res)=>res.info.name.includes(searchText));
            setListOfResturant(filteredList);
        }
    }

    const filterOnRatingButton = () => {
        if(!filterFlag) {
            setListOfResturant(restaurantsDetails);
        } else {
            const filteredList = restaurantsDetails.filter((res)=> res.info.avgRating>4);
            setListOfResturant(filteredList);
        }
    }

    const handleFilterRatingButton = () => {
        setFilterFlag(!filterFlag);
        // filterOnRatingButton();
    }

    return (
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
            {listOfResturant.map(({ info }) => {
                return <ResturantCard key={info.id} name ={info.name} cuisines={info.cuisines} avgRating={info.avgRating} costForTwo={info.costForTwo} imgId={info.cloudinaryImageId}/>
            })}
            </div>
        </div>
    )
}