import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        loggedIn: false,
        userName: ""
    },
    reducers: {
        setLoggedIn: (state,action) => {
            const newState = {
                loggedIn: !state.loggedIn,
                userName: action.payload
            }
            return(newState);
        }
    }
});

export const { setLoggedIn } = userSlice.actions;

export default userSlice.reducer;