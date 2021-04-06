export const transformIronyData = (str) => {
  return str[0] === 'N' ? 'non ironic' : 'ironic';
} 

export const removeTextContent = (element) => {
  element.textContent = '';
}

export const clearInput = (element) => {
  element.value = '';
}