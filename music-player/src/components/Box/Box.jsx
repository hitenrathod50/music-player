import React from 'react'
import './box.css'
import { useDispatch, useSelector } from 'react-redux'
import { setVideoIdTo } from '../../app/Slices/videoIdSlice'
import { togglePause, togglePlay } from '../../app/Slices/playingMusicSlice';
import { setSliderTime } from '../../app/Slices/sliderCurrentTime';
import { setSliderImage } from '../../app/Slices/currentSliderImage';
import { setTumbValue } from '../../app/Slices/sliderClickSlice'
import { setSongNameatristName } from '../../app/Slices/songNameArtist';
import { IoPlay } from "react-icons/io5";
import { IoMdPause } from "react-icons/io";
import { visibleBottomPlayer } from '../../app/Slices/bottomPlayerShowSlice';



export const Box = (props) => {

    const current_songId = useSelector(state => state.videoIdSlice.value)
    const dispatch = useDispatch()

    const checkPlaying = useSelector(state => state.playingMusic.value)


    let title = props.title.split(' ').splice(0, 3).join(' ')

    const handleClick = () => {

        dispatch(visibleBottomPlayer(true));

        dispatch(setSongNameatristName({ songName: title, atristName: props.channelTitle }))

        if (props.song_id === current_songId) {
            if (checkPlaying) dispatch(togglePause())
            else dispatch(togglePlay())
        }
        else {
            dispatch(setVideoIdTo({ videoId: props.song_id }))
            dispatch(setSliderImage({ value: props.image }))
            localStorage.setItem("Image", props.image)
            localStorage.setItem("songName", title)
            localStorage.setItem("artistName", props.channelTitle)
            dispatch(setSliderTime({ value: 0 }))
            dispatch(setTumbValue({ value: 0 }))
            dispatch(togglePlay())
        }

    }

    return (
        <div id='box-container'>
            <div id='img-play-icon'>
                <img id='song-image' src={props.image} alt="" />
                {
                    (current_songId === props.song_id && checkPlaying) ?
                        <div onClick={() => handleClick()} id='play-icon' style={{
                            display: 'flex', justifyContent: 'center', alignItems:
                                'center'
                        }}><IoMdPause id='icon' /></div> :
                        <div onClick={() => handleClick()} id='play-icon' style={{
                            display: 'flex', justifyContent: 'center', alignItems:
                                'center'
                        }}><IoPlay id='icon' /></div>
                }
            </div>
            <p style={{ margin: '5px 0px', fontWeight: '600', textAlign: 'justify' }}>{title}</p>
            <p style={{ margin: '2px 0px', color: '#b3b3b3' }}>{props.channelTitle}</p>
        </div>
    )
}
