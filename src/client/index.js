import {testFunc1} from './js/testFunc1';
import {testFunc2} from './js/testFunc2';

import './styles/base.scss';

const heading = document.querySelector('h1');
heading.style.color = 'red';

console.log('This is the index.js');
console.log('This is the ', testFunc1);
console.log('This is the', testFunc2);