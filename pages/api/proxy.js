import { prodEndPoint, endpoint } from '../../config';
import fetch from 'isomorphic-fetch';

//fucky stuff going on here
export default async (req, res) => {
  try {
    var newEndpoint =
      process.env.NODE_ENV === 'development' ? endpoint : prodEndPoint;
    var url = req.url;
    var fetchUrl = newEndpoint + url;

    var fetchRes = await fetch(fetchUrl);
    // console.log(fetchRes);
    const contentType = fetchRes.headers.get('content-type');

    let response;
    // if (contentType.includes('text/html')) {
    //   response = await fetchRes.text();
    //   res.setHeader('Content-Type', 'text/html');
    // }
    // if (contentType.includes('text/css')) {
    //   response = await fetchRes.text();
    //   res.setHeader('Content-Type', 'text/css');
    // }
    // if (contentType.includes('image/png')) {
    //   response = fetchRes.text();
    //   res.setHeader('Content-Type', 'image/png');
    // }

    response = await fetchRes.text();
    res.setHeader('Content-Type', contentType);

    if (contentType.includes('image/jpeg')) {
      response = await fetchRes;
      res.setHeader('Content-Type', 'image/jpeg');
    }

    if (contentType.includes('image/png')) {
      response = await fetchRes;
      res.setHeader('Content-Type', 'image/png');
    }

    console.log(fetchRes);
    res.send(response);
  } catch (error) {
    // if (error) throw new Error(error);
  }
};
