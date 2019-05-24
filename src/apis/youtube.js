import axios from 'axios';


const KEY = 'AIzaSyAPt4haqKb8sOVxogeEZqVlUYY9J7UeJSM';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key:  KEY
  }

});