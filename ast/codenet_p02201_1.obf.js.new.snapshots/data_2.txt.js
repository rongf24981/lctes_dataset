function __STRING_ARRAY__() {
  var _0x3ce3a8 = ['/dev/stdin', '7134192ObivlF', 'log', '24yvBkUx', 'shift', '108966WruWJi', '1234680djSYXl', '92540ZNoqDX', '584974xbaFZY', '42MJZXND', 'E869120', 'split', '630645lvjWwY', 'trim', '24irzTHO', '50bnhhbE', '1401296BmWuYB', 'utf8'];
  __STRING_ARRAY__ = function () {
    return _0x3ce3a8;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(VpbUsg, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x144;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(VpbUsg, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x14c)) / 0x1 + -parseInt(__DECODE_0__(0x14b)) / 0x2 * (parseInt(__DECODE_0__(0x152)) / 0x3) + parseInt(__DECODE_0__(0x154)) / 0x4 + -parseInt(__DECODE_0__(0x150)) / 0x5 * (parseInt(__DECODE_0__(0x147)) / 0x6) + parseInt(__DECODE_0__(0x14d)) / 0x7 * (parseInt(__DECODE_0__(0x14a)) / 0x8) + parseInt(__DECODE_0__(0x145)) / 0x9 + parseInt(__DECODE_0__(0x153)) / 0xa * (-parseInt(__DECODE_0__(0x149)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x88ae2);
var input = require('fs')['readFileSync'](__DECODE_0__(0x144), __DECODE_0__(0x155));
var arr = input[__DECODE_0__(0x151)]()[__DECODE_0__(0x14f)]('\x0a');
var n = arr[__DECODE_0__(0x148)]() - 0x0;
var cnt = 0x0;
arr['forEach'](v => {
  if (v == __DECODE_0__(0x14e)) {
    cnt++;
  }
});
console[__DECODE_0__(0x146)](cnt);
