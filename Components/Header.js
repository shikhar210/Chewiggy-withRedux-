import { Link } from "react-router-dom";
import logo from "../Logo/logo.png"
import useOnlineStatus from "../Utils/useOnlineStatus";
import { useState } from "react";

export const Header = () => {
    const onlineStatus = useOnlineStatus();
    const [ loginBtnName, setLoginBtnName ] = useState("Log in");

    const handleLoginClick = () => {
        if(loginBtnName === "Log in") {
            setLoginBtnName("Log out");
        } else
            setLoginBtnName("Log in");
    }
    return(
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    alt="image"
                    src={logo}
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
                        <Link to="/cart">Cart</Link>
                    </li>
                    <li>
                        <button onClick={handleLoginClick}>{loginBtnName}</button>
                    </li>
                </ul>
            </div>
        </div>
    )
};