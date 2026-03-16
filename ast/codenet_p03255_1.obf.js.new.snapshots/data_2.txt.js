(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x16c)) / 0x1 + parseInt(__DECODE_0__(0x168)) / 0x2 * (parseInt(__DECODE_0__(0x162)) / 0x3) + -parseInt(__DECODE_0__(0x160)) / 0x4 + -parseInt(__DECODE_0__(0x163)) / 0x5 + -parseInt(__DECODE_0__(0x161)) / 0x6 + -parseInt(__DECODE_0__(0x16b)) / 0x7 + parseInt(__DECODE_0__(0x169)) / 0x8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xbeca1);
var toInt = x => parseInt(x, 0xa);
var toIntArr = arr => arr[__DECODE_0__(0x16d)](x => toInt(x));
var abs = x => x > 0x0 ? x : -x;
function min() {
  var rest = arguments;
  var val = rest[0x0];
  for (var i = 0x1; i < rest[__DECODE_0__(0x164)]; i++) {
    if (rest[i] < val) {
      val = rest[i];
    }
  }
  return val;
}
function __DECODE_0__(JdHRUA, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x160;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(JdHRUA, key);
}
function __STRING_ARRAY__() {
  var _0x4793a5 = ['length', 'readFileSync', 'utf8', 'log', '23770EBdoQq', '32621864sTXqyW', 'split', '10069458rtgoVA', '712079RCbBrt', 'map', '1624016exKJAs', '4136772YIFjKO', '189rywnGT', '3994880QWtMAb'];
  __STRING_ARRAY__ = function () {
    return _0x4793a5;
  };
  return __STRING_ARRAY__();
}
function max() {
  var rest = arguments;
  var val = rest[0x0];
  for (var i = 0x1; i < rest[__DECODE_0__(0x164)]; i++) {
    if (rest[i] > val) {
      val = rest[i];
    }
  }
  return val;
}
Main(require('fs')[__DECODE_0__(0x165)]('/dev/stdin', __DECODE_0__(0x166)));
function Main(input) {
  var input = input[__DECODE_0__(0x16a)]('\x0a');
  var temp = toIntArr(input[0x0]['split']('\x20'));
  var n = temp[0x0];
  var x = temp[0x1];
  var xs = toIntArr(input[0x1]['split']('\x20'));
  var ss = [xs[0x0]];
  for (var i = 0x1; i < n; i++) {
    ss[i] = xs[i] + ss[i - 0x1];
  }
  var ans = (n + 0x1) * x;
  var has = 0x0;
  for (var i = n - 0x1; i > -0x1; i--) {
    has++;
    if (has > 0x2 && x < ss[i] * (has - 0x1) * 0x2 - xs[i] * 0x2) {
      has = 0x1;
      ans += x;
    }
    ans += xs[i] * (max(has, 0x2) * 0x2 + 0x1);
  }
  console[__DECODE_0__(0x167)](ans);
}
