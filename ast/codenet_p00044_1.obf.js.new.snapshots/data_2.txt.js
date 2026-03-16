(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xc2)) / 0x1 + parseInt(__DECODE_0__(0xbd)) / 0x2 + parseInt(__DECODE_0__(0xbf)) / 0x3 + parseInt(__DECODE_0__(0xbc)) / 0x4 + -parseInt(__DECODE_0__(0xbe)) / 0x5 * (parseInt(__DECODE_0__(0xc4)) / 0x6) + -parseInt(__DECODE_0__(0xc3)) / 0x7 + parseInt(__DECODE_0__(0xc7)) / 0x8 * (-parseInt(__DECODE_0__(0xc1)) / 0x9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xc0bec);
function isPrime(num) {
  if (num == 0x2 || num == 0x3) {
    return !![];
  }
  if (num < 0x2 || num % 0x2 == 0x0 || num % 0x3 == 0x0) {
    return ![];
  }
  var limit = Math[__DECODE_0__(0xc5)](Math[__DECODE_0__(0xc6)](num));
  var i = 0x1;
  while (i * 0x6 - 0x1 <= limit) {
    if (num % (i * 0x6 - 0x1) == 0x0 || num % (i * 0x6 + 0x1) == 0x0) {
      return ![];
    }
    i++;
  }
  return !![];
}
var input = require('fs')['readFileSync'](__DECODE_0__(0xc8), __DECODE_0__(0xc0));
function __DECODE_0__(kdNUpF, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xbb;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(kdNUpF, key);
}
var lines = input[__DECODE_0__(0xbb)]()[__DECODE_0__(0xca)]('\x0a');
function __STRING_ARRAY__() {
  var _0x491d3e = ['45BijXxU', '112991knQZkN', '550459cHBNRe', '618bXTDWc', 'round', 'sqrt', '504376Xnnwtd', '/dev/stdin', 'log', 'split', 'trim', '6020716lzcHsZ', '14124emjAAd', '70525MgWvoT', '3710763MLZXBD', 'utf8'];
  __STRING_ARRAY__ = function () {
    return _0x491d3e;
  };
  return __STRING_ARRAY__();
}
var line;
while (line = lines['shift']()) {
  var num = +line;
  var mp;
  var lp;
  if (num == 0x3) {
    mp = 0x2;
  }
  var i = 0x3;
  while (!![]) {
    if (isPrime(i) && i < num) {
      mp = i;
    }
    if (isPrime(i) && i > num) {
      lp = i;
      break;
    }
    i += 0x2;
  }
  console[__DECODE_0__(0xc9)](mp, lp);
}
