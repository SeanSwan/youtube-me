import axios from 'axios';


const KEY = 'AIzaSyCpbKj42yaFpnfyQEIiQKtxJ7uRVx5qxfM';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippit',
    maxResults: 5,
    key:  KEY
  }
  
});