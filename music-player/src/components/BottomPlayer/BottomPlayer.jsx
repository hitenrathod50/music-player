import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import YouTube from 'react-youtube'
import './bottomplayer.css'
import { Audio } from 'react-loader-spinner';
import { Controls } from '../BottomPlayer_Controls/Controls'
import { Slider_ } from '../Slider/Slider'
import { setSliderMaxValue } from '../../app/Slices/sliderMaxValue'
import { togglePause, togglePlay } from '../../app/Slices/playingMusicSlice';
import { setSliderTime } from '../../app/Slices/sliderCurrentTime';

export const BottomPlayer = () => {

    const dispatch = useDispatch()

    const image = useSelector(state => state.currentSliderImage.value)

    const videoId = useSelector(state => state.videoIdSlice.value)

    const checkPlaying = useSelector(state => state.playingMusic.value)

    const isPlaying = useSelector(state => state.playingMusic.value)

    const thumbValue = useSelector(state => state.sliderClickSlice.value)

    const songNameAtrist = useSelector(state => state.setSongNameatristName.value)

    const timing = useSelector(state => state.setSliderTime.value)
    // console.log(songNameAtrist.songName)

    const playerRef = useRef(null);

    const onReady = (event) => {
        playerRef.current = event.target;
        // dispatch(togglePlay())
        dispatch(setSliderMaxValue({ value: Math.floor(playerRef.current.getDuration() - 1) }))
    };

    const sliderMaxValue = useSelector(state => state.sliderMaxValue.value)

    const playVideo = () => {
        if (playerRef.current) {
            playerRef.current.playVideo();
            dispatch(togglePlay())
        }
    };

    const pauseVideo = () => {
        if (playerRef.current) {
            playerRef.current.pauseVideo();
            dispatch(togglePause())
        }
    };

    useEffect(() => {

        let intervalId;

        if (timing == sliderMaxValue) {
            dispatch(togglePause())
            dispatch(setSliderTime({ value: 0 }))
            return clearInterval(intervalId)
        }

        if (checkPlaying) {
            intervalId = setInterval(() => {
                if (playerRef.current) {
                    dispatch(setSliderTime({ value: Math.floor(playerRef.current.getCurrentTime()) }))
                }
            }, 1000);
        }


        return () => clearInterval(intervalId);
    }, [checkPlaying, timing, dispatch])

    const handlePause = () => {
        dispatch(togglePause())
        playerRef.current.pauseVideo();
    }

    const handlePlay = () => {
        dispatch(togglePlay())
        playerRef.current.playVideo();
    }

    return (
        <div style={{ display: 'flex', width: '100%', height: '100%', alignItems: 'center' }}>
            <YouTube
                videoId={videoId}
                opts={{
                    height: '0',
                    width: '0',
                    playerVars: {
                        autoplay: 1,
                        rel: 0,
                        start: thumbValue
                    }

                }}
                onReady={onReady}
                onPlay={handlePlay}
                onPause={handlePause}
            />
            <div className="img-container">
                <img id='thumbnail' src={image} alt="" />
                {isPlaying && (
                    <div className="spinner-overlay">
                        <Audio
                            height="80"
                            width="80"
                            color="#1e1e1e"
                            ariaLabel="loading"
                        />
                    </div>
                )}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', marginLeft: '10px', height: '50%' }}>
                <p style={{ fontWeight: '600' }}>{songNameAtrist.songName}</p>
                <p style={{ color: '#b3b3b3' }}>{songNameAtrist.artistName}</p>
            </div>
            <div id='controls'>
                <Controls playVideo={playVideo} pauseVideo={pauseVideo} />
                <Slider_ playref={playerRef.current} />
            </div>
        </div>
    )
}
