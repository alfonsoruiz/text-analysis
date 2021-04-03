const renderValidationError = (message) => {
  const result = document.getElementById('result');
  result.textContent = message;
  result.classList.add('validation');

  setTimeout(() => {
    result.classList.remove('validation');
    result.textContent = '';
  }, 1000);
}

export default renderValidationError