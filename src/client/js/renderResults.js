const renderResults = (confidence, sentiment, subjectivity, irony, url) => {
  const resultElement = document.getElementById('result');
  
  resultElement.innerHTML = 
  `This <a href=${url} target=blank>article</a> is ${subjectivity} and ${irony}. The sentiment is ${sentiment}. The confidence of the analys is: ${confidence}%.`;
};

export default renderResults