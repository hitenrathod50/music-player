import { createSlice } from '@reduxjs/toolkit'

export const sliderClickSlice = createSlice({
    name: "sliderClickSlice", // can use any name
    initialState: {
        value: 0
    },
    reducers: {
        setTumbValue: (state, actions) => {
            state.value = actions.payload.value
        }
    }
})

export const { setTumbValue } = sliderClickSlice.actions

export default sliderClickSlice.reducer