import { ResturantCard } from "./ResturantCard"

export const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <ResturantCard/>
            </div>
        </div>
    )
}