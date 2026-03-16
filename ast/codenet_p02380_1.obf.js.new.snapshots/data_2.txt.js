function __STRING_ARRAY__() {
  var _0x45b2e3 = ['26265888tzgCpB', 'stdin', 'line', '1215PzzsmL', 'cos', '420092dkgXja', '87945lQwyjd', 'readline', 'exit', 'sin', 'log', 'end', '6328896IOtazM', 'sqrt', '7364240KcePEi', 'split', '4jUTiwZ', '19062aiqiug', 'toFixed', '496334tpmcMr'];
  __STRING_ARRAY__ = function () {
    return _0x45b2e3;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x1f7)) / 0x1 + -parseInt(__DECODE_0__(0x1f1)) / 0x2 + parseInt(__DECODE_0__(0x1f8)) / 0x3 * (parseInt(__DECODE_0__(0x1ee)) / 0x4) + parseInt(__DECODE_0__(0x1f5)) / 0x5 * (-parseInt(__DECODE_0__(0x1ef)) / 0x6) + -parseInt(__DECODE_0__(0x1fe)) / 0x7 + -parseInt(__DECODE_0__(0x200)) / 0x8 + parseInt(__DECODE_0__(0x1f2)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x7fafb);
var reader = require(__DECODE_0__(0x1f9))['createInterface']({
  'input': process[__DECODE_0__(0x1f3)],
  'output': process['stdout']
});
function __DECODE_0__(xUpqaZ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1ee;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(xUpqaZ, key);
}
reader['on'](__DECODE_0__(0x1f4), function (line) {
  var rad;
  var a;
  var S;
  var L;
  var h;
  var e = line[__DECODE_0__(0x201)]('\x20');
  var b = Number(e[0x0]);
  var c = Number(e[0x1]);
  var d = Number(e[0x2]);
  rad = d / 0xb4 * Math['PI'];
  a = Math[__DECODE_0__(0x1ff)](b * b + c * c - 0x2 * b * c * Math[__DECODE_0__(0x1f6)](rad));
  S = b * c * Math[__DECODE_0__(0x1fb)](rad) / 0x2;
  L = a + b + c;
  h = b * c * Math[__DECODE_0__(0x1fb)](rad) / b;
  console[__DECODE_0__(0x1fc)](S[__DECODE_0__(0x1f0)](0x8));
  console['log'](L[__DECODE_0__(0x1f0)](0x8));
  console[__DECODE_0__(0x1fc)](h[__DECODE_0__(0x1f0)](0x8));
  process[__DECODE_0__(0x1fa)]();
});
process[__DECODE_0__(0x1f3)]['on'](__DECODE_0__(0x1fd), function () {});
