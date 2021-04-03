const resultElement = document.getElementById('result');

const displayResults = (confidence, sentiment, subjectivity, irony, url) => {
  resultElement.innerHTML = 
  `This <a href=${url} target=blank>article</a> is ${subjectivity} and ${irony}. The sentiment is ${sentiment}. The confidence of the analys is: ${confidence}%.`;
};

const resolveScoreTag = (score_tag) => {
  const sentimentReference = {
    'p+': 'strongly positive',
    P: 'positive',
    NEU: 'neutral',
    N: 'negative',
    'N+': 'strongly negative',
    NONE: 'without polarity'
  };

  return sentimentReference[score_tag];
};

const processResults = (data, url) => {
  let {confidence, score_tag, subjectivity, irony} = data;
  subjectivity = subjectivity.toLowerCase();
  irony = irony[0] === 'N' ?  'non ironic' : 'ironic';
  const sentiment = resolveScoreTag(score_tag);

  displayResults(confidence, sentiment, subjectivity, irony, url);
}

const clearResults = () => {
  resultElement.textContent = '';
};

export {
  displayResults,
  processResults,
  clearResults,
}