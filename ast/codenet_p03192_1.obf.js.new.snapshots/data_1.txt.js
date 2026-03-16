var a0_0x25e9fd = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x1d3047 = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(_0x1d3047(0x98)) / 0x1 * (parseInt(_0x1d3047(0x91)) / 0x2) + -parseInt(_0x1d3047(0x87)) / 0x3 + -parseInt(_0x1d3047(0x8d)) / 0x4 * (parseInt(_0x1d3047(0x8e)) / 0x5) + -parseInt(_0x1d3047(0x92)) / 0x6 + -parseInt(_0x1d3047(0x94)) / 0x7 * (parseInt(_0x1d3047(0x88)) / 0x8) + -parseInt(_0x1d3047(0x8b)) / 0x9 * (-parseInt(_0x1d3047(0x8a)) / 0xa) + parseInt(_0x1d3047(0x93)) / 0xb;
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
  var _0x23f07a = __DECODE_0__;
  input = input['split']('\x0a');
  S = input[0x0][_0x23f07a(0x96)]('');
  var ans = 0x0;
  for (i = 0x0; i < S['length']; i++) {
    if (S[i] == '2') {
      ans++;
    }
  }
  console[_0x23f07a(0x90)]('%s', ans);
}
function __STRING_ARRAY__() {
  var _0x222f47 = ['utf8', 'split', 'value', '192419myHTfD', '1827093uGKcIS', '2253312XZcPve', 'readFileSync', '1709530IFGJLC', '9eWDzfU', 'getElementById', '732rlrLzJ', '27290Oadkfp', 'input', 'log', '2YwmtEc', '961782oDAZBy', '31420532FJVtOb', '21nSRtcG'];
  __STRING_ARRAY__ = function () {
    return _0x222f47;
  };
  return __STRING_ARRAY__();
}
function debug() {
  var _0x5abcd0 = __DECODE_0__;
  var input = document[_0x5abcd0(0x8c)](_0x5abcd0(0x8f))[_0x5abcd0(0x97)];
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
Main(require('fs')[a0_0x25e9fd(0x89)]('/dev/stdin', a0_0x25e9fd(0x95)));
