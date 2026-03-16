var a0_0x128da0 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x38f9fe = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(_0x38f9fe(0xf0)) / 0x1 + -parseInt(_0x38f9fe(0xf7)) / 0x2 * (-parseInt(_0x38f9fe(0xfe)) / 0x3) + -parseInt(_0x38f9fe(0xee)) / 0x4 + -parseInt(_0x38f9fe(0xf2)) / 0x5 * (-parseInt(_0x38f9fe(0xf5)) / 0x6) + parseInt(_0x38f9fe(0xf1)) / 0x7 + -parseInt(_0x38f9fe(0xfd)) / 0x8 + parseInt(_0x38f9fe(0xef)) / 0x9 * (parseInt(_0x38f9fe(0xf6)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x4379a);
function __STRING_ARRAY__() {
  var _0x258744 = ['1942988coKoec', '45EZoQSA', '415698omBhNK', '1169147VZdgFE', '30peDzug', 'split', 'log', '209826IpXuYe', '150190FfZxLo', '670DsMwRE', 'length', 'sort', 'utf8', 'readFileSync', '/dev/stdin', '4392440hNThyl', '3972pEAiuY'];
  __STRING_ARRAY__ = function () {
    return _0x258744;
  };
  return __STRING_ARRAY__();
}
var toInt = x => parseInt(x, 0xa);
var toIntArr = arr => arr['map'](x => toInt(x));
var abs = x => x > 0x0 ? x : -x;
function min() {
  var _0x1da1cc = __DECODE_0__;
  var rest = arguments;
  var val = rest[0x0];
  for (var i = 0x1; i < rest[_0x1da1cc(0xf8)]; i++) {
    if (rest[i] < val) {
      val = rest[i];
    }
  }
  return val;
}
function max() {
  var _0x16c6a7 = __DECODE_0__;
  var rest = arguments;
  var val = rest[0x0];
  for (var i = 0x1; i < rest[_0x16c6a7(0xf8)]; i++) {
    if (rest[i] > val) {
      val = rest[i];
    }
  }
  return val;
}
Main(require('fs')[a0_0x128da0(0xfb)](a0_0x128da0(0xfc), a0_0x128da0(0xfa)));
function __DECODE_0__(fXHYJR, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xee;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(fXHYJR, key);
}
function Main(input) {
  var _0x1243eb = a0_0x128da0;
  var input = input[_0x1243eb(0xf3)]('\x0a');
  var temp1 = input[0x0]['split']('\x20');
  var n = toInt(temp1[0x0]);
  var m = toInt(temp1[0x1]);
  var abs = [];
  for (var i = 0x0; i < m; i++) {
    c = toIntArr(input[i + 0x1][_0x1243eb(0xf3)]('\x20'));
    a = c[0x0];
    b = c[0x1];
    abs[i] = [a, b];
  }
  abs[_0x1243eb(0xf9)](function (a, b) {
    if (a[0x0] !== b[0x0]) {
      return a[0x0] - b[0x0];
    } else {
      return a[0x1] - b[0x1];
    }
  });
  var l = 0x0;
  r = n - 0x1;
  var ab;
  var ans = 0x1;
  for (var i = 0x0; i < m; i++) {
    ab = abs[i];
    if (ab[0x1] <= l || r <= ab[0x0]) {
      ans++;
      l = ab[0x0];
      r = ab[0x1];
    } else {
      l = max(l, ab[0x0]);
      r = min(r, ab[0x1]);
    }
  }
  console[_0x1243eb(0xf4)](ans);
}
