import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 4578db6d2199fce2895dc2aa1a1e3e915b4b4e4eb9fdd06e5c88d62b48d0bc88'
  }
});
