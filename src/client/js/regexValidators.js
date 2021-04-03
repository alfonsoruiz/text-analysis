const searchPatterns = {
  url: /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm
};

const urlValidator = (str) => {
  const result = str.match(searchPatterns.url);
  return result ? true : false;
};

export {
  urlValidator
}