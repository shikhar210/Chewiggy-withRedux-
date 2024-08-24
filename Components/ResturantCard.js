
export const ResturantCard = (props) => {
    const IMG_RES_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
    const { name, cuisines, avgRating, costForTwo, imgId } = props;
    const imgUrl = IMG_RES_URL + imgId;
    return(
        <div className="resturant-card">
            <img
            className="resturant-photo"
            src={imgUrl}/>
            <div className="resturant-card-text">
                <h5>{name}</h5>
                <h6>{cuisines.join(", ")}</h6>
                <h6>{avgRating}</h6>
                <h6>{costForTwo}</h6>
            </div>
        </div>
    )
}