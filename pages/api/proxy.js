import { prodEndPoint, endpoint } from '../../config';
import fetch from 'isomorphic-fetch';

export default async (req, res) => {
  try {
    var newEndpoint =
      process.env.NODE_ENV === 'development' ? endpoint : prodEndPoint;
    var url = req.url;
    var fetchUrl = newEndpoint + url;

    var fetchRes = await fetch(fetchUrl);
    var response = await fetchRes.text();
    res.setHeader('Content-Type', 'text/html');
    res.send(response);
  } catch (error) {
    if (error) throw new Error(error);
  }
};
