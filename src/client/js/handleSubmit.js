const handleSubmit = (e) => {
  e.preventDefault();
  const inputElement = document.querySelector('input');

  if (!inputElement.value.length) {
    Client.renderValidationError('Input can not be Empty');
    return;
  }

  if(!Client.urlValidator(inputElement.value)) {
    Client.renderValidationError('Please enter a valid URL');
    return;
  }

  Client.clearResults();
  Client.getData(inputElement.value);
  inputElement.value = '';
};

export default handleSubmit