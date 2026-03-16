function __DECODE_0__(vRDoxr, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x82;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(vRDoxr, key);
}
function __STRING_ARRAY__() {
  var _0x52ddf6 = ['utf8', '3668250nFGSNw', '45784UzTAEi', '376039pQVHnm', 'perfect\x20number', '849690EswxVv', 'split', '3478941KlOZBV', 'abundant\x20number', 'log', 'readFileSync', 'deficient\x20number', '1477iAKdtK', '8812uCnHCM', '342WDnBNN', 'shift', '1840218QzuyJZ', '/dev/stdin', '895DbKxfj'];
  __STRING_ARRAY__ = function () {
    return _0x52ddf6;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x84)) / 0x1 + -parseInt(__DECODE_0__(0x82)) / 0x2 + -parseInt(__DECODE_0__(0x88)) / 0x3 + parseInt(__DECODE_0__(0x8e)) / 0x4 * (-parseInt(__DECODE_0__(0x93)) / 0x5) + parseInt(__DECODE_0__(0x91)) / 0x6 + -parseInt(__DECODE_0__(0x8d)) / 0x7 * (-parseInt(__DECODE_0__(0x83)) / 0x8) + parseInt(__DECODE_0__(0x8f)) / 0x9 * (parseInt(__DECODE_0__(0x86)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xeeff2);
var input = require('fs')[__DECODE_0__(0x8b)](__DECODE_0__(0x92), __DECODE_0__(0x94));
var arr = input['trim']()[__DECODE_0__(0x87)]('\x0a');
while (!![]) {
  var n = arr[__DECODE_0__(0x90)]() - 0x0;
  if (n == 0x0) {
    break;
  }
  var sum = n != 0x1 ? 0x1 : 0x0;
  var sqrt = Math['sqrt'](n);
  for (var i = 0x2; i < sqrt; i++) {
    if (n % i == 0x0) {
      sum += i + n / i;
    }
  }
  if (n % sqrt == 0x0 && sqrt != 0x1) {
    sum += sqrt;
  }
  var ans;
  if (n == sum) {
    ans = __DECODE_0__(0x85);
  } else {
    if (n > sum) {
      ans = __DECODE_0__(0x8c);
    } else {
      if (n < sum) {
        ans = __DECODE_0__(0x89);
      }
    }
  }
  console[__DECODE_0__(0x8a)](ans);
}
