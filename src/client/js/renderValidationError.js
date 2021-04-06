const renderValidationError = (message) => {
  const result = document.getElementById('result');
  result.textContent = message;
  result.classList.add('validation');

  setTimeout(() => {
    result.classList.remove('validation');
    Client.removeTextContent(result);
  }, 4000);
}

export default renderValidationError