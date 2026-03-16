(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xf2)) / 0x1 * (-parseInt(__DECODE_0__(0xf5)) / 0x2) + -parseInt(__DECODE_0__(0xf8)) / 0x3 + -parseInt(__DECODE_0__(0xf3)) / 0x4 + parseInt(__DECODE_0__(0xf0)) / 0x5 * (parseInt(__DECODE_0__(0xf7)) / 0x6) + parseInt(__DECODE_0__(0xec)) / 0x7 * (-parseInt(__DECODE_0__(0xed)) / 0x8) + -parseInt(__DECODE_0__(0xea)) / 0x9 + parseInt(__DECODE_0__(0xe8)) / 0xa * (parseInt(__DECODE_0__(0xf4)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x66460);
function main() {
  var input = getInput();
  var ls = input['split']('\x0a');
  var n = parseInt(ls[0x0]);
  var nums = ls[__DECODE_0__(0xe9)](0x1, n + 0x1)['map'](function (s) {
    return parseInt(s);
  });
  console[__DECODE_0__(0xef)](lis(nums));
}
function __STRING_ARRAY__() {
  var _0x1ba6d2 = ['300146jhaRkd', 'getElementById', '2994714uFTzIe', '2090382PyQGJD', 'input', '10431830bQVBPo', 'slice', '4589721RpNyBc', 'toString', '7lhPprb', '660952DcPyXL', 'length', 'log', '5SmuwXY', 'undefined', '3yWeBkn', '1136908NuOSlg', '11WMoLfn'];
  __STRING_ARRAY__ = function () {
    return _0x1ba6d2;
  };
  return __STRING_ARRAY__();
}
function lis(xs) {
  var table = [xs[0x0]];
  for (var i = 0x1; i < xs[__DECODE_0__(0xee)]; i++) {
    var x = xs[i];
    table[search(table, x) + 0x1] = x;
  }
  return table[__DECODE_0__(0xee)];
}
function search(table, x) {
  var l = 0x0;
  var h = table['length'];
  if (table['length'] == 0x0 || x <= table[0x0]) {
    return -0x1;
  }
  while (l + 0x1 < h) {
    var pivot = (l + h + 0x1) / 0x2;
    if (table[pivot] < x) {
      l = pivot;
    } else {
      h = pivot;
    }
  }
  return l;
}
function __DECODE_0__(SFbTfK, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xe7;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(SFbTfK, key);
}
nodeJS = typeof require != __DECODE_0__(0xf1);
function getInput() {
  if (!nodeJS) {
    return document[__DECODE_0__(0xf6)](__DECODE_0__(0xe7))['value'];
  }
  return require('fs')['readFileSync']('/dev/stdin')[__DECODE_0__(0xeb)]();
}
if (nodeJS) {
  main();
}
