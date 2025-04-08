import { createSlice } from '@reduxjs/toolkit'

export const searchSlice = createSlice({
    name: "searchSlice",
    initialState: {
        value: ""
    },
    reducers: {
        setSearchText: (state, actions) => {
            state.value = actions.payload.value
        },
    }
})

export const { setSearchText } = searchSlice.actions

export default searchSlice.reducer