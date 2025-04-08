import { createSlice } from '@reduxjs/toolkit'

export const currentSliderImage = createSlice({
    name: "currentSliderImage",
    initialState: {
        value: localStorage.getItem("Image")
    },
    reducers: {
        setSliderImage: (state, actions) => {
            state.value = actions.payload.value
        }

    }
})

export const { setSliderImage } = currentSliderImage.actions

export default currentSliderImage.reducer