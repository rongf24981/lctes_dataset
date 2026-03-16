(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x189)) / 0x1 + -parseInt(__DECODE_0__(0x196)) / 0x2 + -parseInt(__DECODE_0__(0x188)) / 0x3 * (-parseInt(__DECODE_0__(0x187)) / 0x4) + parseInt(__DECODE_0__(0x198)) / 0x5 + parseInt(__DECODE_0__(0x186)) / 0x6 * (parseInt(__DECODE_0__(0x191)) / 0x7) + -parseInt(__DECODE_0__(0x193)) / 0x8 * (-parseInt(__DECODE_0__(0x194)) / 0x9) + -parseInt(__DECODE_0__(0x18b)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xe8089);
function __DECODE_0__(OHQLOm, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x186;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(OHQLOm, key);
}
function __STRING_ARRAY__() {
  var _0x55ca8e = ['1177576WIfXtA', '9YbXhKj', '803534FHkrtD', 'map', '9643640gSEzFZ', 'readFileSync', 'split', 'toString', 'shift', 'trim', '6959967BEzMUS', 'log', '1995160OfuAfs', '27zLPdWD', 'apply', '1241560yzrrrV', 'forEach', '3567195xAQdlg', 'push', '6GWngbH'];
  __STRING_ARRAY__ = function () {
    return _0x55ca8e;
  };
  return __STRING_ARRAY__();
}
var input = require('fs')[__DECODE_0__(0x18c)]('/dev/stdin', 'utf8');
var Arr = input[__DECODE_0__(0x190)]()['split']('\x0a');
while (!![]) {
  var n = Arr[__DECODE_0__(0x18f)]() - 0x0;
  if (n === 0x0) {
    break;
  }
  var ans = [];
  for (var i = 0x0; i < n; i++) {
    var arr = Arr[__DECODE_0__(0x18f)]()[__DECODE_0__(0x18d)]('\x20');
    var name = arr[__DECODE_0__(0x18f)]();
    arr = arr[__DECODE_0__(0x18a)](Number);
    arr['unshift'](name);
    (function (L, P, A, B, C, D, E, F, S, M) {
      var time = A + B + C + (D + E) * M;
      var money = F * S * M - P;
      ans[__DECODE_0__(0x199)]([L, money / time]);
    })[__DECODE_0__(0x195)](null, arr);
  }
  ans['sort'](function (a, b) {
    if (a[0x1] == b[0x1]) {
      return a[0x0][__DECODE_0__(0x18e)]() > b[0x0][__DECODE_0__(0x18e)]() ? 0x1 : -0x1;
    } else {
      return b[0x1] - a[0x1];
    }
  });
  ans[__DECODE_0__(0x197)](function (v) {
    console[__DECODE_0__(0x192)](v[0x0]);
  });
  console[__DECODE_0__(0x192)]('#');
}
