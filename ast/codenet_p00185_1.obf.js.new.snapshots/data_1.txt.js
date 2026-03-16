function __DECODE_0__(EVMsCQ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x14b;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(EVMsCQ, key);
}
var a0_0x1ba718 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x3838dd = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(_0x3838dd(0x15a)) / 0x1 * (parseInt(_0x3838dd(0x15c)) / 0x2) + -parseInt(_0x3838dd(0x157)) / 0x3 * (parseInt(_0x3838dd(0x14c)) / 0x4) + parseInt(_0x3838dd(0x150)) / 0x5 * (-parseInt(_0x3838dd(0x154)) / 0x6) + parseInt(_0x3838dd(0x15b)) / 0x7 + -parseInt(_0x3838dd(0x158)) / 0x8 + parseInt(_0x3838dd(0x159)) / 0x9 * (parseInt(_0x3838dd(0x156)) / 0xa) + -parseInt(_0x3838dd(0x153)) / 0xb * (-parseInt(_0x3838dd(0x151)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xa284a);
function prime(max) {
  var _0x20a8a = __DECODE_0__;
  var arr = [];
  for (var i = 0x0; i <= max; i++) {
    arr[i] = i;
  }
  arr[0x0] = ![];
  arr[0x1] = ![];
  var sqrt = Math[_0x20a8a(0x14e)](Math[_0x20a8a(0x15f)](max));
  for (var i = 0x2; i <= sqrt; i++) {
    if (arr[i] == ![]) {
      continue;
    }
    for (var j = i + i; j <= max; j += i) {
      arr[j] = ![];
    }
  }
  var result = {};
  for (var i = 0x0; i <= max; i++) {
    if (arr[i] !== ![]) {
      result[arr[i]] = !![];
    }
  }
  return result;
}
function __STRING_ARRAY__() {
  var _0x2cb07e = ['4976389NPezBo', '70188Mswcgr', 'readFileSync', '354190EWhcrz', '37287PrRLQZ', '3084144onKOqF', '225iwmqPF', '141711pyVkGa', '4054470cQQOPL', '4tKCKsS', 'split', 'log', 'sqrt', 'hasOwnProperty', 'map', '244BlaEyy', 'utf8', 'floor', 'length', '505avOIii', '48eUzwnc', '/dev/stdin'];
  __STRING_ARRAY__ = function () {
    return _0x2cb07e;
  };
  return __STRING_ARRAY__();
}
var p = prime(0xf4240);
var input = require('fs')[a0_0x1ba718(0x155)](a0_0x1ba718(0x152), a0_0x1ba718(0x14d));
var Arr = input['trim']()[a0_0x1ba718(0x15d)]('\x0a')[a0_0x1ba718(0x14b)](Number);
for (var I = 0x0; I < Arr[a0_0x1ba718(0x14f)]; I++) {
  var v = Arr[I];
  if (v == 0x0) {
    break;
  }
  var cnt = 0x0;
  var obj = {};
  for (var k in p) {
    if (k >= v) {
      break;
    }
    if (obj[a0_0x1ba718(0x160)](k)) {
      continue;
    }
    obj[v - k] = !![];
    if (p[a0_0x1ba718(0x160)](v - k)) {
      cnt++;
    }
  }
  console[a0_0x1ba718(0x15e)](cnt);
}
