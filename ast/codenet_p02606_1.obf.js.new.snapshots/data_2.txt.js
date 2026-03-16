'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x105)) / 0x1 * (-parseInt(__DECODE_0__(0x110)) / 0x2) + parseInt(__DECODE_0__(0x10d)) / 0x3 * (parseInt(__DECODE_0__(0x10a)) / 0x4) + parseInt(__DECODE_0__(0x107)) / 0x5 + parseInt(__DECODE_0__(0x10b)) / 0x6 + -parseInt(__DECODE_0__(0x102)) / 0x7 + parseInt(__DECODE_0__(0x10c)) / 0x8 * (-parseInt(__DECODE_0__(0x109)) / 0x9) + parseInt(__DECODE_0__(0x108)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x95b58);
function __DECODE_0__(tPzLWh, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x102;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(tPzLWh, key);
}
function __STRING_ARRAY__() {
  const _0x30cd98 = ['88bvKkRd', '60kDYNum', 'log', 'utf8', '2866sHwteU', '4504920kZylju', 'split', 'trim', '667FGYDSm', '/dev/stdin', '2829010eUVlHo', '5002550LtpiPW', '434529YDVyoI', '171620UKKKOx', '4917078StnpLo'];
  __STRING_ARRAY__ = function () {
    return _0x30cd98;
  };
  return __STRING_ARRAY__();
}
const main = arg => {
  arg = arg[__DECODE_0__(0x104)]()[__DECODE_0__(0x103)]('\x0a');
  const L = parseInt(arg[0x0][__DECODE_0__(0x103)]('\x20')[0x0]);
  const R = parseInt(arg[0x0][__DECODE_0__(0x103)]('\x20')[0x1]);
  const d = parseInt(arg[0x0][__DECODE_0__(0x103)]('\x20')[0x2]);
  let answer = 0x0;
  for (let i = L; i <= R; i++) {
    if (i % d === 0x0) {
      answer++;
    }
  }
  console[__DECODE_0__(0x10e)](answer);
};
main(require('fs')['readFileSync'](__DECODE_0__(0x106), __DECODE_0__(0x10f)));
