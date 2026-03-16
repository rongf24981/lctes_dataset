function __DECODE_0__(eOWmrA, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x14c;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(eOWmrA, key);
}
function __STRING_ARRAY__() {
  var _0x56db34 = ['12CCvrxU', 'utf8', 'map', '2480471aSTejL', 'reverse', '2815608pXeCpv', 'floor', 'split', 'log', '1369616qmOEoW', '/dev/stdin', 'readFileSync', 'length', '619256SNPooC', '1482620YeKxgm', '90vrgjYx', '1026610gqTsmZ', 'slice', '977136tNTKXH', '3AiiRjD', 'sort'];
  __STRING_ARRAY__ = function () {
    return _0x56db34;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x153)) / 0x1 + -parseInt(__DECODE_0__(0x15f)) / 0x2 * (-parseInt(__DECODE_0__(0x154)) / 0x3) + -parseInt(__DECODE_0__(0x156)) / 0x4 * (parseInt(__DECODE_0__(0x14f)) / 0x5) + parseInt(__DECODE_0__(0x15b)) / 0x6 + parseInt(__DECODE_0__(0x159)) / 0x7 + -parseInt(__DECODE_0__(0x14e)) / 0x8 * (parseInt(__DECODE_0__(0x150)) / 0x9) + -parseInt(__DECODE_0__(0x151)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xaf99e);
function Main(input) {
  input = input[__DECODE_0__(0x15d)]('\x0a');
  var N = input[0x0];
  var L = input[0x1]['split']('\x20')[__DECODE_0__(0x158)](Number);
  var sum = 0x0;
  L[__DECODE_0__(0x155)](function (a, b) {
    return b - a;
  });
  for (var i = 0x0; i < N - 0x1; i++) {
    for (var j = i + 0x1; j < N; j++) {
      var tag = L[i] - L[j];
      var arr = L[__DECODE_0__(0x152)](0x0, L[__DECODE_0__(0x14d)]);
      arr['splice'](0x0, j + 0x1);
      arr[__DECODE_0__(0x15a)]();
      sum += arr[__DECODE_0__(0x14d)] - caninsert(arr, tag);
    }
  }
  console[__DECODE_0__(0x15e)](sum);
}
Main(require('fs')[__DECODE_0__(0x14c)](__DECODE_0__(0x160), __DECODE_0__(0x157)));
function caninsert(array, value) {
  value += 0.1;
  var lower = 0x0;
  var upper = array['length'];
  while (lower < upper) {
    var mid = Math[__DECODE_0__(0x15c)](lower + (upper - lower) / 0x2);
    if (array[mid] <= value) {
      lower = mid + 0x1;
    } else {
      upper = mid;
    }
  }
  return lower;
}
;
