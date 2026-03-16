function __STRING_ARRAY__() {
  var _0x5c3599 = ['5247942WsHOYJ', '2734395oiMcDI', '4213440QHrGhi', '739437lAbeVu', '301383XWpGtX', '/dev/stdin', '376rtOWfN', '6982129prUWkk', 'readFileSync', 'log', '35330WWXubJ', '15pwLGtp', 'utf8', 'trim'];
  __STRING_ARRAY__ = function () {
    return _0x5c3599;
  };
  return __STRING_ARRAY__();
}
var a0_0xc98220 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x4908ab = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(_0x4908ab(0x1d7)) / 0x1 + parseInt(_0x4908ab(0x1de)) / 0x2 * (parseInt(_0x4908ab(0x1d1)) / 0x3) + -parseInt(_0x4908ab(0x1d6)) / 0x4 + parseInt(_0x4908ab(0x1d5)) / 0x5 + -parseInt(_0x4908ab(0x1d4)) / 0x6 + parseInt(_0x4908ab(0x1db)) / 0x7 + -parseInt(_0x4908ab(0x1da)) / 0x8 * (-parseInt(_0x4908ab(0x1d8)) / 0x9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x839ce);
function main(input) {
  var _0x313f6c = __DECODE_0__;
  var n = input[0x0] - 0x0;
  var cnt = 0x1;
  var ans = 0x0;
  for (cnt = 0x1; ans < n; cnt++) {
    ans += cnt;
  }
  console[_0x313f6c(0x1dd)](cnt - 0x1);
}
function __DECODE_0__(tyyGtb, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1d1;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(tyyGtb, key);
}
main(require('fs')[a0_0xc98220(0x1dc)](a0_0xc98220(0x1d9), a0_0xc98220(0x1d2))[a0_0xc98220(0x1d3)]()['split']('\x0a'));
