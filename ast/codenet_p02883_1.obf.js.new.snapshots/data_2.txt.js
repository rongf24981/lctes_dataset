(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x155)) / 0x1 + parseInt(__DECODE_0__(0x14d)) / 0x2 + -parseInt(__DECODE_0__(0x14f)) / 0x3 * (-parseInt(__DECODE_0__(0x152)) / 0x4) + -parseInt(__DECODE_0__(0x151)) / 0x5 + -parseInt(__DECODE_0__(0x148)) / 0x6 + -parseInt(__DECODE_0__(0x149)) / 0x7 + -parseInt(__DECODE_0__(0x14b)) / 0x8 * (-parseInt(__DECODE_0__(0x154)) / 0x9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x78ff7);
function Main(input) {
  input = input[__DECODE_0__(0x157)]('\x0a');
  if (input[input['length'] - 0x1] === '') {
    input['pop']();
  }
  const N = input[0x0][__DECODE_0__(0x157)]('\x20')[0x0] - 0x0;
  const K = input[0x0]['split']('\x20')[0x1] - 0x0;
  var A = input[0x1][__DECODE_0__(0x157)]('\x20')[__DECODE_0__(0x153)](e => {
    return e - 0x0;
  })['sort']((a, b) => {
    return a - b;
  });
  var F = input[0x2][__DECODE_0__(0x157)]('\x20')[__DECODE_0__(0x153)](e => {
    return e - 0x0;
  })['sort']((a, b) => {
    return b - a;
  });
  var possible = 0x0;
  for (var i = 0x0; i < N; i++) {
    possible = Math[__DECODE_0__(0x14e)](possible, A[i] * F[i]);
  }
  var impossible = -0x1;
  var temp;
  var sum;
  while (possible - impossible > 0x1) {
    temp = Math['ceil']((impossible + possible) / 0x2);
    sum = 0x0;
    for (var i = 0x0; i < N; i++) {
      sum += Math[__DECODE_0__(0x14e)](0x0, A[i] - Math[__DECODE_0__(0x14a)](temp / F[i]));
    }
    if (sum <= K) {
      possible = temp;
    } else {
      impossible = temp;
    }
  }
  console[__DECODE_0__(0x156)](possible);
}
Main(require('fs')[__DECODE_0__(0x150)]('/dev/stdin', __DECODE_0__(0x14c)));
function __DECODE_0__(YpKUoa, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x148;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(YpKUoa, key);
}
function __STRING_ARRAY__() {
  var _0x3a9539 = ['readFileSync', '730940FcAzwz', '4rjjbiX', 'map', '18gLxVVg', '692161GXNcOz', 'log', 'split', '5474688PjFAoN', '1218203CYcxIz', 'floor', '7397456yaqCJq', 'utf8', '734936uCViwi', 'max', '610803DmxBJV'];
  __STRING_ARRAY__ = function () {
    return _0x3a9539;
  };
  return __STRING_ARRAY__();
}
