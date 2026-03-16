function __DECODE_0__(XmmFzO, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x11a;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(XmmFzO, key);
}
function __STRING_ARRAY__() {
  var _0x5e5585 = ['7596yAGKFs', '576275WKEAER', '66nwunIY', 'length', '298502tupxhB', 'readFileSync', '201278NcWcEf', '44DBOMPM', 'trim', '6391FCHzdn', '1070ctPEQr', '4184wNMGCN', 'utf8', '744410IcuPJG', '/dev/stdin', '55149HMcnKW'];
  __STRING_ARRAY__ = function () {
    return _0x5e5585;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x11e)) / 0x1 + parseInt(__DECODE_0__(0x127)) / 0x2 + -parseInt(__DECODE_0__(0x129)) / 0x3 * (parseInt(__DECODE_0__(0x121)) / 0x4) + parseInt(__DECODE_0__(0x11b)) / 0x5 + -parseInt(__DECODE_0__(0x11c)) / 0x6 * (-parseInt(__DECODE_0__(0x120)) / 0x7) + parseInt(__DECODE_0__(0x125)) / 0x8 * (-parseInt(__DECODE_0__(0x11a)) / 0x9) + -parseInt(__DECODE_0__(0x124)) / 0xa * (parseInt(__DECODE_0__(0x123)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x60cb0);
function myout(text) {
  console['log'](text);
}
function Main(input) {
  input = parseInt(input[__DECODE_0__(0x122)]());
  var check = [0x0, 0x6f, 0xde, 0x14d, 0x1bc, 0x22b, 0x29a, 0x309, 0x378, 0x3e7];
  for (var i = 0x0; i < check[__DECODE_0__(0x11d)] - 0x1; i++) {
    if (check[i] < input && check[i + 0x1] > input) {
      myout(check[i + 0x1]);
      return;
    } else {
      if (check[i] == input) {
        myout(check[i]);
        return;
      }
    }
  }
}
Main(require('fs')[__DECODE_0__(0x11f)](__DECODE_0__(0x128), __DECODE_0__(0x126)));
