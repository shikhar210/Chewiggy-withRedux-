import { render, screen } from "@testing-library/react";
import { Body } from "../Body";
import "@testing-library/jest-dom";

describe("Test cases for search", ()=> {
    test("should render body component with search", ()=> {
        render(<Body/>);
        const searchInput = screen.getByPlaceholderText("Search");
        expect(searchInput).toBeInTheDocument();
    })
});