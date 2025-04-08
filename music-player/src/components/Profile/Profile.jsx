import React from 'react'
import "./profile.css"
import { LuUser2 } from "react-icons/lu";
import { ResultBoxes } from '../ResultBox/ResultBoxes';

export const Profile = () => {
    return (
        <>
            <div id='profile-first-block'>
                <div style={{ height: "100px", width: "100px", borderRadius: "100%", backgroundColor: '#282828', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <LuUser2 style={{ fontSize: '30px', margin: '0px 2px', color: "#7f7f7f" }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <h1 style={{ marginLeft: '10px' }}>User Name</h1>
                </div>
            </div>
            <div id='liked-songs'>
                <h1 style={{ textAlign: 'center' }}>Liked Songs</h1>
                <ResultBoxes image={"https://i.ytimg.com/vi/fG70qm6usR8/maxresdefault.jpg"} songId={"fG70qm6usR8"} title={"TERE TE - AP DHILLON | GURINDER GILL"} channelTitle={"RUN-UP RECORDS"} />
                <ResultBoxes image={"https://i.ytimg.com/vi/2lfETGiIDf8/maxresdefault.jpg"} songId={"2lfETGiIDf8"} title={"Kaka New Song -Temporary Pyar | Darling | Adaab Kharoud | Anjali Arora | New Punjabi Songs 2021"} channelTitle={"Single Track Studio"} />
                <ResultBoxes image={"https://i.ytimg.com/vi/ElZfdU54Cp8/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBQafPRRJm6FqPSvmdnFbM_jLm21g"} songId={"ElZfdU54Cp8"} title={"Apna Bana Le"} channelTitle={"Arijit Singh"} />
                <ResultBoxes image={"https://i.ytimg.com/vi/HrnrqYxYrbk/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCqyoaLuxwILxC5c4-nKBb2mnTqVg"} songId={"HrnrqYxYrbk"} title={"ANIMAL: SATRANGA"} channelTitle={"Arijit Singh"} />
                <ResultBoxes image={"https://i.ytimg.com/vi/BddP6PYo2gs/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDpBP1QhIQwf8PyjVIwGZMDKxltbQ"} songId={"BddP6PYo2gs"} title={"Kesariya - Brahmāstra"} channelTitle={"Arijit Singh"} />
                <ResultBoxes image={"https://i.ytimg.com/vi/XEOJj5mc6ko/maxresdefault.jpg"} songId={"XEOJj5mc6ko"} title={"You and Me"} channelTitle={"shubh music"} />
            </div>
        </>
    )
}
