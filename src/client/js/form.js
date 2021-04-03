const getData = async (url) => {
  Client.displayLoader(document.getElementById('result'));

  try {
    const {data, sourceUrl} = await Client.postData('http://localhost:8081/api', url);
    Client.processResults(data, sourceUrl);
  } catch(e) {
    console.error(e);
  }
};

const validateInput = () => {
  const validationMessage = document.getElementById('validation-message');
  validationMessage.style.display = 'block';
  Client.clearResults();

    setTimeout(() => {
      validationMessage.style.display = 'none';
    }, 1000);
};

const handleSubmit = (e) => {
  e.preventDefault();
  const inputElement = document.querySelector('input');

  if(Number(inputElement.value.length)) {
    Client.clearResults();
    getData(inputElement.value);
    inputElement.value = '';
  } else {
    validateInput();
  }
};

export {
  handleSubmit
}