import axios from 'axios';
import { parseString } from 'xml2js';

export const getLatestHealthInfo = async () => {
  try {
    const response = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://covid19.go.id/feed/berita`,
      {
        headers: new Headers({
          Accept: "text/html",
          "content-type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT",
          "Access-Control-Allow-Headers": "Content-Type",
        }),
        mode: "no-cors",
      });

    let result = null;
    
    parseString(response.data, (err, res) => {
      if (err) {
        throw new Error("Something wrong happened");
      } else {
        result = res.rss.channel[0].item;
      }
    });
    return result;
  } catch (e) {
    return e;
  }
}
