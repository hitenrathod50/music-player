import { createSlice } from '@reduxjs/toolkit'

export const sliderMaxValue = createSlice({
    name: "sliderMaxValue", // can use any name
    initialState: {
        value: 0
    },
    reducers: {
        setSliderMaxValue: (state, actions) => {
            state.value = actions.payload.value
        }
    }
})

export const { setSliderMaxValue } = sliderMaxValue.actions

export default sliderMaxValue.reducer