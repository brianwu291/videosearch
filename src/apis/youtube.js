import axios from "axios";

const KEY = 'AIzaSyC4yHWqOTypHWJ2FIVqgoqQ-5wSWeUI1FU';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params : {
    part: 'snippet',
    maxResult: 5,
    key: KEY
  }
});
