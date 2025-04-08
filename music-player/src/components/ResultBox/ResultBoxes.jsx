import React, { useState } from 'react'
import { IoPlay } from "react-icons/io5";
import { IoMdPause } from "react-icons/io";
import './resbox.css'
import { useDispatch, useSelector } from 'react-redux';
import { setSliderTime } from '../../app/Slices/sliderCurrentTime';
import { setSliderImage } from '../../app/Slices/currentSliderImage';
import { setVideoIdTo } from '../../app/Slices/videoIdSlice'
import { setTumbValue } from '../../app/Slices/sliderClickSlice'
import { togglePause, togglePlay } from '../../app/Slices/playingMusicSlice';
import { setSongNameatristName } from '../../app/Slices/songNameArtist';
import getDuration from '../../app/api_data/get_song_duration'
import { visibleBottomPlayer } from '../../app/Slices/bottomPlayerShowSlice';

export const ResultBoxes = (props) => {

    const dispatch = useDispatch()

    const checkPlaying = useSelector(state => state.playingMusic.value)

    const current_songId = useSelector(state => state.videoIdSlice.value)

    // const time = props.duration

    const [time, setTime] = useState(0)

    getDuration(props.songId).then(data => setTime(data))


    // console.log(time)

    let title = props.title.split(' ').splice(0, 3).join(' ')

    const handleClick = () => {

        dispatch(visibleBottomPlayer(true));

        if (props.songId === current_songId) {
            if (checkPlaying) dispatch(togglePause())
            else dispatch(togglePlay())
        }
        else {
            dispatch(setSongNameatristName({ songName: title, atristName: props.channelTitle }))
            dispatch(setVideoIdTo({ videoId: props.songId }))
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
        <div id='resbox'>
            <div style={{ marginLeft: '23px', display: 'flex', alignItems: 'center', height: '100%' }}>
                <div style={{ borderRadius: '10px', width: '70px', height: '70px', overflow: 'hidden', position: 'relative' }}>
                    <img id='res-image' src={props.image} alt="" />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', marginLeft: '10px', height: '65%' }}>
                    <p style={{ fontWeight: '600' }}>{props.title}</p>
                    <p style={{ color: '#b3b3b3' }}>{props.channelTitle}</p>
                </div>
            </div>
            <div style={{ padding: '5px 10px', display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
                <p>{Math.floor(time / 60)}:{

                    (time % 60).toString().length == 1 ?
                        "0" + time % 60 :
                        time % 60

                }</p>
                <div id='s-i-cont' onClick={() => handleClick()} style={{ marginLeft: '30px', cursor: 'pointer', height: '50px', width: '50px', backgroundColor: 'white', borderRadius: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {
                        (current_songId === props.songId && checkPlaying) ?
                            <IoMdPause style={{ fontSize: '19px' }} className='s-icon' /> :
                            <IoPlay style={{ fontSize: '19px' }} className='s-icon' />
                    }
                </div>
            </div>
        </div>
    )
}
