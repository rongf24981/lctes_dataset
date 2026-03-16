(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xeb)) / 0x1 + -parseInt(__DECODE_0__(0xf0)) / 0x2 * (parseInt(__DECODE_0__(0xf9)) / 0x3) + parseInt(__DECODE_0__(0xe9)) / 0x4 + parseInt(__DECODE_0__(0xf3)) / 0x5 + parseInt(__DECODE_0__(0xf2)) / 0x6 * (parseInt(__DECODE_0__(0xee)) / 0x7) + -parseInt(__DECODE_0__(0xe8)) / 0x8 + parseInt(__DECODE_0__(0xef)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x4c98e);
function __STRING_ARRAY__() {
  var _0x2661f6 = ['substr', 'sort', 'map', 'parseInt', '3TzIOew', '2738744bFEuIl', '506688eVUOsr', 'utf8', '43276SAvUlq', 'split', 'log', '346703ZJLmQJ', '2457900SAgjsk', '642826ewaSiN', 'readFileSync', '42FVfHMk', '938735nMifGz', '0000000000'];
  __STRING_ARRAY__ = function () {
    return _0x2661f6;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(TKDBuf, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xe8;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(TKDBuf, key);
}
function Main(input) {
  input = input[__DECODE_0__(0xec)]('\x0a');
  inputStr = input[0x0][__DECODE_0__(0xec)]('\x20');
  var N = Number['parseInt'](inputStr[0x0]);
  var M = Number[__DECODE_0__(0xf8)](inputStr[0x1]);
  var tmp = [];
  var array = [];
  var buycnt = 0x0;
  var okane = 0x0;
  var mokori = M;
  for (i = 0x0; i < N; i++) {
    tmp = input[i + 0x1]['split']('\x20');
    array[i] = tmp[__DECODE_0__(0xf7)](tmp => parseInt(tmp, 0xa));
    array[i][0x0] = (__DECODE_0__(0xf4) + array[i][0x0])[__DECODE_0__(0xf5)](-0xa);
  }
  array[__DECODE_0__(0xf6)]();
  for (i = 0x0; i < N; i++) {
    if (mokori > parseInt(array[i][0x1])) {
      okane += parseInt(array[i][0x0]) * parseInt(array[i][0x1]);
      mokori -= parseInt(array[i][0x1]);
    } else {
      okane += parseInt(array[i][0x0]) * mokori;
      break;
    }
  }
  console[__DECODE_0__(0xed)](okane);
}
Main(require('fs')[__DECODE_0__(0xf1)]('/dev/stdin', __DECODE_0__(0xea)));
