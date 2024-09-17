import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ContactUs } from "../ContactUs";

describe("Contact Us Test Cases", ()=>{
    test("should load contact us component", ()=>{
        render(<ContactUs/>);
    
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    });
    test("should load button in contact us component", ()=>{
        render(<ContactUs/>);
    
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });
    test("should load input email in contact us component", ()=>{
        render(<ContactUs/>);
    
        const emailInput = screen.getByPlaceholderText("Email");
        expect(emailInput).toBeInTheDocument();
    });
    test("should load 2 input in contact us component", ()=>{
        render(<ContactUs/>);
    
        const input = screen.getAllByRole("textbox");
        expect(input).toHaveLength(2);
    });
});
