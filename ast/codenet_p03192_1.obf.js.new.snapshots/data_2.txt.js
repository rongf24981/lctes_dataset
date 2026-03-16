(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x98)) / 0x1 * (parseInt(__DECODE_0__(0x91)) / 0x2) + -parseInt(__DECODE_0__(0x87)) / 0x3 + -parseInt(__DECODE_0__(0x8d)) / 0x4 * (parseInt(__DECODE_0__(0x8e)) / 0x5) + -parseInt(__DECODE_0__(0x92)) / 0x6 + -parseInt(__DECODE_0__(0x94)) / 0x7 * (parseInt(__DECODE_0__(0x88)) / 0x8) + -parseInt(__DECODE_0__(0x8b)) / 0x9 * (-parseInt(__DECODE_0__(0x8a)) / 0xa) + parseInt(__DECODE_0__(0x93)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x941ba);
function Main(input) {
  input = input['split']('\x0a');
  S = input[0x0][__DECODE_0__(0x96)]('');
  var ans = 0x0;
  for (i = 0x0; i < S['length']; i++) {
    if (S[i] == '2') {
      ans++;
    }
  }
  console[__DECODE_0__(0x90)]('%s', ans);
}
function __STRING_ARRAY__() {
  var _0x222f47 = ['utf8', 'split', 'value', '192419myHTfD', '1827093uGKcIS', '2253312XZcPve', 'readFileSync', '1709530IFGJLC', '9eWDzfU', 'getElementById', '732rlrLzJ', '27290Oadkfp', 'input', 'log', '2YwmtEc', '961782oDAZBy', '31420532FJVtOb', '21nSRtcG'];
  __STRING_ARRAY__ = function () {
    return _0x222f47;
  };
  return __STRING_ARRAY__();
}
function debug() {
  var input = document[__DECODE_0__(0x8c)](__DECODE_0__(0x8f))[__DECODE_0__(0x97)];
  Main(input);
}
function __DECODE_0__(ONkaXC, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x87;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ONkaXC, key);
}
Main(require('fs')[__DECODE_0__(0x89)]('/dev/stdin', __DECODE_0__(0x95)));
