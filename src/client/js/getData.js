const getData = async (url) => {
  Client.renderLoader(document.getElementById('result'));

  const apiEndpoint = process.env.NODE_ENV === 'development' ? 'http://localhost:8081/api' : '/api';

  try {
    const {data, sourceUrl} = await Client.postData(apiEndpoint, url);
    Client.processResults(data, sourceUrl);
  } catch(e) {
    console.error(e);
  }
};

export default getData