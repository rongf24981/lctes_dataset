'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0xdc)) / 0x1 + -parseInt(__DECODE_0__(0xe1)) / 0x2 * (-parseInt(__DECODE_0__(0xdd)) / 0x3) + -parseInt(__DECODE_0__(0xd1)) / 0x4 + parseInt(__DECODE_0__(0xdb)) / 0x5 + parseInt(__DECODE_0__(0xd3)) / 0x6 * (-parseInt(__DECODE_0__(0xd7)) / 0x7) + -parseInt(__DECODE_0__(0xe3)) / 0x8 + parseInt(__DECODE_0__(0xd0)) / 0x9 * (parseInt(__DECODE_0__(0xe5)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x493cb);
const create = () => {
  const input = require('fs')[__DECODE_0__(0xda)](__DECODE_0__(0xe4), __DECODE_0__(0xe0))['trim']()[__DECODE_0__(0xd6)]('\x0a');
  const res = {
    'list': input,
    'index': 0x0,
    'max': input['length'],
    'hasNext': function () {
      return this[__DECODE_0__(0xd9)] < this[__DECODE_0__(0xe2)];
    },
    'next': function () {
      if (!this[__DECODE_0__(0xd8)]()) {
        throw __DECODE_0__(0xdf);
      } else {
        return this[__DECODE_0__(0xde)][this['index']++];
      }
    }
  };
  return res;
};
const o = create();
const next = () => o['next']();
function __DECODE_0__(lmTmeT, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xcf;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(lmTmeT, key);
}
const nextInt = () => parseInt(o[__DECODE_0__(0xd4)]());
const nextStrArray = () => o[__DECODE_0__(0xd4)]()[__DECODE_0__(0xd6)]('\x20');
const nextIntArray = () => o[__DECODE_0__(0xd4)]()[__DECODE_0__(0xd6)]('\x20')[__DECODE_0__(0xd2)](el => parseInt(el));
const nextCharArray = () => o[__DECODE_0__(0xd4)]()['split']('');
const hasNext = () => o['hasNext']();
function __STRING_ARRAY__() {
  const _0x44362b = ['27594QGlAVj', '222328RHaRvd', 'map', '18zDlcsk', 'next', 'log', 'split', '1190567dvzSor', 'hasNext', 'index', 'readFileSync', '1760310wPUhox', '247105ZzrAdO', '1722gOnGdU', 'list', 'ArrayIndexOutOfBoundsException', 'utf8', '436rkuuQn', 'max', '1369816YBoPiF', '/dev/stdin', '1020BgBoYd', 'floor'];
  __STRING_ARRAY__ = function () {
    return _0x44362b;
  };
  return __STRING_ARRAY__();
}
const myout = (...x) => console[__DECODE_0__(0xd5)](...x);
const Main = () => {
  const [n, m] = nextIntArray();
  let ans = m <= 0x2 * n ? Math[__DECODE_0__(0xcf)](M / 0x2) : Math[__DECODE_0__(0xcf)]((0x2 * n + m) / 0x4);
  console['log'](ans);
};
Main();
