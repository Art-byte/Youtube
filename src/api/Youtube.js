import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snipet',
        maxResults: 5,
        key: 'AIzaSyBrOLFiujIHaLdnA2fI6MSjEAQLI-2ViTQ'
    }
});