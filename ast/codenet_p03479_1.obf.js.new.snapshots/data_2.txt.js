(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x168)) / 0x1 + parseInt(__DECODE_0__(0x169)) / 0x2 * (-parseInt(__DECODE_0__(0x170)) / 0x3) + -parseInt(__DECODE_0__(0x166)) / 0x4 * (-parseInt(__DECODE_0__(0x167)) / 0x5) + parseInt(__DECODE_0__(0x16e)) / 0x6 * (parseInt(__DECODE_0__(0x16d)) / 0x7) + -parseInt(__DECODE_0__(0x175)) / 0x8 + -parseInt(__DECODE_0__(0x16c)) / 0x9 + parseInt(__DECODE_0__(0x171)) / 0xa * (parseInt(__DECODE_0__(0x16b)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x2cf3b);
var toInt = x => parseInt(x, 0xa);
var toIntArr = arr => arr[__DECODE_0__(0x174)](x => toInt(x));
var abs = x => x > 0x0 ? x : -x;
function __STRING_ARRAY__() {
  var _0x217c4c = ['7652myMScw', '565TrHJUh', '291884aNkXjM', '284bFLPtQ', '/dev/stdin', '77957JxQZgJ', '2431089akwjGg', '63fGBDlL', '8178gNIImg', 'split', '5736hVDzIi', '1230CDnRxI', 'length', 'log', 'map', '660040qfLhcW', 'readFileSync'];
  __STRING_ARRAY__ = function () {
    return _0x217c4c;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(OKQpQz, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x166;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(OKQpQz, key);
}
function min() {
  var rest = arguments;
  var val = rest[0x0];
  for (var i = 0x1; i < rest[__DECODE_0__(0x172)]; i++) {
    if (rest[i] < val) {
      val = rest[i];
    }
  }
  return val;
}
function max() {
  var rest = arguments;
  var val = rest[0x0];
  for (var i = 0x1; i < rest[__DECODE_0__(0x172)]; i++) {
    if (rest[i] > val) {
      val = rest[i];
    }
  }
  return val;
}
Main(require('fs')[__DECODE_0__(0x176)](__DECODE_0__(0x16a), 'utf8'));
function Main(input) {
  var input = input['split']('\x0a');
  var nk = toIntArr(input[0x0][__DECODE_0__(0x16f)]('\x20'));
  var x = nk[0x0];
  var y = nk[0x1];
  var a = y / x;
  var temp = 0x1;
  var ans = 0x0;
  while (temp <= a) {
    temp *= 0x2;
    ans++;
  }
  console[__DECODE_0__(0x173)](ans);
}
