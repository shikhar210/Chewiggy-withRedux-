import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import { useDispatch, useSelector } from "react-redux";
import { setLoggedIn } from "../Redux/UserSlice";
import { logoURL } from "../Utils/mockData";

export const Header = () => {
    const onlineStatus = useOnlineStatus();

    const cartItems = useSelector((store)=> store.cart.items);
    const user = useSelector(store=> store.user.userName);
    const dispatch = useDispatch();

    const handleLoginClick = () => {
        dispatch(setLoggedIn(""))
    }
    return(
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    alt="image"
                    src={logoURL}
                />
            </div>
            <div className="app-name">
                <h1>Chewiggy</h1>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <span className={onlineStatus ? "online" : "offline"}></span>
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart {cartItems.length}</Link>
                    </li>
                    <li>
                        {user}
                    </li>
                    <li>
                        <button onClick={handleLoginClick}>Log Out</button>
                    </li>
                </ul>
            </div>
        </div>
    )
};