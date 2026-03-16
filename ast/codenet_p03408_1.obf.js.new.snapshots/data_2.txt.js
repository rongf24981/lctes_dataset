'use strict';

function __DECODE_0__(NKGUzM, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x90;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(NKGUzM, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x9a)) / 0x1 + -parseInt(__DECODE_0__(0x93)) / 0x2 + -parseInt(__DECODE_0__(0x94)) / 0x3 * (-parseInt(__DECODE_0__(0x97)) / 0x4) + -parseInt(__DECODE_0__(0x9c)) / 0x5 * (-parseInt(__DECODE_0__(0x9f)) / 0x6) + -parseInt(__DECODE_0__(0x9d)) / 0x7 + -parseInt(__DECODE_0__(0x91)) / 0x8 + parseInt(__DECODE_0__(0xa1)) / 0x9 * (parseInt(__DECODE_0__(0xa0)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xe607a);
function Main(input) {
  const params = input[__DECODE_0__(0x95)]()[__DECODE_0__(0x98)]('\x0a');
  const N = Number(params[0x0][__DECODE_0__(0x95)]());
  const M = Number(params[N + 0x1][__DECODE_0__(0x95)]());
  const blueCards = params[__DECODE_0__(0x99)](0x1, N + 0x1);
  const redCards = params['slice'](N + 0x2);
  let cardCount = {};
  for (const card of blueCards) {
    const c = card[__DECODE_0__(0x95)]();
    if (cardCount[__DECODE_0__(0x96)](c)) {
      cardCount[c] = cardCount[c] + 0x1;
    } else {
      cardCount[c] = 0x1;
    }
  }
  for (const card of redCards) {
    const c = card['trim']();
    if (cardCount[__DECODE_0__(0x96)](c)) {
      cardCount[c] = cardCount[c] - 0x1;
    } else {
      cardCount[c] = 0x1;
    }
  }
  let maxMoney = 0x0;
  for (const [key, money] of Object[__DECODE_0__(0x92)](cardCount)) {
    if (maxMoney < money) {
      maxMoney = money;
    }
  }
  console[__DECODE_0__(0x9b)](maxMoney);
}
function __STRING_ARRAY__() {
  const _0x4f3d71 = ['utf8', '1970856VMAiVH', 'entries', '3028704glLiTE', '409515ETtFEU', 'trim', 'hasOwnProperty', '24mOlPKl', 'split', 'slice', '1440051HMuZrh', 'log', '15ByFQap', '11474925lHfcUE', '/dev/stdin', '2696010TXXWxf', '1000zjrWwI', '66159NXufZv'];
  __STRING_ARRAY__ = function () {
    return _0x4f3d71;
  };
  return __STRING_ARRAY__();
}
Main(require('fs')['readFileSync'](__DECODE_0__(0x9e), __DECODE_0__(0x90)));
