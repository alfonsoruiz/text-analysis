import {urlValidator} from '../src/client/js/regexValidators';

describe('urlValidator', () => {
  test('Function exists', () => {
    expect(urlValidator).toBeDefined();
  });

  test('Returns true if url is properly foramtted', () => {
    const result = urlValidator('http://www.abc.com');
    expect(result).toBe(true);
  });

  test('Returns false if url is not properly formated', () => {
    const result = urlValidator('http/ww.abc.co');
    expect(result).toBe(false);
  })
});