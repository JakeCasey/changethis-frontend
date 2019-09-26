import { endpoint } from '../../config';

export default async (req, res) => {
  var url = req.url;
  var fetchUrl = endpoint + url;

  var fetchRes = await fetch(fetchUrl);
  var response = await fetchRes.text();
  res.setHeader('Content-Type', 'text/html');
  res.send(response);
};
