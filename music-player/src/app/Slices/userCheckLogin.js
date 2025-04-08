import { createSlice } from '@reduxjs/toolkit'

export const checkUserLogin = createSlice({
    name: "checkUserLogin",
    initialState: {
        value: false
    },
    reducers: {
        setUserLoginTrue: (state, actions) => {
            state.value = true
        },
        setUserLoginFalse: (state, actions) => {
            state.value = false
        },
    }
})

export const { setUserLoginTrue, setUserLoginFalse } = checkUserLogin.actions

export default checkUserLogin.reducer