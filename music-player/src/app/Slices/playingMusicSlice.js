import { createSlice } from '@reduxjs/toolkit'

export const playingMusicSlice = createSlice({
    name: "playingMusicSlice",
    initialState: {
        value: false
    },
    reducers: {
        togglePlay: (state) => {
            state.value = true
        },
        togglePause: (state) => {
            state.value = false
        }

    }
})

export const { togglePlay, togglePause } = playingMusicSlice.actions

export default playingMusicSlice.reducer