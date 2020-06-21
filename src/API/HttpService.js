import axios from 'axios';

const http = axios.create({
  baseURL: 'https://www.googleapis.com/blogger/v3/',
});

export default http;
