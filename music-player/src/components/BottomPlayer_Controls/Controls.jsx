import React, { useState } from 'react'
import './controls.css'
import { IoPlay } from "react-icons/io5";
import { IoMdPause } from "react-icons/io";
import { CgPlayTrackNext } from "react-icons/cg"; // next icon
import { BiSkipPrevious } from "react-icons/bi"; // previous icon
import Tooltip from '@mui/material/Tooltip';
import { useSelector } from 'react-redux';
import { togglePlay, togglePause } from '../../app/Slices/playingMusicSlice'
import { useDispatch } from 'react-redux'
import { FaHeart } from "react-icons/fa6";
import { MdOutlinePlaylistAdd } from "react-icons/md";

export const Controls = ({ pauseVideo, playVideo }) => {

    const checkLogin = useSelector(state => state.checkLogin.value)

    const [liked, setLiked] = useState(false);

    const dispatch = useDispatch()

    const checkPlaying = useSelector(state => state.playingMusic.value)

    if (checkPlaying) playVideo()
    else if (!checkPlaying) pauseVideo()

    return (
        <div id='control'>

            {
                checkLogin ?
                    <Tooltip title="Add to Playlist" placement="top">
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <MdOutlinePlaylistAdd id='plalist-add' />
                        </div>
                    </Tooltip> :
                    <></>
            }
            <Tooltip title="Previous" placement="top">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <BiSkipPrevious className='prev_next_icon' />
                </div>
            </Tooltip>
            {
                !checkPlaying ?
                    <Tooltip title="Play" placement="top">
                        <div onClick={() => {
                            playVideo()
                            dispatch(togglePlay())
                        }} id='play_button'>
                            <IoPlay id='icon' />
                        </div>
                    </Tooltip>
                    :
                    <Tooltip title="Pause" placement="top">
                        <div onClick={() => {
                            pauseVideo()
                            dispatch(togglePause())
                        }} id='play_button'>
                            <IoMdPause id='icon' />
                        </div>
                    </Tooltip>
            }
            <Tooltip title="Next" placement="top">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <CgPlayTrackNext className='prev_next_icon' />
                </div>
            </Tooltip>
            {
                checkLogin ?
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        {liked ?
                            <FaHeart id='heart-icon-like' onClick={() => setLiked(false)} /> :
                            <FaHeart id='heart-icon-no-like' onClick={() => setLiked(true)} />
                        }
                    </div>
                    :
                    <></>
            }
        </div>
    )
}
