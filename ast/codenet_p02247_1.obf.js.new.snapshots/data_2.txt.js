(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1f8)) / 0x1 * (-parseInt(__DECODE_0__(0x1f4)) / 0x2) + -parseInt(__DECODE_0__(0x1fb)) / 0x3 * (parseInt(__DECODE_0__(0x1f5)) / 0x4) + -parseInt(__DECODE_0__(0x1ef)) / 0x5 * (-parseInt(__DECODE_0__(0x1ed)) / 0x6) + parseInt(__DECODE_0__(0x1f6)) / 0x7 + parseInt(__DECODE_0__(0x1f1)) / 0x8 * (parseInt(__DECODE_0__(0x1fa)) / 0x9) + -parseInt(__DECODE_0__(0x202)) / 0xa * (-parseInt(__DECODE_0__(0x1ff)) / 0xb) + parseInt(__DECODE_0__(0x1fd)) / 0xc * (-parseInt(__DECODE_0__(0x201)) / 0xd);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x4c2e2);
var input = require('fs')[__DECODE_0__(0x1f3)](__DECODE_0__(0x1fe), __DECODE_0__(0x1f0));
function __DECODE_0__(oljdey, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1ed;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(oljdey, key);
}
var arr = input[__DECODE_0__(0x203)]()[__DECODE_0__(0x1f2)]('\x0a');
function __STRING_ARRAY__() {
  var _0xafeae0 = ['lastIndex', '1bqeJij', 'log', '1510911ExHaGY', '111ypwzQX', 'push', '1415316qumSeP', '/dev/stdin', '382921NwVerK', 'test', '52JyzfnO', '20wSClXE', 'trim', '18096krNgxG', 'length', '745RrtlGI', 'utf8', '8ZMzkSY', 'split', 'readFileSync', '556246ULSUKg', '49228bCArEg', '1919099FpIgpW'];
  __STRING_ARRAY__ = function () {
    return _0xafeae0;
  };
  return __STRING_ARRAY__();
}
var a = arr[0x0];
var b = arr[0x1];
var len = b[__DECODE_0__(0x1ee)] - 0x1;
var reg = new RegExp(b, 'g');
var ans = [];
while (reg[__DECODE_0__(0x200)](a)) {
  reg['lastIndex'] -= len;
  ans[__DECODE_0__(0x1fc)](reg[__DECODE_0__(0x1f7)] - 0x1);
}
if (ans[__DECODE_0__(0x1ee)] != 0x0) {
  console[__DECODE_0__(0x1f9)](ans['join']('\x0a'));
}
