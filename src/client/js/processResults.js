const processResults = (data, url) => {
  let {confidence, score_tag, subjectivity, irony} = data;
  
  Client.renderResults(
    confidence, 
    Client.lookupScoreTag(score_tag), 
    subjectivity.toLowerCase(), 
    Client.transformIronyData(irony), 
    url
  );
}

export default processResults;