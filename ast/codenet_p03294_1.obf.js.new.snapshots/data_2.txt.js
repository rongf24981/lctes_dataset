function __DECODE_0__(VHqGxF, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x109;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(VHqGxF, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x10f)) / 0x1 * (parseInt(__DECODE_0__(0x109)) / 0x2) + parseInt(__DECODE_0__(0x116)) / 0x3 + parseInt(__DECODE_0__(0x10d)) / 0x4 * (-parseInt(__DECODE_0__(0x111)) / 0x5) + parseInt(__DECODE_0__(0x112)) / 0x6 + parseInt(__DECODE_0__(0x10a)) / 0x7 + parseInt(__DECODE_0__(0x117)) / 0x8 + -parseInt(__DECODE_0__(0x10e)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xa4f20);
var toInt = x => parseInt(x, 0xa);
function __STRING_ARRAY__() {
  var _0x2d3764 = ['2HZuNSf', '7560553yfniRE', 'split', 'log', '14116wTdnQi', '8923977JGiHpY', '192886YbmPLs', 'utf8', '1135tDHXZP', '3838680iwmoII', 'readFileSync', 'map', 'length', '962556PmHOlM', '1877240FECDvv'];
  __STRING_ARRAY__ = function () {
    return _0x2d3764;
  };
  return __STRING_ARRAY__();
}
var toIntArr = arr => arr[__DECODE_0__(0x114)](x => toInt(x));
var abs = x => x > 0x0 ? x : -x;
function min() {
  var rest = arguments;
  var val = rest[0x0];
  for (var i = 0x1; i < rest[__DECODE_0__(0x115)]; i++) {
    if (rest[i] < val) {
      val = rest[i];
    }
  }
  return val;
}
function max() {
  var rest = arguments;
  var val = rest[0x0];
  for (var i = 0x1; i < rest['length']; i++) {
    if (rest[i] > val) {
      val = rest[i];
    }
  }
  return val;
}
Main(require('fs')[__DECODE_0__(0x113)]('/dev/stdin', __DECODE_0__(0x110)));
function Main(input) {
  var input = input[__DECODE_0__(0x10b)]('\x0a');
  var n = toInt(input[0x0]);
  var as = toIntArr(input[0x1][__DECODE_0__(0x10b)]('\x20'));
  as['length'] = n;
  var ans = -n;
  for (var i = 0x0; i < n; i++) {
    ans += as[i];
  }
  console[__DECODE_0__(0x10c)](ans);
}
