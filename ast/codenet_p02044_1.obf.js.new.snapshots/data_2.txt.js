(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xa9)) / 0x1 + -parseInt(__DECODE_0__(0xab)) / 0x2 + -parseInt(__DECODE_0__(0xa8)) / 0x3 + -parseInt(__DECODE_0__(0xaa)) / 0x4 * (parseInt(__DECODE_0__(0xae)) / 0x5) + -parseInt(__DECODE_0__(0xaf)) / 0x6 * (-parseInt(__DECODE_0__(0xad)) / 0x7) + parseInt(__DECODE_0__(0xb6)) / 0x8 + -parseInt(__DECODE_0__(0xac)) / 0x9 * (-parseInt(__DECODE_0__(0xb3)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xb21be);
var input = require('fs')[__DECODE_0__(0xb1)](__DECODE_0__(0xb5), 'utf8');
var arr = input['trim']()[__DECODE_0__(0xb0)]('\x0a');
while (!![]) {
  var [n, m] = arr[__DECODE_0__(0xa7)]()[__DECODE_0__(0xb0)]('\x20')[__DECODE_0__(0xb2)](Number);
  if (n == 0x0 && m == 0x0) {
    break;
  }
  var x = m / n;
  var sum = 0x0;
  var a = arr[__DECODE_0__(0xa7)]()[__DECODE_0__(0xb0)]('\x20')['map'](Number);
  a['forEach'](v => {
    if (v >= x) {
      sum += x;
    } else {
      sum += v;
    }
  });
  console[__DECODE_0__(0xb4)](sum);
}
function __DECODE_0__(bmRiAL, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xa7;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(bmRiAL, key);
}
function __STRING_ARRAY__() {
  var _0x2930cc = ['3671656jySpmz', '1352456xffCTr', '9lrZvav', '154861auSPwp', '5HIZqeD', '12yYUNzn', 'split', 'readFileSync', 'map', '14318810MgoSkS', 'log', '/dev/stdin', '9990136cmLdxX', 'shift', '555531bVnqeq', '216041mCYLaZ'];
  __STRING_ARRAY__ = function () {
    return _0x2930cc;
  };
  return __STRING_ARRAY__();
}
