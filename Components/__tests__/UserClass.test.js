import { render } from "@testing-library/react"
import UserClass from "../UserClass"
import MOCK_DATA from "../mocks/restaurantCardMocks.json"
import { act } from "react";

//mocking fetch because it is not available in jest-dom as it is a browser func
global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
});
describe("user class component test cases", ()=> {
    test("should load name heading", async () => {
        // wrap with act for any async operations or state updates
        await act(async() => render(<UserClass/>))
        
    })
})