import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
    Authorization: 'Client-ID 8dd20cb2d30579d1d53552368b25abae7d7dc7a7141ebdb2a35940833c3e5572'
  } 
});



