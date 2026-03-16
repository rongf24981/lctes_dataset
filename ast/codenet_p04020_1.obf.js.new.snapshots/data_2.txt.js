function __DECODE_0__(NBxMer, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x86;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(NBxMer, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x8f)) / 0x1 + -parseInt(__DECODE_0__(0x8b)) / 0x2 + parseInt(__DECODE_0__(0x93)) / 0x3 * (parseInt(__DECODE_0__(0x96)) / 0x4) + -parseInt(__DECODE_0__(0x91)) / 0x5 + parseInt(__DECODE_0__(0x87)) / 0x6 * (-parseInt(__DECODE_0__(0x94)) / 0x7) + parseInt(__DECODE_0__(0x8e)) / 0x8 * (parseInt(__DECODE_0__(0x90)) / 0x9) + parseInt(__DECODE_0__(0x8d)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x7b9cf);
function myout(text) {
  console[__DECODE_0__(0x88)](text);
}
function Main(input) {
  input = input[__DECODE_0__(0x86)]()[__DECODE_0__(0x8c)]('\x0a')[__DECODE_0__(0x89)](a => Number(a));
  var len = input[0x0];
  var output = 0x0;
  input['shift']();
  for (var i = 0x0; i < len; i++) {
    if (i == len - 0x1) {
      output += Math[__DECODE_0__(0x8a)](input[i] / 0x2);
    } else {
      if (input[i] != 0x0) {
        if (input[i + 0x1] != 0x0) {
          var tmp = Math[__DECODE_0__(0x95)](input[i], input[i + 0x1]);
          output += tmp;
          input[i] -= tmp;
          input[i + 0x1] -= tmp;
          if (input[i] >= 0x2) {
            output += Math['floor'](input[i] / 0x2);
          }
        } else {
          output += Math[__DECODE_0__(0x8a)](input[i] / 0x2);
        }
      }
    }
  }
  myout(output);
}
function __STRING_ARRAY__() {
  var _0x1f282f = ['8552930EzRrvR', '8rbTkAO', '528661EmrwzU', '2691594RhNnfl', '303150oiDrDF', 'utf8', '1083447iHNjwN', '29463JRGbSZ', 'min', '8kyawhA', 'trim', '198DgUTgy', 'log', 'map', 'floor', '1284300trMDhx', 'split'];
  __STRING_ARRAY__ = function () {
    return _0x1f282f;
  };
  return __STRING_ARRAY__();
}
Main(require('fs')['readFileSync']('/dev/stdin', __DECODE_0__(0x92))['trim']());
