import { useSelector } from "react-redux";
import Login from "./Components/Login";
import { Header } from "./Components/Header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
    const isLoggedIn = useSelector(store=>store.user.loggedIn);
    return(
        <div className="App-container">
            {isLoggedIn ? <><Header/>
            <Outlet/></>: <Login/>}
        </div>
    );
}

export default AppLayout;