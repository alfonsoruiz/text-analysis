const getData = async (url) => {
  Client.renderLoader(document.getElementById('result'));

  try {
    const {data, sourceUrl} = await Client.postData('http://localhost:8081/api', url);
    Client.processResults(data, sourceUrl);
  } catch(e) {
    console.error(e);
  }
};

export default getData