import axios from 'axios';

const baseURL = `https://corona.lmao.ninja/v3/covid-19`;

export const getWorldBasicInfo = async () => {
  try {
    const response = await axios.get(`${baseURL}/all`);
    return response;
  } catch (e) {
    return e;
  }
};