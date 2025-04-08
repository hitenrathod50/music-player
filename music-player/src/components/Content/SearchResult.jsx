import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { ResultBoxes } from '../ResultBox/ResultBoxes'
import getSearchData from '../../app/api_data/get_search_data'
import { Skeleton_ } from '../Skeleton/Skeleton'


export const SearchResult = () => {

    const search = useSelector(state => state.searchSlice.value)
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        let timer;

        setLoading(true)
        setData([])

        timer = setTimeout(() => {
            if (search.length != 0) {
                getSearchData(search, 10)
                    .then(data => {
                        // console.log("Api called")
                        setData(data)
                        setLoading(false)
                    })
                    .catch(() => console.log("Error"))
            }
        }, 2000);

        return () => clearTimeout(timer)

    }, [search])

    return (
        <div id='search-container'>

            {
                search.length == 0 ?
                    <>
                        <ResultBoxes image={"https://i.ytimg.com/vi/fG70qm6usR8/maxresdefault.jpg"} songId={"fG70qm6usR8"} title={"TERE TE - AP DHILLON | GURINDER GILL"} channelTitle={"RUN-UP RECORDS"} />
                        <ResultBoxes image={"https://i.ytimg.com/vi/2lfETGiIDf8/maxresdefault.jpg"} songId={"2lfETGiIDf8"} title={"Kaka New Song -Temporary Pyar | Darling | Adaab Kharoud | Anjali Arora | New Punjabi Songs 2021"} channelTitle={"Single Track Studio"} />
                        <ResultBoxes image={"https://i.ytimg.com/vi/ElZfdU54Cp8/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBQafPRRJm6FqPSvmdnFbM_jLm21g"} songId={"ElZfdU54Cp8"} title={"Apna Bana Le"} channelTitle={"Arijit Singh"} />
                        <ResultBoxes image={"https://i.ytimg.com/vi/HrnrqYxYrbk/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCqyoaLuxwILxC5c4-nKBb2mnTqVg"} songId={"HrnrqYxYrbk"} title={"ANIMAL: SATRANGA"} channelTitle={"Arijit Singh"} />
                        <ResultBoxes image={"https://i.ytimg.com/vi/BddP6PYo2gs/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDpBP1QhIQwf8PyjVIwGZMDKxltbQ"} songId={"BddP6PYo2gs"} title={"Kesariya - Brahmāstra"} channelTitle={"Arijit Singh"} />
                        <ResultBoxes image={"https://i.ytimg.com/vi/XEOJj5mc6ko/maxresdefault.jpg"} songId={"XEOJj5mc6ko"} title={"You and Me"} channelTitle={"shubh music"} />
                    </>
                    :
                    loading && search.length != 0 && data.length == 0 ?
                        Array.from({ length: 10 }, (_, i) => (
                            <Skeleton_ />
                        ))
                        :
                        data.map((item, index) => {
                            return <ResultBoxes key={index} image={item.imgurl.url} songId={item.songId} title={item.title} channelTitle={item.channelTitle} />
                        })
            }

        </div>
    )
}
