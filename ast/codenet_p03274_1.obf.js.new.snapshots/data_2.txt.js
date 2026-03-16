(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x144)) / 0x1 + -parseInt(__DECODE_0__(0x143)) / 0x2 * (parseInt(__DECODE_0__(0x13d)) / 0x3) + -parseInt(__DECODE_0__(0x139)) / 0x4 + -parseInt(__DECODE_0__(0x140)) / 0x5 + -parseInt(__DECODE_0__(0x13a)) / 0x6 * (parseInt(__DECODE_0__(0x137)) / 0x7) + -parseInt(__DECODE_0__(0x142)) / 0x8 * (parseInt(__DECODE_0__(0x134)) / 0x9) + parseInt(__DECODE_0__(0x13c)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x5ef19);
function __DECODE_0__(uoQePl, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x134;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(uoQePl, key);
}
function get_run_length(min, max) {
  var result = 0x0;
  if (max > Math[__DECODE_0__(0x136)](min)) {
    result = Math[__DECODE_0__(0x136)](min * 0x2) + max;
  } else {
    result = Math[__DECODE_0__(0x136)](min) + max * 0x2;
  }
  if (min >= 0x0) {
    result = max;
  }
  if (max <= 0x0) {
    result = Math[__DECODE_0__(0x136)](min);
  }
  return result;
}
function __STRING_ARRAY__() {
  var _0x87ea39 = ['log', 'abs', '102431hYOGOf', 'split', '2678428KQqHvU', '282ImEcRL', '/dev/stdin', '32034970jsYvTh', '2062677acTuKV', 'readFileSync', 'utf8', '436095MCdqlS', 'map', '2512ozBWLi', '2JKxdop', '200796egSQVj', '13806sfpXvU'];
  __STRING_ARRAY__ = function () {
    return _0x87ea39;
  };
  return __STRING_ARRAY__();
}
function main(input) {
  const lines = input[__DECODE_0__(0x138)]('\x0a');
  const N = parseInt(lines[0x0][__DECODE_0__(0x138)]('\x20')[0x0]);
  const K = parseInt(lines[0x0][__DECODE_0__(0x138)]('\x20')[0x1]);
  const Xs = lines[0x1][__DECODE_0__(0x138)]('\x20')[__DECODE_0__(0x141)](x => parseInt(x));
  var result = 0x989680;
  for (var i = 0x0; i < N - K + 0x1; i++) {
    var min = Xs[i];
    var max = Xs[i + K - 0x1];
    var tmp = get_run_length(min, max);
    result = Math['min'](tmp, result);
  }
  console[__DECODE_0__(0x135)](result);
}
main(require('fs')[__DECODE_0__(0x13e)](__DECODE_0__(0x13b), __DECODE_0__(0x13f)));
