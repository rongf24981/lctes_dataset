function __STRING_ARRAY__() {
  var _0xef6dcd = ['log', '5936IxcohY', '905200BbeiDU', 'readFileSync', '/dev/stdin', 'map', '3673206ShoElK', '985617twavoR', 'trim', '4250862TJaUus', '576339bRujpv', '1615170woQjni', 'yes', '8uqvcvJ', '5jTcgBQ', '327MPxPDv', 'utf8', 'split'];
  __STRING_ARRAY__ = function () {
    return _0xef6dcd;
  };
  return __STRING_ARRAY__();
}
var a0_0x39d9bf = __DECODE_0__;
function __DECODE_0__(ZzOcWI, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x177;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ZzOcWI, key);
}
(function (stringArrayFunction, comparisonValue) {
  var _0x53b953 = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(_0x53b953(0x184)) / 0x1 + parseInt(_0x53b953(0x17b)) / 0x2 * (-parseInt(_0x53b953(0x177)) / 0x3) + -parseInt(_0x53b953(0x17c)) / 0x4 + parseInt(_0x53b953(0x188)) / 0x5 * (parseInt(_0x53b953(0x180)) / 0x6) + parseInt(_0x53b953(0x183)) / 0x7 + -parseInt(_0x53b953(0x187)) / 0x8 * (-parseInt(_0x53b953(0x181)) / 0x9) + parseInt(_0x53b953(0x185)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x58f3a);
var input = require('fs')[a0_0x39d9bf(0x17d)](a0_0x39d9bf(0x17e), a0_0x39d9bf(0x178));
var arr = input[a0_0x39d9bf(0x182)]()[a0_0x39d9bf(0x179)]('\x20')[a0_0x39d9bf(0x17f)](Number);
arr['sort'](function (a, b) {
  return a - b;
});
var sum = 0x0;
if (arr[0x0] == arr[0x1] && arr[0x1] == arr[0x2] && arr[0x2] == arr[0x3]) {
  sum++;
}
if (arr[0x0 + 0x4] == arr[0x1 + 0x4] && arr[0x1 + 0x4] == arr[0x2 + 0x4] && arr[0x2 + 0x4] == arr[0x3 + 0x4]) {
  sum++;
}
if (arr[0x0 + 0x8] == arr[0x1 + 0x8] && arr[0x1 + 0x8] == arr[0x2 + 0x8] && arr[0x2 + 0x8] == arr[0x3 + 0x8]) {
  sum++;
}
console[a0_0x39d9bf(0x17a)](sum == 0x3 ? a0_0x39d9bf(0x186) : 'no');
