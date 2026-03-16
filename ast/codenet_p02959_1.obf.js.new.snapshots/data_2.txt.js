(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xf6)) / 0x1 + -parseInt(__DECODE_0__(0xfb)) / 0x2 + parseInt(__DECODE_0__(0xfd)) / 0x3 * (-parseInt(__DECODE_0__(0xee)) / 0x4) + -parseInt(__DECODE_0__(0xf5)) / 0x5 * (-parseInt(__DECODE_0__(0xfc)) / 0x6) + parseInt(__DECODE_0__(0x100)) / 0x7 * (parseInt(__DECODE_0__(0xf3)) / 0x8) + parseInt(__DECODE_0__(0xfe)) / 0x9 * (-parseInt(__DECODE_0__(0xff)) / 0xa) + -parseInt(__DECODE_0__(0xf8)) / 0xb * (-parseInt(__DECODE_0__(0xf9)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x70bd6);
function Main(input) {
  input = input[__DECODE_0__(0xf4)]('\x0a');
  var n = parseInt(input[0x0], 0xa);
  var a = input[0x1][__DECODE_0__(0xf4)]('\x20');
  a = a['map'](str => parseInt(str, 0xa));
  var b = input[0x2]['split']('\x20');
  b = b[__DECODE_0__(0xf7)](str => parseInt(str, 0xa));
  var count = 0x0;
  for (var i = 0x0; i < n; i++) {
    var atarget = a[i] + a[i + 0x1];
    var rest = atarget - b[i];
    if (rest < 0x0) {
      count += atarget;
      a[i + 0x1] = 0x0;
    } else {
      count += b[i];
      a[i + 0x1] = Math[__DECODE_0__(0xf2)](rest, a[i + 0x1]);
    }
  }
  console[__DECODE_0__(0xf0)](count);
}
function __DECODE_0__(ouJQhi, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xee;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ouJQhi, key);
}
function __STRING_ARRAY__() {
  var _0x1546e5 = ['utf8', 'log', 'readFileSync', 'min', '1392lwBpKY', 'split', '5HOxmjo', '684720kUGrYq', 'map', '814gzDxIl', '27708IrqfbJ', '/dev/stdin', '786470nrQMCA', '3454698gUhEBB', '1528971psbseb', '99BrOFbA', '217390VPQjWH', '6937dBjtEx', '4dXioXM'];
  __STRING_ARRAY__ = function () {
    return _0x1546e5;
  };
  return __STRING_ARRAY__();
}
Main(require('fs')[__DECODE_0__(0xf1)](__DECODE_0__(0xfa), __DECODE_0__(0xef)));
