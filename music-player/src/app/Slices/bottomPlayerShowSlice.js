import { createSlice } from '@reduxjs/toolkit'

const songId = localStorage.getItem("songId")

let initialValue = false;

if (songId != null) initialValue = true

export const bottomPlayerSlice = createSlice({
    name: "bottomPlayerSlice", // can use any name
    initialState: {
        value: initialValue
    },
    reducers: {
        visibleBottomPlayer: (state, actions) => {
            state.value = true;
        }

    }
})

export const { visibleBottomPlayer } = bottomPlayerSlice.actions

export default bottomPlayerSlice.reducer