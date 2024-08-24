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
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
};