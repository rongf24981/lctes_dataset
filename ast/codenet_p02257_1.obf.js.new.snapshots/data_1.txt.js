var a0_0x4e4d53 = __DECODE_0__;
function __STRING_ARRAY__() {
  var _0x4f961f = ['split', 'map', '7424RmMyqb', '3157434JtAHmw', 'push', 'length', 'shift', '16jxolnU', 'indexOf', 'sqrt', 'trim', '152XsVqkw', '279iWZOBY', '1063725vXMuWu', '/dev/stdin', 'sort', '186417pDLbKT', '10436xAuTwA', 'utf8', '300006qwJwnL', '6715990dHZzjM'];
  __STRING_ARRAY__ = function () {
    return _0x4f961f;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var _0x37c740 = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(_0x37c740(0x114)) / 0x1 * (-parseInt(_0x37c740(0x104)) / 0x2) + parseInt(_0x37c740(0x109)) / 0x3 * (-parseInt(_0x37c740(0x10e)) / 0x4) + -parseInt(_0x37c740(0x10a)) / 0x5 + -parseInt(_0x37c740(0x110)) / 0x6 + -parseInt(_0x37c740(0x10d)) / 0x7 * (-parseInt(_0x37c740(0x108)) / 0x8) + -parseInt(_0x37c740(0x115)) / 0x9 + parseInt(_0x37c740(0x111)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x3ff63);
var input = require('fs')['readFileSync'](a0_0x4e4d53(0x10b), a0_0x4e4d53(0x10f));
var Arr = input[a0_0x4e4d53(0x107)]()[a0_0x4e4d53(0x112)]('\x0a')[a0_0x4e4d53(0x113)](Number);
function __DECODE_0__(EQsEYd, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x104;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(EQsEYd, key);
}
Arr[a0_0x4e4d53(0x118)]();
Arr[a0_0x4e4d53(0x10c)](function (a, b) {
  return a - b;
});
var max = Arr[Arr[a0_0x4e4d53(0x117)] - 0x1];
var arr = [0x2];
for (var i = 0x3; i <= max; i = i + 0x2) {
  var a = !![];
  var sqrt = ~~Math[a0_0x4e4d53(0x106)](i) + 0x1;
  for (var j = 0x0; j < arr[a0_0x4e4d53(0x117)]; j++) {
    if (arr[j] > sqrt) {
      break;
    }
    if (i % arr[j] == 0x0) {
      a = ![];
      break;
    }
  }
  if (a) {
    arr[a0_0x4e4d53(0x116)](i);
  }
}
var num = 0x0;
var f = 0x0;
for (var i = 0x0; i < Arr[a0_0x4e4d53(0x117)]; i++) {
  if (Arr[i] != 0x2 && Arr[i] % 0x2 == 0x0) {
    continue;
  }
  var index = arr[a0_0x4e4d53(0x105)](Arr[i], f);
  if (index != -0x1) {
    f = index;
    num++;
  }
}
console['log'](num);
