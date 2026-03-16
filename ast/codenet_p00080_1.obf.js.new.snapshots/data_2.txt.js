(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x7e)) / 0x1 + parseInt(__DECODE_0__(0x82)) / 0x2 + parseInt(__DECODE_0__(0x79)) / 0x3 * (parseInt(__DECODE_0__(0x78)) / 0x4) + -parseInt(__DECODE_0__(0x75)) / 0x5 * (-parseInt(__DECODE_0__(0x76)) / 0x6) + -parseInt(__DECODE_0__(0x77)) / 0x7 * (parseInt(__DECODE_0__(0x7c)) / 0x8) + parseInt(__DECODE_0__(0x7b)) / 0x9 + -parseInt(__DECODE_0__(0x85)) / 0xa * (parseInt(__DECODE_0__(0x7a)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x997ce);
function __DECODE_0__(VLvPTY, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x74;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(VLvPTY, key);
}
var input = require('fs')[__DECODE_0__(0x7d)](__DECODE_0__(0x81), __DECODE_0__(0x7f));
function __STRING_ARRAY__() {
  var _0x4d7251 = ['utf8', 'abs', '/dev/stdin', '1931098GrdUCH', 'pow', 'log', '5460330VTzSYg', 'toFixed', '2331365pqxQTt', '12WetPHb', '309771dTIAOC', '164BCvfmT', '54426qhcRgP', '11NiAzrT', '871308JwdUlY', '184DvhzDC', 'readFileSync', '546191VUDaFC'];
  __STRING_ARRAY__ = function () {
    return _0x4d7251;
  };
  return __STRING_ARRAY__();
}
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
  var Q = Arr['shift']() - 0x0;
  if (Q == -0x1) {
    break;
  }
  var x = Q / 0x2;
  while (Math[__DECODE_0__(0x80)](Math[__DECODE_0__(0x83)](x, 0x3) - Q) >= 0.00001 * Q) {
    x = x - (Math[__DECODE_0__(0x83)](x, 0x3) - Q) / (0x3 * Math[__DECODE_0__(0x83)](x, 0x2));
  }
  console[__DECODE_0__(0x84)](x[__DECODE_0__(0x74)](0x6));
}
