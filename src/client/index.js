import {handleSubmit} from './js/form';
import {displayResults, processResults, clearResults} from './js/results';
import {displayLoader} from './js/helpers/loader';
import {postData} from './js/helpers/fetchCalls';

import './styles/base.scss';
import './styles/footer.scss';
import './styles/form.scss';
import './styles/header.scss';
import './styles/reset.scss';
import './styles/results.scss';
import './styles/validation.scss';

export {
  handleSubmit,
  displayResults,
  processResults,
  clearResults,
  displayLoader,
  postData
}