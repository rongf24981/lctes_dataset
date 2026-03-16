var a0_0x20068c = __DECODE_0__;
function __DECODE_0__(YVqzdv, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1c6;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(YVqzdv, key);
}
(function (stringArrayFunction, comparisonValue) {
  var _0xc4386b = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(_0xc4386b(0x1cc)) / 0x1 + parseInt(_0xc4386b(0x1cb)) / 0x2 + parseInt(_0xc4386b(0x1d3)) / 0x3 * (-parseInt(_0xc4386b(0x1c8)) / 0x4) + -parseInt(_0xc4386b(0x1c9)) / 0x5 * (parseInt(_0xc4386b(0x1d2)) / 0x6) + -parseInt(_0xc4386b(0x1d5)) / 0x7 + parseInt(_0xc4386b(0x1d0)) / 0x8 * (-parseInt(_0xc4386b(0x1cd)) / 0x9) + parseInt(_0xc4386b(0x1ce)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xcc48a);
function __STRING_ARRAY__() {
  var _0xce5d45 = ['487917KBQkHd', '515052pOhpKH', '41835980FGWlrx', 'sort', '136hBictq', '/dev/stdin', '8217366eXbWIj', '1088187lsxbZZ', 'abs', '9756775nwQKsD', 'trim', 'log', '4vDKXbo', '5itYBIY', 'utf8', '528444oIPQzq'];
  __STRING_ARRAY__ = function () {
    return _0xce5d45;
  };
  return __STRING_ARRAY__();
}
var input = require('fs')['readFileSync'](a0_0x20068c(0x1d1), a0_0x20068c(0x1ca));
var arr = input[a0_0x20068c(0x1c6)]()['split']('\x20')['map'](Number);
var [a, b, c, d] = arr[a0_0x20068c(0x1cf)]((a, b) => b - a);
console[a0_0x20068c(0x1c7)](Math[a0_0x20068c(0x1d4)](a + d - (b + c)));
