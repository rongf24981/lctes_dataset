function __STRING_ARRAY__() {
  var _0x45b2e3 = ['26265888tzgCpB', 'stdin', 'line', '1215PzzsmL', 'cos', '420092dkgXja', '87945lQwyjd', 'readline', 'exit', 'sin', 'log', 'end', '6328896IOtazM', 'sqrt', '7364240KcePEi', 'split', '4jUTiwZ', '19062aiqiug', 'toFixed', '496334tpmcMr'];
  __STRING_ARRAY__ = function () {
    return _0x45b2e3;
  };
  return __STRING_ARRAY__();
}
var a0_0xb17b5c = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x23dfc8 = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(_0x23dfc8(0x1f7)) / 0x1 + -parseInt(_0x23dfc8(0x1f1)) / 0x2 + parseInt(_0x23dfc8(0x1f8)) / 0x3 * (parseInt(_0x23dfc8(0x1ee)) / 0x4) + parseInt(_0x23dfc8(0x1f5)) / 0x5 * (-parseInt(_0x23dfc8(0x1ef)) / 0x6) + -parseInt(_0x23dfc8(0x1fe)) / 0x7 + -parseInt(_0x23dfc8(0x200)) / 0x8 + parseInt(_0x23dfc8(0x1f2)) / 0x9;
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
var reader = require(a0_0xb17b5c(0x1f9))['createInterface']({
  'input': process[a0_0xb17b5c(0x1f3)],
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
reader['on'](a0_0xb17b5c(0x1f4), function (line) {
  var _0x1b6413 = a0_0xb17b5c;
  var rad;
  var a;
  var S;
  var L;
  var h;
  var e = line[_0x1b6413(0x201)]('\x20');
  var b = Number(e[0x0]);
  var c = Number(e[0x1]);
  var d = Number(e[0x2]);
  rad = d / 0xb4 * Math['PI'];
  a = Math[_0x1b6413(0x1ff)](b * b + c * c - 0x2 * b * c * Math[_0x1b6413(0x1f6)](rad));
  S = b * c * Math[_0x1b6413(0x1fb)](rad) / 0x2;
  L = a + b + c;
  h = b * c * Math[_0x1b6413(0x1fb)](rad) / b;
  console[_0x1b6413(0x1fc)](S[_0x1b6413(0x1f0)](0x8));
  console['log'](L[_0x1b6413(0x1f0)](0x8));
  console[_0x1b6413(0x1fc)](h[_0x1b6413(0x1f0)](0x8));
  process[_0x1b6413(0x1fa)]();
});
process[a0_0xb17b5c(0x1f3)]['on'](a0_0xb17b5c(0x1fd), function () {});
