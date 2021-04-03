const lookupScoreTag = (score_tag) => {
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

export default lookupScoreTag