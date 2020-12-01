import axios from 'axios';
import { APIKEY } from '../config/APIKey';

export const getLatestHealthInfo = async () => {
  try {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=${APIKEY}`)
    return response;
  } catch (e) {
    return e;
  }
}
