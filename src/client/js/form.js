import {processResults} from './results';
import {postData} from './helpers/fetchCalls';

const button = document.querySelector('button');

const getData = async (url) => {
  try {
    const {data} = await postData('http://localhost:8081/api', url);
    processResults(data);
  } catch(e) {
    console.error(e);
  }
}

const form = (e) => {
  e.preventDefault();
  const inputElement = document.querySelector('input');
  getData(inputElement.value);
  inputElement.value = ''
}

button.addEventListener('click', form);

export default form;