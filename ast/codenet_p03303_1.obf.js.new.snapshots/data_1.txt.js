var a0_0x57de70 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x58f40a = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(_0x58f40a(0xe9)) / 0x1 + -parseInt(_0x58f40a(0xed)) / 0x2 + parseInt(_0x58f40a(0xe0)) / 0x3 * (-parseInt(_0x58f40a(0xe4)) / 0x4) + -parseInt(_0x58f40a(0xf2)) / 0x5 * (-parseInt(_0x58f40a(0xe3)) / 0x6) + -parseInt(_0x58f40a(0xea)) / 0x7 + -parseInt(_0x58f40a(0xf0)) / 0x8 * (parseInt(_0x58f40a(0xee)) / 0x9) + -parseInt(_0x58f40a(0xeb)) / 0xa * (-parseInt(_0x58f40a(0xef)) / 0xb);
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
  var _0xa1d5bc = __DECODE_0__;
  console[_0xa1d5bc(0xe6)](text);
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
  var _0x1aaa52 = __DECODE_0__;
  input = input[_0x1aaa52(0xec)]('\x0a');
  var S = input[0x0];
  var w = parseInt(input[0x1]);
  if (w == 0x1) {
    myout(S);
    return;
  }
  S = S[_0x1aaa52(0xec)]('');
  var list = [];
  while (S[_0x1aaa52(0xe8)] != 0x0) {
    var tmp = '';
    for (var i = 0x0; i < w; i++) {
      if (S[_0x1aaa52(0xe8)] != 0x0) {
        tmp += S[_0x1aaa52(0xe5)]();
      }
    }
    list['push'](tmp);
  }
  var output = '';
  for (var i = 0x0; i < list[_0x1aaa52(0xe8)]; i++) {
    output += list[i][_0x1aaa52(0xe7)](0x0, 0x1);
  }
  myout(output);
}
Main(require('fs')[a0_0x57de70(0xe1)]('/dev/stdin', a0_0x57de70(0xf1))[a0_0x57de70(0xe2)]());
