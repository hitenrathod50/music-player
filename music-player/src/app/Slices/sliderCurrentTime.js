import { createSlice } from '@reduxjs/toolkit'

export const sliderCurrentTime = createSlice({
    name: "sliderCurrentTime",
    initialState: {
        value: 0
    },
    reducers: {
        setSliderTime: (state, actions) => {
            state.value = actions.payload.value
        }
    }
})

export const { setSliderTime } = sliderCurrentTime.actions

export default sliderCurrentTime.reducer