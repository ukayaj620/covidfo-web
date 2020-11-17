import axios from 'axios';
import key from '../config/APIKey';

export const getLatestHealthInfo = async () => {
  try {
    const response = await axios.get(`http://newsapi.org/v2/top-headlines?country=id&category=health&apiKey=${key.APIKEY}`)
  } catch (e) {
    return e;
  }
}
