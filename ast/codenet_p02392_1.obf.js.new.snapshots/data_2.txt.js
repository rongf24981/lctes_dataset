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
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xbd)) / 0x1 * (-parseInt(__DECODE_0__(0xbf)) / 0x2) + -parseInt(__DECODE_0__(0xc3)) / 0x3 * (parseInt(__DECODE_0__(0xb6)) / 0x4) + -parseInt(__DECODE_0__(0xb7)) / 0x5 * (-parseInt(__DECODE_0__(0xc5)) / 0x6) + -parseInt(__DECODE_0__(0xbc)) / 0x7 + -parseInt(__DECODE_0__(0xc0)) / 0x8 * (-parseInt(__DECODE_0__(0xb5)) / 0x9) + -parseInt(__DECODE_0__(0xb9)) / 0xa * (parseInt(__DECODE_0__(0xbb)) / 0xb) + parseInt(__DECODE_0__(0xbe)) / 0xc;
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
process['stdin'][__DECODE_0__(0xb4)]();
process[__DECODE_0__(0xb8)][__DECODE_0__(0xc4)]('utf8');
process[__DECODE_0__(0xb8)]['on'](__DECODE_0__(0xc2), function (x) {
  var args = x['split']('\x20')['map'](Number);
  var a = args[0x0];
  var b = args[0x1];
  var c = args[0x2];
  console[__DECODE_0__(0xc1)]('%s', a < b && b < c ? __DECODE_0__(0xba) : 'No');
});
