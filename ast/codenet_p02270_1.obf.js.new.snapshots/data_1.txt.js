(function (stringArrayFunction, comparisonValue) {
  const _0x4f5b70 = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(_0x4f5b70(0xc1)) / 0x1 + parseInt(_0x4f5b70(0xbc)) / 0x2 + -parseInt(_0x4f5b70(0xbb)) / 0x3 * (parseInt(_0x4f5b70(0xb3)) / 0x4) + parseInt(_0x4f5b70(0xba)) / 0x5 + parseInt(_0x4f5b70(0xbd)) / 0x6 + -parseInt(_0x4f5b70(0xb7)) / 0x7 + parseInt(_0x4f5b70(0xb8)) / 0x8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x900d7);
function __STRING_ARRAY__() {
  const _0x33982b = ['11332mAIDJG', 'utf8', 'shift', '/dev/stdin', '6923322NZfdNH', '3830864DMLgIX', 'split', '1075620AUzzXz', '27YBToqk', '1001214NUNKGZ', '373770MTkiyM', 'trim', 'readFileSync', 'map', '347698uVmljE'];
  __STRING_ARRAY__ = function () {
    return _0x33982b;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(PVwoZB, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xb3;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(PVwoZB, key);
}
(function main() {
  const _0x47f84e = __DECODE_0__;
  let lines = require('fs')[_0x47f84e(0xbf)](_0x47f84e(0xb6), _0x47f84e(0xb4))[_0x47f84e(0xbe)]()['split']('\x0a');
  let [n, k] = lines[_0x47f84e(0xb5)]()[_0x47f84e(0xb9)]('\x20')[_0x47f84e(0xc0)](Number);
  let w = lines['map'](Number);
  const canAllStack = p => {
    let cnt = 0x0;
    let sum = 0x0;
    for (let i = 0x0; i < k; i++) {
      for (sum = 0x0; sum + w[cnt] <= p;) {
        sum += w[cnt++];
        if (cnt === n) {
          return n;
        }
      }
    }
    return cnt;
  };
  let mid;
  let left = 0x0;
  let right = 0x3b9aca00;
  while (right - left > 0x1) {
    mid = (right + left) / 0x2;
    if (canAllStack(mid) >= n) {
      right = mid;
    } else {
      left = mid;
    }
  }
  console['log'](Math['floor'](right));
})();
