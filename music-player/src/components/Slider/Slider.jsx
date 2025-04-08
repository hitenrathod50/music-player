import React from 'react'
import './slider.css'
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import { setTumbValue } from '../../app/Slices/sliderClickSlice'
import { setSliderTime } from '../../app/Slices/sliderCurrentTime';
import { togglePause, togglePlay } from '../../app/Slices/playingMusicSlice';

export const Slider_ = () => {

    const dispatch = useDispatch();
    const timing = useSelector(state => state.setSliderTime.value)
    const checkPlaying = useSelector(state => state.playingMusic.value)
    // const currentTime = useSelector(state => state.playingMusic.value)
    const sliderMaxValue = useSelector(state => state.sliderMaxValue.value)

    if (timing === sliderMaxValue) {
        dispatch(togglePause())
    }

    return (
        <div id='slider'>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <p style={{ color: 'gray', padding: '0px 10px' }}>{Math.floor(timing / 60)}:{
                    (timing % 60).toString().length == 1 ?
                        "0" + timing % 60 :
                        timing % 60
                }</p>
            </div>
            <Box style={{ display: 'flex', alignItems: 'center', margin: '0px 10px' }} sx={{ width: 400 }}>
                <Slider
                    color='red'
                    value={timing}
                    defaultValue={0}
                    max={sliderMaxValue}
                    onChange={(e, v) => {
                        dispatch(setSliderTime({ value: v }))
                        dispatch(setTumbValue({ value: v }))
                        if (checkPlaying) {
                            dispatch(togglePause())
                            setTimeout(() => {
                                dispatch(togglePlay())
                            }, 0);
                        }
                        else if (!checkPlaying) {
                            dispatch(togglePlay())
                        }
                    }}
                    className='slider'
                    size="small"
                    aria-label="Small"
                    aria-labelledby="continuous-slider"
                />
            </Box>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <p style={{ color: 'gray', padding: '0px 10px' }}>
                    {Math.floor(sliderMaxValue / 60)}:{

                        (sliderMaxValue % 60).toString().length == 1 ?
                            "0" + sliderMaxValue % 60 :
                            sliderMaxValue % 60
                    }
                </p>
            </div>
        </div>
    )
}
