import { configureStore } from '@reduxjs/toolkit'
import bottomPlayerSlice from './Slices/bottomPlayerShowSlice'
import videoIdSlice from './Slices/videoIdSlice'
import playingMusic from './Slices/playingMusicSlice'
import sliderClickSlice from './Slices/sliderClickSlice'
import sliderMaxValue from './Slices/sliderMaxValue'
import sliderCurrentTime from './Slices/sliderCurrentTime'
import currentSliderImage from './Slices/currentSliderImage'
import setSongNameatristNameSlice from './Slices/songNameArtist'
import searchTextSlice from './Slices/searchSlice'
import userCheckLogin from './Slices/userCheckLogin'

export default configureStore({
    reducer: {
        bottomPlayerSlice: bottomPlayerSlice,
        videoIdSlice: videoIdSlice,
        playingMusic: playingMusic,
        sliderClickSlice: sliderClickSlice,
        sliderMaxValue: sliderMaxValue,
        setSliderTime: sliderCurrentTime,
        currentSliderImage: currentSliderImage,
        setSongNameatristName: setSongNameatristNameSlice,
        searchSlice: searchTextSlice,
        checkLogin: userCheckLogin
    }
})