function __DECODE_0__(lbLCYk, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xe7;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(lbLCYk, key);
}
function __STRING_ARRAY__() {
  var _0x512489 = ['forEach', 'readFileSync', '384wLXNrj', 'log', '2tCbgno', '7529951JoZvKC', '66jvjWLq', '9LqlBdp', 'utf8', 'shift', '57tahHyh', 'fill', '2159333glNnXm', 'map', '/dev/stdin', '21bBNNhP', '208773qSELvV', '2031680NCueRR', '74735zGTuhs', '12rfpsYQ', 'split', '304504bIQaIX'];
  __STRING_ARRAY__ = function () {
    return _0x512489;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xf5)) / 0x1 * (-parseInt(__DECODE_0__(0xe9)) / 0x2) + -parseInt(__DECODE_0__(0xef)) / 0x3 * (parseInt(__DECODE_0__(0xe7)) / 0x4) + -parseInt(__DECODE_0__(0xf7)) / 0x5 * (parseInt(__DECODE_0__(0xeb)) / 0x6) + -parseInt(__DECODE_0__(0xf4)) / 0x7 * (parseInt(__DECODE_0__(0xfa)) / 0x8) + parseInt(__DECODE_0__(0xec)) / 0x9 * (-parseInt(__DECODE_0__(0xf6)) / 0xa) + -parseInt(__DECODE_0__(0xf1)) / 0xb + parseInt(__DECODE_0__(0xf8)) / 0xc * (parseInt(__DECODE_0__(0xea)) / 0xd);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x1a643);
function Main(input) {
  input = input[__DECODE_0__(0xf9)]('\x0a');
  var m = input[0x0][__DECODE_0__(0xf9)]('\x20')[__DECODE_0__(0xf2)](Number);
  input['shift']();
  var arr = new Array(0x23)[__DECODE_0__(0xf0)](0x0);
  input[__DECODE_0__(0xfb)](function (val) {
    var mem = val[__DECODE_0__(0xf9)]('\x20')[__DECODE_0__(0xf2)](Number);
    mem[__DECODE_0__(0xee)]();
    mem[__DECODE_0__(0xfb)](function (p) {
      arr[p]++;
    });
  });
  var ans = 0x0;
  arr[__DECODE_0__(0xfb)](function (val) {
    if (val == m[0x0]) {
      ans++;
    }
  });
  console[__DECODE_0__(0xe8)](ans);
}
Main(require('fs')[__DECODE_0__(0xfc)](__DECODE_0__(0xf3), __DECODE_0__(0xed))['trim']());
