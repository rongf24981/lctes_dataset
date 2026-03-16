function __DECODE_0__(BpMVYS, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xb4;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(BpMVYS, key);
}
function __STRING_ARRAY__() {
  var _0x39ab32 = ['3QzmtOm', 'setEncoding', '174FSYNYs', 'resume', '6480rjemPI', '7066532lqmgUa', '271315dDVRqm', 'stdin', '10mCDSOr', 'Yes', '7029176oXSOXd', '13229216cFNyKv', '11Jskyns', '4305132QxeOUa', '306214ehsIhh', '18152IpDFAK', 'log', 'data'];
  __STRING_ARRAY__ = function () {
    return _0x39ab32;
  };
  return __STRING_ARRAY__();
}
var a0_0x3eb81b = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x50b090 = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(_0x50b090(0xbd)) / 0x1 * (-parseInt(_0x50b090(0xbf)) / 0x2) + -parseInt(_0x50b090(0xc3)) / 0x3 * (parseInt(_0x50b090(0xb6)) / 0x4) + -parseInt(_0x50b090(0xb7)) / 0x5 * (-parseInt(_0x50b090(0xc5)) / 0x6) + -parseInt(_0x50b090(0xbc)) / 0x7 + -parseInt(_0x50b090(0xc0)) / 0x8 * (-parseInt(_0x50b090(0xb5)) / 0x9) + -parseInt(_0x50b090(0xb9)) / 0xa * (parseInt(_0x50b090(0xbb)) / 0xb) + parseInt(_0x50b090(0xbe)) / 0xc;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xe9154);
process['stdin'][a0_0x3eb81b(0xb4)]();
process[a0_0x3eb81b(0xb8)][a0_0x3eb81b(0xc4)]('utf8');
process[a0_0x3eb81b(0xb8)]['on'](a0_0x3eb81b(0xc2), function (x) {
  var _0x1fabc9 = a0_0x3eb81b;
  var args = x['split']('\x20')['map'](Number);
  var a = args[0x0];
  var b = args[0x1];
  var c = args[0x2];
  console[_0x1fabc9(0xc1)]('%s', a < b && b < c ? _0x1fabc9(0xba) : 'No');
});
