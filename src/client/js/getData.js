const getData = async (url) => {
  Client.renderLoader(document.getElementById('result'));
  const apiEndpoint = process.env.NODE_ENV === 'development' ? 'http://localhost:8081/api' : '/api';

  try {
    const {data, sourceUrl} = await Client.postData(apiEndpoint, url);
    Client.processResults(data, sourceUrl);
  } catch(e) {
    Client.renderValidationError('There has been an error processing your result. Please verify the url or try another one.');
    console.error(e);
  }
};

export default getData