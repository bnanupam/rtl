import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
    accounts: [{
        id: 1,
        userName:"admin",
        password: "nimda"
    }]
}

export const loginSlice = createSlice({
    name: 'userlogin',
    initialState,
    reducers: {
        userLogin: (state, action) => {
            const account = {
                id: nanoid(),
                password: action.payload
            }
            state.accounts.push(account)
        },
        logOut: (state, action)=> {
            console.log(state.accounts)
        }

    }
})
export const {userLogin} = loginSlice.actions