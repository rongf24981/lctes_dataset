(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x86)) / 0x1 + parseInt(__DECODE_0__(0x85)) / 0x2 * (parseInt(__DECODE_0__(0x8b)) / 0x3) + -parseInt(__DECODE_0__(0x90)) / 0x4 * (-parseInt(__DECODE_0__(0x88)) / 0x5) + -parseInt(__DECODE_0__(0x8a)) / 0x6 * (parseInt(__DECODE_0__(0x8f)) / 0x7) + -parseInt(__DECODE_0__(0x8d)) / 0x8 + -parseInt(__DECODE_0__(0x8c)) / 0x9 + parseInt(__DECODE_0__(0x8e)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x6961a);
var count = 0x0;
function isPrime(num) {
  if (num < 0x2) {
    return ![];
  }
  for (var i = 0x2; i < num; i++) {
    if (num % i == 0x0) {
      return ![];
    }
  }
  count++;
  return !![];
}
var input = require('fs')[__DECODE_0__(0x87)]('/dev/stdin', 'utf8');
var p = input[__DECODE_0__(0x89)]('\x0a');
function __DECODE_0__(MukZIo, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x85;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(MukZIo, key);
}
function __STRING_ARRAY__() {
  var _0x1dfccb = ['318rrlzrk', '2760939xaPfPj', '1432120BYvryH', '16090580emdRuq', '420707KhrNkK', '764cEwLlL', 'log', '2tamurc', '416000fhxsqy', 'readFileSync', '13235oLVVXu', 'split', '78AoEUIh'];
  __STRING_ARRAY__ = function () {
    return _0x1dfccb;
  };
  return __STRING_ARRAY__();
}
for (var i = 0x0; i < p['length']; i++) {
  count = 0x0;
  for (var j = 0x2; j <= p[i]; j++) {
    isPrime(j);
  }
  console[__DECODE_0__(0x91)](count);
}
