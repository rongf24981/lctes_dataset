'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x12f)) / 0x1 + -parseInt(__DECODE_0__(0x13a)) / 0x2 + -parseInt(__DECODE_0__(0x137)) / 0x3 + -parseInt(__DECODE_0__(0x135)) / 0x4 + parseInt(__DECODE_0__(0x13f)) / 0x5 * (-parseInt(__DECODE_0__(0x139)) / 0x6) + parseInt(__DECODE_0__(0x13c)) / 0x7 * (parseInt(__DECODE_0__(0x134)) / 0x8) + parseInt(__DECODE_0__(0x132)) / 0x9 * (parseInt(__DECODE_0__(0x13e)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x5b0cf);
function __DECODE_0__(QSyXyX, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x12f;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(QSyXyX, key);
}
const main = arg => {
  const S = arg[__DECODE_0__(0x13d)]('\x0a')[0x0][__DECODE_0__(0x13d)]('\x20');
  let tail = S[0x0][__DECODE_0__(0x13d)]('')['pop']();
  for (let i = 0x1; i < S[__DECODE_0__(0x131)]; i++) {
    if (tail == S[i][__DECODE_0__(0x13d)]('')[0x0]) {
      tail = S[i][__DECODE_0__(0x13d)]('')[__DECODE_0__(0x136)]();
    } else {
      console[__DECODE_0__(0x133)]('NO');
      return;
    }
  }
  console[__DECODE_0__(0x133)]('YES');
};
main(require('fs')[__DECODE_0__(0x130)](__DECODE_0__(0x138), __DECODE_0__(0x13b)));
function __STRING_ARRAY__() {
  const _0xfa7cf7 = ['split', '6616570gUqjYy', '10lUXSwB', '707254RbBkDY', 'readFileSync', 'length', '9KXAFpQ', 'log', '654104JUIJgU', '2396760DmhdTm', 'pop', '608856ORWxAO', '/dev/stdin', '885030ZyTmGc', '615262vuUpww', 'utf8', '35SvCSaY'];
  __STRING_ARRAY__ = function () {
    return _0xfa7cf7;
  };
  return __STRING_ARRAY__();
}
