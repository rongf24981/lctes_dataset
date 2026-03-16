function __DECODE_0__(GZqMNP, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x85;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(GZqMNP, key);
}
function __STRING_ARRAY__() {
  var _0xe905f1 = ['26831976uWLdEL', '312250MwCVJS', 'Yes', '10014IowOqD', 'substr', 'value', 'split', '1091929pmCzMU', 'length', '5GxJAbm', '8ZLHSNa', '11223288XFSxlQ', '2mDyFIr', '77TpzEJq', '1890AyqXLX', '3307983zCrzoU', '4355044egXvMp'];
  __STRING_ARRAY__ = function () {
    return _0xe905f1;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x90)) / 0x1 + -parseInt(__DECODE_0__(0x95)) / 0x2 * (-parseInt(__DECODE_0__(0x87)) / 0x3) + parseInt(__DECODE_0__(0x88)) / 0x4 * (-parseInt(__DECODE_0__(0x92)) / 0x5) + -parseInt(__DECODE_0__(0x8c)) / 0x6 * (-parseInt(__DECODE_0__(0x86)) / 0x7) + -parseInt(__DECODE_0__(0x93)) / 0x8 * (-parseInt(__DECODE_0__(0x94)) / 0x9) + parseInt(__DECODE_0__(0x8a)) / 0xa * (parseInt(__DECODE_0__(0x85)) / 0xb) + -parseInt(__DECODE_0__(0x89)) / 0xc;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xbfe94);
function Main(input) {
  input = input[__DECODE_0__(0x8f)]('\x0a');
  var S = input[0x0];
  var T = input[0x1];
  var ans = __DECODE_0__(0x8b);
  while (T[__DECODE_0__(0x91)] != 0x0) {
    for (i = 0x1; i < T[__DECODE_0__(0x91)]; i++) {
      if (T['substr'](0x0, 0x1) == T[__DECODE_0__(0x8d)](i, 0x1)) {
        if (S[__DECODE_0__(0x8d)](0x0, 0x1) != S[__DECODE_0__(0x8d)](i, 0x1)) {
          ans = 'No';
          break;
        }
      }
      if (S[__DECODE_0__(0x8d)](0x0, 0x1) == S[__DECODE_0__(0x8d)](i, 0x1)) {
        if (T[__DECODE_0__(0x8d)](0x0, 0x1) != T['substr'](i, 0x1)) {
          ans = 'No';
          break;
        }
      }
    }
    if (ans == 'No') {
      break;
    }
    S = S[__DECODE_0__(0x8d)](0x1);
    T = T[__DECODE_0__(0x8d)](0x1);
  }
  console['log']('%s', ans);
}
function debug() {
  var input = document['getElementById']('input')[__DECODE_0__(0x8e)];
  Main(input);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
