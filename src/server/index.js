require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const PORT = process.env.PORT || 8081;
const server = express();

server.use(express.static('dist'));
server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {
  res.sendFile('dist/index.html');
});

server.post('/api/', async (req, res) => {
  const sourceUrl = req.body.data;

  const apiParameters = {
    url: 'https://api.meaningcloud.com/sentiment-2.1',
    lang: 'auto',
    key: process.env.API_KEY,
  };

  const apiEndpoint = `${apiParameters.url}?key=${apiParameters.key}&lang=${apiParameters.lang}&url=${sourceUrl}`;
  
  try {
    const apiResponse = await fetch(apiEndpoint);
    const data = await apiResponse.json();

    res.status(200).json({
      data: data,
      sourceUrl: sourceUrl
    });
  } catch(e) {
    console.log(e);
    res.status(500).json({
      data: 'Dont know what happend',
      sourceUrl: sourceUrl
    });
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});