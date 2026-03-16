function __STRING_ARRAY__() {
  var _0x20b713 = ['657kcmzXi', '403752nFXczM', '152024gjRIYF', '4591390cAjWeB', 'log', '/dev/stdin', '27YWSepG', '7SZreYN', '3838134tVoNeG', '1675766qEWMOR', 'readFileSync', 'split', '128725DwbBWK', 'Bad', '18345100tkBftT'];
  __STRING_ARRAY__ = function () {
    return _0x20b713;
  };
  return __STRING_ARRAY__();
}
var a0_0x287e7b = __DECODE_0__;
function __DECODE_0__(kZITFe, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xae;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(kZITFe, key);
}
(function (stringArrayFunction, comparisonValue) {
  var _0x929460 = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(_0x929460(0xb9)) / 0x1 + parseInt(_0x929460(0xb6)) / 0x2 + parseInt(_0x929460(0xb3)) / 0x3 * (-parseInt(_0x929460(0xae)) / 0x4) + parseInt(_0x929460(0xb0)) / 0x5 + parseInt(_0x929460(0xb5)) / 0x6 * (-parseInt(_0x929460(0xb4)) / 0x7) + -parseInt(_0x929460(0xaf)) / 0x8 * (parseInt(_0x929460(0xbc)) / 0x9) + parseInt(_0x929460(0xbb)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xbf6ae);
function Main(input) {
  var _0x3a4644 = __DECODE_0__;
  input = input[_0x3a4644(0xb8)]('\x20');
  var tem = input;
  var beforeText = tem;
  var arr = String(tem)[_0x3a4644(0xb8)]('');
  var a = parseInt(arr[0x0], 0xa);
  var b = parseInt(arr[0x1], 0xa);
  var c = parseInt(arr[0x2], 0xa);
  var d = parseInt(arr[0x3], 0xa);
  if (a == b) {
    console[_0x3a4644(0xb1)](_0x3a4644(0xba));
  } else {
    if (b == c) {
      console[_0x3a4644(0xb1)](_0x3a4644(0xba));
    } else {
      if (c == d) {
        console['log'](_0x3a4644(0xba));
      } else {
        console['log']('Good');
      }
    }
  }
}
Main(require('fs')[a0_0x287e7b(0xb7)](a0_0x287e7b(0xb2), 'utf8'));
