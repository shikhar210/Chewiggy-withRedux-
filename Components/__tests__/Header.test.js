import { render, screen } from "@testing-library/react";
import { Header } from "../Header";
import { Provider } from "react-redux";
import appStore from "../../Redux/AppStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("header component test cases",()=>{
    test("Should load log out button in header component", ()=> {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header/>
                </Provider>
            </BrowserRouter>
        );
        const logoutButton = screen.getByRole("button");
        expect(logoutButton).toBeInTheDocument();
    });
    test("Should load cart in header component", ()=> {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header/>
                </Provider>
            </BrowserRouter>
        );
        const cartItems = screen.getByText(/Cart/);
        expect(cartItems).toBeInTheDocument();
    });
});