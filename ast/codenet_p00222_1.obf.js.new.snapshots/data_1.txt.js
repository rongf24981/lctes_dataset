var a0_0x1ed5f7 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x455be8 = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(_0x455be8(0x151)) / 0x1 + -parseInt(_0x455be8(0x150)) / 0x2 + -parseInt(_0x455be8(0x147)) / 0x3 * (parseInt(_0x455be8(0x14a)) / 0x4) + parseInt(_0x455be8(0x14d)) / 0x5 * (-parseInt(_0x455be8(0x158)) / 0x6) + -parseInt(_0x455be8(0x149)) / 0x7 + parseInt(_0x455be8(0x14b)) / 0x8 * (parseInt(_0x455be8(0x156)) / 0x9) + parseInt(_0x455be8(0x157)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x7e6f0);
function prime(max) {
  var _0x55d69e = __DECODE_0__;
  var arr = [];
  for (var i = 0x0; i <= max; i++) {
    arr[i] = i;
  }
  arr[0x0] = ![];
  arr[0x1] = ![];
  var sqrt = Math[_0x55d69e(0x14f)](Math[_0x55d69e(0x14c)](max));
  for (var i = 0x2; i <= sqrt; i++) {
    if (arr[i] == ![]) {
      continue;
    }
    for (var j = i + i; j <= max; j += i) {
      arr[j] = ![];
    }
  }
  var result = [];
  for (var i = 0x0; i <= max; i++) {
    if (arr[i] !== ![]) {
      result[_0x55d69e(0x148)](arr[i]);
    }
  }
  return result;
}
function __DECODE_0__(thfQgc, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x146;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(thfQgc, key);
}
function __STRING_ARRAY__() {
  var _0x102430 = ['push', '4139471ejbWxH', '4emiUVK', '8sXMGxC', 'sqrt', '1195vYvmMQ', 'length', 'floor', '165276GkiNlI', '807086cakeKz', 'trim', '/dev/stdin', 'map', 'log', '6956109rggmcn', '5646030PZZpUi', '2280ohthId', 'readFileSync', '2585721bfESlC'];
  __STRING_ARRAY__ = function () {
    return _0x102430;
  };
  return __STRING_ARRAY__();
}
var p = prime(0x98967f);
var input = require('fs')[a0_0x1ed5f7(0x146)](a0_0x1ed5f7(0x153), 'utf8');
var Arr = input[a0_0x1ed5f7(0x152)]()['split']('\x0a')[a0_0x1ed5f7(0x154)](Number);
for (var i = 0x0; i < Arr[a0_0x1ed5f7(0x14e)]; i++) {
  var a = Arr[i];
  if (a == 0x0) {
    break;
  }
  var quad = '';
  for (var j = 0x5; j < p[a0_0x1ed5f7(0x14e)]; j++) {
    if (p[j] > a) {
      break;
    }
    var x = p[j] - 0x8;
    if (x == p[j - 0x3] && x + 0x2 == p[j - 0x2] && x + 0x6 == p[j - 0x1]) {
      quad = p[j];
    }
  }
  console[a0_0x1ed5f7(0x155)](quad);
}
