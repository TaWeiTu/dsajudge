import Vue from 'vue';
import moment from 'moment-timezone';
import _ from 'lodash';

Vue.filter('toFormattedTime', (val, fmt) => moment(val).tz('Asia/Taipei').format(fmt));
Vue.filter('toResultString', (val) => {
    if (val === 'pending' || val === 'pending-rejudge' || val === 'judging') return val;
    return {
        'PE': 'Presentation Error',
        'JE': 'Judge Error',
        'TLE': 'Time Limit Exceeded',
        'WA': 'Wrong Answer',
        'AC': 'Accepted',
        'CE': 'Compile Error',
        'RE': 'Runtime Error',
        'SE': 'Security Error',
        'GE': 'Git Error'
    }[val];
});
Vue.filter('toFixed', (val, fx=2) => {
    if (!_.isNumber(val)) return val;
    return val.toFixed(fx);
});
