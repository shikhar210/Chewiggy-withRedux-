import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client"
import { Header } from "./Components/Header";
import { Body } from "./Components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { AboutUs } from "./Components/AboutUs";
import { ContactUs } from "./Components/ContactUs";
import { Error } from "./Components/Error";
import { RestaurantMenu } from "./Components/RestaurantMenu";
import { Shimmer } from "./Components/Shimmer";
import { Provider } from "react-redux";
import appStore from "./Redux/AppStore";
import AppLayout from "./AppLayout";

const Cart = lazy(()=> import("./Components/Cart"));

const App = () => {
    return(
        <Provider store={appStore}>
            <AppLayout/>
        </Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
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