var a0_0x33eaec = __DECODE_0__;
function __DECODE_0__(ASBdjj, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1c1;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ASBdjj, key);
}
(function (stringArrayFunction, comparisonValue) {
  var _0x2b4850 = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(_0x2b4850(0x1c5)) / 0x1 * (parseInt(_0x2b4850(0x1ca)) / 0x2) + -parseInt(_0x2b4850(0x1c1)) / 0x3 * (parseInt(_0x2b4850(0x1c8)) / 0x4) + parseInt(_0x2b4850(0x1ce)) / 0x5 + parseInt(_0x2b4850(0x1cc)) / 0x6 * (parseInt(_0x2b4850(0x1c9)) / 0x7) + -parseInt(_0x2b4850(0x1c3)) / 0x8 * (-parseInt(_0x2b4850(0x1cd)) / 0x9) + parseInt(_0x2b4850(0x1cb)) / 0xa + -parseInt(_0x2b4850(0x1c4)) / 0xb * (parseInt(_0x2b4850(0x1c6)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x3e090);
var input = require('fs')['readFileSync']('/dev/stdin', a0_0x33eaec(0x1c2));
var str = input[a0_0x33eaec(0x1c7)]();
var a = ![];
var ans = '';
function __STRING_ARRAY__() {
  var _0x445d09 = ['433850spHHOW', '12sELrDO', 'utf8', '503224Owgjgr', '11WBnHre', '8VLqQlR', '1679076lBnrio', 'trim', '376260kqXTOo', '1985207djNTZw', '19348VZlgVF', '3514940VxHvwX', '6LnOTVl', '18PEcLkN'];
  __STRING_ARRAY__ = function () {
    return _0x445d09;
  };
  return __STRING_ARRAY__();
}
for (var i = 0x0; i < str['length']; i++) {
  if (str[i] == 'A') {
    a = !![];
  }
  if (str[i] == 'Z' && a == !![]) {
    a = ![];
    ans += 'AZ';
  }
}
if (ans == '') {
  ans = -0x1;
}
console['log'](ans);
