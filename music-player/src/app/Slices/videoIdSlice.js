import { createSlice } from '@reduxjs/toolkit'

export const videoIdSlice = createSlice({
    name: "videoIdSlice", // can use any name
    initialState: {
        value: localStorage.getItem("songId")
    },
    reducers: {
        setVideoIdTo: (state, actions) => {
            localStorage.setItem("songId", actions.payload.videoId)
            state.value = actions.payload.videoId;
        }

    }
})

export const { setVideoIdTo } = videoIdSlice.actions

export default videoIdSlice.reducer