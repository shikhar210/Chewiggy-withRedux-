import React, { lazy, Suspense, useContext, useState } from "react";
import ReactDOM from "react-dom/client"
import { Header } from "./Components/Header";
import { Body } from "./Components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { AboutUs } from "./Components/AboutUs";
import { ContactUs } from "./Components/ContactUs";
import { Error } from "./Components/Error";
import { RestaurantMenu } from "./Components/RestaurantMenu";
import { Shimmer } from "./Components/Shimmer";
import CartContext from "./Utils/CartContext";

const Cart = lazy(()=> import("./Components/Cart"));

const AppLayout = () => {
    const cartListContext = useContext(CartContext);
    const [cartItems, setCartItems] = useState(cartListContext.listItem);
    return(
        <CartContext.Provider value ={{ listItem: cartItems, setCartItems}}>  
            <div className="App-container">
                <Header/>
                <Outlet/>
            </div>
        </CartContext.Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error/>,
        children:[
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <AboutUs/>
            },
            {
                path: "/contact",
                element: <ContactUs/>
            },
            {
                path: "/cart",
                element: (
                    <Suspense fallback={<Shimmer/>}>
                        <Cart/>
                    </Suspense>
                )
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu/>
            },
        ],
    },
]);

// const heading = React.createElement("h1", {id: "heading"}, "Hello World!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);