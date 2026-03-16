function __DECODE_0__(fgDQwd, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x116;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(fgDQwd, key);
}
function __STRING_ARRAY__() {
  var _0x12f5fa = ['3564664etmtQF', 'readFileSync', '5870940RJhFvk', 'push', 'length', '/dev/stdin', 'pop', '262122HkQvEX', 'split', '12wDFgIk', '102FoENyM', 'unshift', '126pIyJXc', 'log', '418195ktqObm', 'utf8', '68751ZPZOHg', '6544953kFzAuy', '9645lrCEpz'];
  __STRING_ARRAY__ = function () {
    return _0x12f5fa;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x11b)) / 0x1 + -parseInt(__DECODE_0__(0x117)) / 0x2 * (-parseInt(__DECODE_0__(0x11d)) / 0x3) + parseInt(__DECODE_0__(0x116)) / 0x4 * (parseInt(__DECODE_0__(0x11f)) / 0x5) + parseInt(__DECODE_0__(0x119)) / 0x6 * (parseInt(__DECODE_0__(0x127)) / 0x7) + parseInt(__DECODE_0__(0x120)) / 0x8 + -parseInt(__DECODE_0__(0x11e)) / 0x9 + -parseInt(__DECODE_0__(0x122)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xa48cd);
function Main(input) {
  input = input[__DECODE_0__(0x128)]('\x0a');
  if (input[input[__DECODE_0__(0x124)] - 0x1] === '') {
    input[__DECODE_0__(0x126)]();
  }
  const N = input[0x0] - 0x0;
  var colors = [];
  var temp;
  var min;
  var max;
  var mid;
  for (var i = 0x1; i < input[__DECODE_0__(0x124)]; i++) {
    temp = input[i] - 0x0;
    if (colors['length'] === 0x0) {
      colors[__DECODE_0__(0x123)](temp);
      continue;
    }
    if (temp <= colors[0x0]) {
      colors[__DECODE_0__(0x118)](temp);
      continue;
    }
    if (temp > colors[colors['length'] - 0x1]) {
      colors[colors[__DECODE_0__(0x124)] - 0x1] = temp;
      continue;
    }
    min = 0x0;
    max = colors[__DECODE_0__(0x124)] - 0x1;
    while (max - min > 0x1) {
      mid = Math['floor']((max + min) / 0x2);
      if (colors[mid] <= temp) {
        max = mid;
      } else {
        min = mid;
      }
    }
    colors[min] = temp;
  }
  console[__DECODE_0__(0x11a)](colors[__DECODE_0__(0x124)]);
}
Main(require('fs')[__DECODE_0__(0x121)](__DECODE_0__(0x125), __DECODE_0__(0x11c)));
