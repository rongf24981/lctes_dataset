function __DECODE_0__(sCptCx, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1c9;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(sCptCx, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x1d0)) / 0x1 + parseInt(__DECODE_0__(0x1d5)) / 0x2 * (parseInt(__DECODE_0__(0x1d1)) / 0x3) + -parseInt(__DECODE_0__(0x1cc)) / 0x4 + parseInt(__DECODE_0__(0x1ce)) / 0x5 * (parseInt(__DECODE_0__(0x1c9)) / 0x6) + parseInt(__DECODE_0__(0x1d6)) / 0x7 + -parseInt(__DECODE_0__(0x1d3)) / 0x8 * (-parseInt(__DECODE_0__(0x1cf)) / 0x9) + -parseInt(__DECODE_0__(0x1cb)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xb6a99);
j = 0x0;
i = require('fs')[__DECODE_0__(0x1ca)]('/dev/stdin', 'utf8')[__DECODE_0__(0x1d4)](/\s/);
for (; a = +i[j++], b = +i[j++], c = +i[j++], d = +i[j++], e = +i[j++], f = +i[j++], g = +i[j++], h = +i[j++];) {
  console[__DECODE_0__(0x1cd)](+a <= g & e <= c & b <= h & f <= d ? __DECODE_0__(0x1d2) : 'NO');
}
function __STRING_ARRAY__() {
  var _0x56e85a = ['430316RBmKbM', 'log', '3235YvHxlO', '260433pRFpMX', '1379692LQBjEZ', '63OCqTrB', 'YES', '352MdLqOG', 'split', '131902yHEFnn', '4527047uaIVNl', '11274BKCajA', 'readFileSync', '50445610TLEOpD'];
  __STRING_ARRAY__ = function () {
    return _0x56e85a;
  };
  return __STRING_ARRAY__();
}
