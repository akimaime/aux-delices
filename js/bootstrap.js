window._ = require('lodash');


require('bootstrap');
window.Popper = require('popper.js').default;
window.$ = window.jQuery = require('jquery');

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
