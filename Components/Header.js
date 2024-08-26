import { Link } from "react-router-dom";
import logo from "../Logo/logo.png"

export const Header = () => {
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
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
};