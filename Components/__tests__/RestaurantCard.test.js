import { render, screen } from "@testing-library/react"
import { RestaurantCard } from "../RestaurantCard"
import MOCK_DATA from "../mocks/restaurantCardMocks.json"
import "@testing-library/jest-dom";

describe("Restaurant card test cases", ()=> {
    test("restaurant card renders with prop data", ()=> {
        render(<RestaurantCard
            name ={MOCK_DATA.info.name}
            cuisines={MOCK_DATA.info.cuisines}
            avgRating={MOCK_DATA.info.avgRating}
            costForTwo={MOCK_DATA.info.costForTwo}
            imgId={MOCK_DATA.info.cloudinaryImageId}
        />);
        const name = screen.getByText(/Kwality Walls/);
        expect(name).toBeInTheDocument();
    })
})