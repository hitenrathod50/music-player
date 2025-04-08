import React from 'react'
import { Box } from '../Box/Box'
import './home.css'
import ar_song from '../../app/static_js/arijit_singh_songs'
import jn_song from '../../app/static_js/jubin_nautiyal_songs'
import pm_song from '../../app/static_js/punjabi_mix_songs'
import jb_song from '../../app/static_js/justin_biber'
import honey_s_songs from '../../app/static_js/honey_singh'

export const Home = () => {

    return (
        <>
            <h2 style={{ marginLeft: '50px', textAlign: 'center' }}>Popular of Arijit Singh</h2>
            <div id='h-scroll'>
                {
                    ar_song.map((item, index) => {
                        return <Box key={index} song_id={item.songId} image={(item.imgurl).url} channelTitle="Arijit Singh" title={item.title} />
                    })
                }
            </div>
            <h2 style={{ marginLeft: '50px', textAlign: 'center' }}>Popular of Jubin Nautiyal</h2>
            <div id='h-scroll'>
                {
                    jn_song.map((item, index) => {
                        return <Box key={index} song_id={item.songId} image={(item.imgurl).url} channelTitle="Jubin Nautiyal" title={item.title} />
                    })
                }
            </div>
            <h2 style={{ marginLeft: '50px', textAlign: 'center' }}>Popular Punjabi Mix Songs</h2>
            <div id='h-scroll'>
                {
                    pm_song.map((item, index) => {
                        return <Box key={index} song_id={item.songId} image={(item.imgurl).url} channelTitle="Punjabi Songs" title={item.title} />
                    })
                }
            </div>
            <h2 style={{ marginLeft: '50px', textAlign: 'center' }}>Popular of Justin Bieber</h2>
            <div id='h-scroll'>
                {
                    jb_song.map((item, index) => {
                        return <Box key={index} song_id={item.songId} image={(item.imgurl).url} channelTitle="Justin Bieber" title={item.title} />
                    })
                }
            </div>
            {/* PL0Z67tlyTaWptAoe4rvekEn_YqQihGTHQ */}
            <h2 style={{ marginLeft: '50px', textAlign: 'center' }}>Popular of Honey Singh</h2>
            <div id='h-scroll'>
                {
                    honey_s_songs.map((item, index) => {
                        return <Box key={index} song_id={item.songId} image={(item.imgurl).url} channelTitle="Honey Singh" title={item.title} />
                    })
                }
            </div>
        </>
    )
}
