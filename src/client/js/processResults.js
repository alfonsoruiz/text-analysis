const processResults = (data, url) => {
  let {confidence, score_tag, subjectivity, irony} = data;
  subjectivity = subjectivity.toLowerCase();
  irony = irony[0] === 'N' ?  'non ironic' : 'ironic';
  const sentiment = Client.lookupScoreTag(score_tag);

  Client.renderResults(confidence, sentiment, subjectivity, irony, url);
}

export default processResults;