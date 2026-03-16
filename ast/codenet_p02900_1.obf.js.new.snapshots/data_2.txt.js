function __STRING_ARRAY__() {
  var _0x5b6b26 = ['4484112iPUVLD', '/dev/stdin', '2bVJfOW', '745206Ixwnzu', '2268872SJqTpO', '6939933ObKEqv', '37220LXmhOV', '931113JnSMxm', 'readFileSync', '337795FYecei', '78yjclCJ', '14KYBlxt', 'utf-8', 'map', '50GxjFBY', 'split', '6IZrEwS'];
  __STRING_ARRAY__ = function () {
    return _0x5b6b26;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x141)) / 0x1 * (parseInt(__DECODE_0__(0x142)) / 0x2) + -parseInt(__DECODE_0__(0x138)) / 0x3 * (parseInt(__DECODE_0__(0x145)) / 0x4) + -parseInt(__DECODE_0__(0x148)) / 0x5 * (-parseInt(__DECODE_0__(0x13e)) / 0x6) + parseInt(__DECODE_0__(0x139)) / 0x7 * (parseInt(__DECODE_0__(0x143)) / 0x8) + parseInt(__DECODE_0__(0x146)) / 0x9 * (parseInt(__DECODE_0__(0x13c)) / 0xa) + parseInt(__DECODE_0__(0x144)) / 0xb + -parseInt(__DECODE_0__(0x13f)) / 0xc;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x67109);
function __DECODE_0__(etJiRx, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x138;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(etJiRx, key);
}
function Main(input) {
  input = input[__DECODE_0__(0x13d)]('\x20')[__DECODE_0__(0x13b)](x => x * 0x1);
  function gcd(a1, a2) {
    return a2 == 0x0 ? a1 : gcd(a2, a1 % a2);
  }
  var result = gcd(input[0x0], input[0x1]);
  var answer = 0x1;
  for (var i = 0x2; i * i < result; i++) {
    if (result % i === 0x0) {
      answer++;
      while (result % i === 0x0) {
        result /= i;
      }
    }
  }
  if (result !== 0x1) {
    answer++;
  }
  console['log'](answer);
}
Main(require('fs')[__DECODE_0__(0x147)](__DECODE_0__(0x140), __DECODE_0__(0x13a)));
