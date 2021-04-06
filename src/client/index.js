import handleSubmit from './js/handleSubmit';
import lookupScoreTag from './js/lookupScoreTag';
import renderResults from './js/renderResults';
import processResults from './js/processResults';
import renderLoader from './js/renderLoader';
import {postData} from './js/fetchCalls';
import {urlValidator} from './js/regexValidators';
import renderValidationError from './js/renderValidationError';
import getData from './js/getData';
import {transformIronyData} from './js/utils';
import {removeTextContent} from './js/utils';
import {clearInput} from './js/utils';

import './styles/base.scss';
import './styles/footer.scss';
import './styles/form.scss';
import './styles/header.scss';
import './styles/results.scss';
import './styles/validation.scss';

export {
  handleSubmit,
  lookupScoreTag,
  renderResults,
  processResults,
  renderLoader,
  postData,
  urlValidator,
  renderValidationError,
  getData,
  transformIronyData,
  removeTextContent,
  clearInput,
}