import axios from 'axios'



async function getData(playlist_id, n) {
    const API_KEY = "AIzaSyA2gKR29a72Y6sjem53C__p1NIQaDL3Vow";
    const response = await axios(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=${playlist_id}&key=${API_KEY}&maxResults=${n}`)
    let items = response.data.items

    return items.map(({ snippet: { title, thumbnails: { maxres, standard, high } }, contentDetails: { videoId } }) => {
        return ({ title: title, imgurl: maxres || standard || high, songId: videoId })
    })

}

// getData("PL9bw4S5ePsEF6LR45yS7ERazp-PqMmzLe", 10).then(data => console.log(data))

export default getData;