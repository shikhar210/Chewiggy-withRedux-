import React from "react";
import ReactDOM from "react-dom/client"
import { Header } from "./Components/Header";
import { Body } from "./Components/Body";

const AppLayout = () => {
    return(
        <div className="App-container">
            <Header/>
            <Body/>
        </div>
    );
};
// const heading = React.createElement("h1", {id: "heading"}, "Hello World!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);