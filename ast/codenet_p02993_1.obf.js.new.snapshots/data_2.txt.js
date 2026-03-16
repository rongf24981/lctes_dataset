function __STRING_ARRAY__() {
  var _0x20b713 = ['657kcmzXi', '403752nFXczM', '152024gjRIYF', '4591390cAjWeB', 'log', '/dev/stdin', '27YWSepG', '7SZreYN', '3838134tVoNeG', '1675766qEWMOR', 'readFileSync', 'split', '128725DwbBWK', 'Bad', '18345100tkBftT'];
  __STRING_ARRAY__ = function () {
    return _0x20b713;
  };
  return __STRING_ARRAY__();
}
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
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xb9)) / 0x1 + parseInt(__DECODE_0__(0xb6)) / 0x2 + parseInt(__DECODE_0__(0xb3)) / 0x3 * (-parseInt(__DECODE_0__(0xae)) / 0x4) + parseInt(__DECODE_0__(0xb0)) / 0x5 + parseInt(__DECODE_0__(0xb5)) / 0x6 * (-parseInt(__DECODE_0__(0xb4)) / 0x7) + -parseInt(__DECODE_0__(0xaf)) / 0x8 * (parseInt(__DECODE_0__(0xbc)) / 0x9) + parseInt(__DECODE_0__(0xbb)) / 0xa;
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
  input = input[__DECODE_0__(0xb8)]('\x20');
  var tem = input;
  var beforeText = tem;
  var arr = String(tem)[__DECODE_0__(0xb8)]('');
  var a = parseInt(arr[0x0], 0xa);
  var b = parseInt(arr[0x1], 0xa);
  var c = parseInt(arr[0x2], 0xa);
  var d = parseInt(arr[0x3], 0xa);
  if (a == b) {
    console[__DECODE_0__(0xb1)](__DECODE_0__(0xba));
  } else {
    if (b == c) {
      console[__DECODE_0__(0xb1)](__DECODE_0__(0xba));
    } else {
      if (c == d) {
        console['log'](__DECODE_0__(0xba));
      } else {
        console['log']('Good');
      }
    }
  }
}
Main(require('fs')[__DECODE_0__(0xb7)](__DECODE_0__(0xb2), 'utf8'));
