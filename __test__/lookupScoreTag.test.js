import lookupScoreTag from '../src/client/js/lookupScoreTag';

describe('lookupScoreTag', () => {
  test('Function exists', () => {
    expect(lookupScoreTag).toBeDefined();
  });

  test('Returns "strongly positive" if score_tag is "p+"', () => {
    const result = lookupScoreTag('p+');
    expect(result).toBe('strongly positive');
  });

  test('Returns "positive" if score_tag is "P"', () => {
    const result = lookupScoreTag('P');
    expect(result).toBe('positive')
  });

  test('Returns "neutral" if score_tag is "NEU"', () => {
    const result = lookupScoreTag('NEU');
    expect(result).toBe('neutral');
  })

  test('Returns "negative" if score_tag is "N"', () => {
    const result = lookupScoreTag('N');
    expect(result).toBe('negative');
  });

  test('Returns "strongly negative" if score_tag is "N+"', () => {
    const result = lookupScoreTag('N+');
    expect(result).toBe('strongly negative');
  });

  test('Returns "without polarity" if score_tag is "NONE"', () => {
    const result = lookupScoreTag('NONE');
    expect(result).toBe('without polarity');
  });
});