import {displayResults, processResults, clearResults} from '../src/client/js/results';

describe('results', () => {
  test('displayResults function exists', () => {
    expect(displayResults).toBeDefined();
  });

  test('processResults function exists', () => {
    expect(processResults).toBeDefined();
  });

  test('clearResults function exists', () => {
    expect(clearResults).toBeDefined();
  });
});