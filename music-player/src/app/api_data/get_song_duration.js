import axios from 'axios'


async function getDuration(id) {

    const API_KEY = "AIzaSyA2gKR29a72Y6sjem53C__p1NIQaDL3Vow";
    const url = `https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=${id}&key=${API_KEY}&videoCategoryId=10`

    const response = await axios(url)
    const duration = await parseDurationToSeconds(response.data.items[0].contentDetails.duration)

    return duration;

}


const parseDurationToSeconds = (duration) => {
    // Regular expression to match ISO 8601 duration format
    const regex = /^PT(?:([0-9]+)H)?(?:([0-9]+)M)?(?:([0-9]+)S)?$/;

    const match = duration.match(regex);
    if (!match) {
        throw new Error('Invalid duration format');
    }

    const hours = parseInt(match[1] || '0', 10);
    const minutes = parseInt(match[2] || '0', 10);
    const seconds = parseInt(match[3] || '0', 10);

    // Convert to total seconds
    return hours * 3600 + minutes * 60 + seconds;
};

export default getDuration;