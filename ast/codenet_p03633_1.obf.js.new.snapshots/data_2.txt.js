(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x128)) / 0x1 + -parseInt(__DECODE_0__(0x11f)) / 0x2 + parseInt(__DECODE_0__(0x121)) / 0x3 + parseInt(__DECODE_0__(0x125)) / 0x4 * (parseInt(__DECODE_0__(0x12c)) / 0x5) + -parseInt(__DECODE_0__(0x12b)) / 0x6 + -parseInt(__DECODE_0__(0x122)) / 0x7 + parseInt(__DECODE_0__(0x129)) / 0x8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x8c3a1);
log = console[__DECODE_0__(0x127)];
var stdin = require('fs')[__DECODE_0__(0x12a)]('/dev/stdin', __DECODE_0__(0x123));
var lines = stdin['split']('\x0a');
var N = lines[0x0][__DECODE_0__(0x126)]('\x20')['map'](Number)[0x0];
var T = lines['slice'](0x1)[__DECODE_0__(0x124)](v => v !== '')[__DECODE_0__(0x120)](Number);
function gcd(a, b) {
  if (b === 0x0) {
    return a;
  }
  return gcd(b, a % b);
}
function lcm(a, b) {
  return a * b / gcd(a, b);
}
function __DECODE_0__(KLJNYW, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x11f;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(KLJNYW, key);
}
for (var i = 0x1; i < N; i++) {
  T[i] = lcm(T[i], T[i - 0x1]);
}
log(T[N - 0x1]);
function __STRING_ARRAY__() {
  var _0x520ab3 = ['1024313VOIjtQ', '10045096BFzkJb', 'readFileSync', '6061650mGpZxA', '5bvCufR', '874032rBkpUI', 'map', '1818189klrJeb', '6079164hwwycG', 'UTF-8', 'filter', '16396fjhYZf', 'split', 'log'];
  __STRING_ARRAY__ = function () {
    return _0x520ab3;
  };
  return __STRING_ARRAY__();
}
