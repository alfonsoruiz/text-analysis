import {processResults, clearResults, displayLoader} from './results';
import {postData} from './helpers/fetchCalls';

const button = document.querySelector('button');
const inputElement = document.querySelector('input');

const getData = async (url) => {
  try {
    displayLoader();
    
    const {data, sourceUrl} = await postData('http://localhost:8081/api', url);

    processResults(data, sourceUrl);
  } catch(e) {
    console.error(e);
  }
}

const validateInput = () => {
  const validationMessage = document.getElementById('validation-message');
  validationMessage.style.display = 'block';
  clearResults()

    setTimeout(() => {
      validationMessage.style.display = 'none';
    }, 3000)
}

const form = (e) => {
  e.preventDefault();

  if(Number(inputElement.value.length)) {
    clearResults();
    getData(inputElement.value);
    inputElement.value = '';
  } else {
    validateInput();
  }
}

button.addEventListener('click', form);

export default form;