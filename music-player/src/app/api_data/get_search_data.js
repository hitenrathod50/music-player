import axios from 'axios'


async function getSearchData(search, n = 1) {
    const API_KEY = "AIzaSyA2gKR29a72Y6sjem53C__p1NIQaDL3Vow";
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${search}&type=video&maxResults=${n}&key=${API_KEY}&videoCategoryId=10`

    const response = await axios(url)

    // image || songId || title || channelTitle || duration

    let items = response.data.items

    return items.map(({ id: { videoId }, snippet: { channelTitle, title, thumbnails: { maxres, standard, high } } }) => {
        return ({ title: title, imgurl: maxres || standard || high, songId: videoId, channelTitle: channelTitle })
    })


}

getSearchData("temporary pyar")

export default getSearchData;