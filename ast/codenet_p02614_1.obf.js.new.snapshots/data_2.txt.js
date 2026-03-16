(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x201)) / 0x1 + parseInt(__DECODE_0__(0x1f8)) / 0x2 + parseInt(__DECODE_0__(0x1fd)) / 0x3 * (-parseInt(__DECODE_0__(0x1fe)) / 0x4) + -parseInt(__DECODE_0__(0x1f9)) / 0x5 * (parseInt(__DECODE_0__(0x1f5)) / 0x6) + -parseInt(__DECODE_0__(0x1fa)) / 0x7 * (-parseInt(__DECODE_0__(0x1f6)) / 0x8) + parseInt(__DECODE_0__(0x1f3)) / 0x9 + parseInt(__DECODE_0__(0x202)) / 0xa * (parseInt(__DECODE_0__(0x1f4)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x9b0de);
const fs = require('fs');
const [h, w, k, ...m] = fs['readFileSync'](__DECODE_0__(0x204), __DECODE_0__(0x203))['split'](/\s/);
function __DECODE_0__(mZIfYq, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1f3;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(mZIfYq, key);
}
function solve(m, x = 0x0, y = 0x0, f) {
  if (m[__DECODE_0__(0x1ff)] === 0x0 || m[0x0][__DECODE_0__(0x1ff)] === 0x0) {
    return 0x0;
  }
  const n = m[__DECODE_0__(0x1f7)]('')[__DECODE_0__(0x1fc)](/\./g, '')[__DECODE_0__(0x1ff)];
  let a = 0x0;
  if (n == k) {
    a++;
  }
  if (n < k) {
    return a;
  }
  if (!f) {
    for (let i = y; i < m[__DECODE_0__(0x1ff)]; i++) {
      a += solve([...m[__DECODE_0__(0x1fb)](0x0, i), ...m[__DECODE_0__(0x1fb)](i + 0x1)], x, i < y ? y : i);
    }
  }
  for (let i = x; i < m[0x0][__DECODE_0__(0x1ff)]; i++) {
    a += solve(m[__DECODE_0__(0x205)](l => l['slice'](0x0, i) + l[__DECODE_0__(0x1fb)](i + 0x1)), i < x ? x : i, y, !![]);
  }
  return a;
}
console[__DECODE_0__(0x200)](solve(m));
function __STRING_ARRAY__() {
  const _0x1ba532 = ['138166vHzmAx', '2921110yEmQMW', 'utf8', '/dev/stdin', 'map', '567999bixgSO', '33AfqbmN', '17772jrWixV', '152oMMOWo', 'join', '108474aaFwXL', '530SAPvAf', '212912tYTTSC', 'slice', 'replace', '3351lxcZSf', '2724thFAGV', 'length', 'log'];
  __STRING_ARRAY__ = function () {
    return _0x1ba532;
  };
  return __STRING_ARRAY__();
}
