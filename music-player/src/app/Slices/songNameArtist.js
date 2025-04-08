import { createSlice } from '@reduxjs/toolkit'

export const songNameAtristSlice = createSlice({
    name: "songNameAtristSlice", // can use any name
    initialState: {
        value: {
            songName: localStorage.getItem('songName'),
            artistName: localStorage.getItem('artistName')
        }
    },
    reducers: {
        setSongNameatristName: (state, actions) => {

            state.value = {
                songName: actions.payload.songName,
                artistName: actions.payload.atristName
            }

        }
    }
})

export const { setSongNameatristName } = songNameAtristSlice.actions

export default songNameAtristSlice.reducer