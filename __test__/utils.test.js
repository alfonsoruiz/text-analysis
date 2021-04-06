import {transformIronyData}  from '../src/client/js/utils';

test('Returns "non ironic" if first letter of argument is "N', () => {
  const result = transformIronyData('N');
  expect(result).toBe('non ironic');
});

test('Returns "ironic" if first letter of argument is not "N"', () => {
  const result = transformIronyData('n');
  expect(result).toBe('ironic'); 
});