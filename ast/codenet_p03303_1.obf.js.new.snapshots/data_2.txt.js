(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xe9)) / 0x1 + -parseInt(__DECODE_0__(0xed)) / 0x2 + parseInt(__DECODE_0__(0xe0)) / 0x3 * (-parseInt(__DECODE_0__(0xe4)) / 0x4) + -parseInt(__DECODE_0__(0xf2)) / 0x5 * (-parseInt(__DECODE_0__(0xe3)) / 0x6) + -parseInt(__DECODE_0__(0xea)) / 0x7 + -parseInt(__DECODE_0__(0xf0)) / 0x8 * (parseInt(__DECODE_0__(0xee)) / 0x9) + -parseInt(__DECODE_0__(0xeb)) / 0xa * (-parseInt(__DECODE_0__(0xef)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xe4de2);
function myout(text) {
  console[__DECODE_0__(0xe6)](text);
}
function __STRING_ARRAY__() {
  var _0x629cab = ['18kmeIBD', '4048429BzQcva', '5517248byqizS', 'utf8', '10MYgFCU', '9aDplTT', 'readFileSync', 'trim', '3867492qjNpQZ', '374564nUYYFs', 'shift', 'log', 'slice', 'length', '1845131JtnbeM', '4409097nGpVre', '120XffkFp', 'split', '1265906XWiFsY'];
  __STRING_ARRAY__ = function () {
    return _0x629cab;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(XWRRZc, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xe0;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(XWRRZc, key);
}
function Main(input) {
  input = input[__DECODE_0__(0xec)]('\x0a');
  var S = input[0x0];
  var w = parseInt(input[0x1]);
  if (w == 0x1) {
    myout(S);
    return;
  }
  S = S[__DECODE_0__(0xec)]('');
  var list = [];
  while (S[__DECODE_0__(0xe8)] != 0x0) {
    var tmp = '';
    for (var i = 0x0; i < w; i++) {
      if (S[__DECODE_0__(0xe8)] != 0x0) {
        tmp += S[__DECODE_0__(0xe5)]();
      }
    }
    list['push'](tmp);
  }
  var output = '';
  for (var i = 0x0; i < list[__DECODE_0__(0xe8)]; i++) {
    output += list[i][__DECODE_0__(0xe7)](0x0, 0x1);
  }
  myout(output);
}
Main(require('fs')[__DECODE_0__(0xe1)]('/dev/stdin', __DECODE_0__(0xf1))[__DECODE_0__(0xe2)]());
