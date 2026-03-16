function __DECODE_0__(sSimUf, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x88;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(sSimUf, key);
}
function __STRING_ARRAY__() {
  var _0x1151d0 = ['trim', 'utf8', 'split', '51738SmQiNi', 'length', '3839301ZEfhnW', '1193142feTmBH', 'readFileSync', 'charAt', '8AQdaiV', '7581784sbThHA', '283594eSXfok', '4264584wGhAwi', '465GhzXSb', '766305WaXxeD', 'log'];
  __STRING_ARRAY__ = function () {
    return _0x1151d0;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x94)) / 0x1 + -parseInt(__DECODE_0__(0x8f)) / 0x2 + -parseInt(__DECODE_0__(0x8e)) / 0x3 + parseInt(__DECODE_0__(0x95)) / 0x4 + parseInt(__DECODE_0__(0x96)) / 0x5 * (parseInt(__DECODE_0__(0x8c)) / 0x6) + parseInt(__DECODE_0__(0x93)) / 0x7 + parseInt(__DECODE_0__(0x92)) / 0x8 * (-parseInt(__DECODE_0__(0x97)) / 0x9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xac648);
function move(x, arr) {
  var d1 = arr[0x0];
  var d2 = arr[0x1];
  var d3 = arr[0x2];
  var d4 = arr[0x3];
  var d5 = arr[0x4];
  var d6 = arr[0x5];
  var after = [];
  if (x == 'N') {
    after = [d2, d6, d3, d4, d1, d5];
  }
  if (x == 'S') {
    after = [d5, d1, d3, d4, d6, d2];
  }
  if (x == 'E') {
    after = [d4, d2, d1, d6, d5, d3];
  }
  if (x == 'W') {
    after = [d3, d2, d6, d1, d5, d4];
  }
  if (x == 'R') {
    after = [d1, d3, d5, d2, d4, d6];
  }
  if (x == 'L') {
    after = [d1, d4, d2, d5, d3, d6];
  }
  return after;
}
var input = require('fs')[__DECODE_0__(0x90)]('/dev/stdin', __DECODE_0__(0x8a));
var Arr = input[__DECODE_0__(0x89)]()[__DECODE_0__(0x8b)]('\x0a');
var dice;
var sum;
for (var i = 0x0; i < Arr[__DECODE_0__(0x8d)]; i++) {
  var v = Arr[i][__DECODE_0__(0x91)](0x0);
  if (v['match'](/[NSEWRL]/)) {
    dice = move(v, dice);
    sum += dice[0x0];
  } else {
    if (i != 0x0) {
      console[__DECODE_0__(0x88)](sum);
    }
    dice = [0x1, 0x2, 0x3, 0x4, 0x5, 0x6];
    sum = 0x1;
  }
  if (Arr[i] == '0') {
    break;
  }
}
