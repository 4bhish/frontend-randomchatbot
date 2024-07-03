import axios from 'axios';

const api = axios.create({
  baseURL: 'http://backend-randomchat.ap-south-1.elasticbeanstalk.com/api', 
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export {api}