(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x112)) / 0x1 * (-parseInt(__DECODE_0__(0x104)) / 0x2) + parseInt(__DECODE_0__(0x114)) / 0x3 + parseInt(__DECODE_0__(0x10f)) / 0x4 + -parseInt(__DECODE_0__(0x10e)) / 0x5 * (parseInt(__DECODE_0__(0x10b)) / 0x6) + parseInt(__DECODE_0__(0x105)) / 0x7 * (parseInt(__DECODE_0__(0x106)) / 0x8) + parseInt(__DECODE_0__(0x111)) / 0x9 * (-parseInt(__DECODE_0__(0x10a)) / 0xa) + parseInt(__DECODE_0__(0x10d)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xc72ee);
var input = require('fs')[__DECODE_0__(0x109)](__DECODE_0__(0x113), __DECODE_0__(0x115));
var lines = input[__DECODE_0__(0x10c)]()['split'](/\n/g);
var n = +lines[0x0]['split']('\x20')[0x0];
function __STRING_ARRAY__() {
  var _0x50c523 = ['158920yFbMYA', 'split', 'log', 'readFileSync', '10583230hGeKOo', '214572ZdNNAZ', 'trim', '12039786UnJpjy', '215hTeRMJ', '2074784XpUBeZ', 'slice', '9TjlVgy', '59531PrJOsr', '/dev/stdin', '1584963dibnsy', 'utf8', '30pOYOeG', '133lBVYfb'];
  __STRING_ARRAY__ = function () {
    return _0x50c523;
  };
  return __STRING_ARRAY__();
}
var m = +lines[0x0][__DECODE_0__(0x107)]('\x20')[0x1];
var A = lines[__DECODE_0__(0x110)](0x1, m);
function __DECODE_0__(psbqDV, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x104;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(psbqDV, key);
}
var b = lines[__DECODE_0__(0x110)](m, m + m);
var ans;
for (var i = 0x0; i < n; i++) {
  ans = 0x0;
  for (var j = 0x0; j < m; j++) {
    ans += A[i][__DECODE_0__(0x107)]('\x20')[j] * b[j];
  }
  console[__DECODE_0__(0x108)](ans);
}
