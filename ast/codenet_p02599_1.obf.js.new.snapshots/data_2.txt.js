function __DECODE_0__(CHsckY, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xcf;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(CHsckY, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xd1)) / 0x1 + -parseInt(__DECODE_0__(0xcf)) / 0x2 + parseInt(__DECODE_0__(0xd7)) / 0x3 * (-parseInt(__DECODE_0__(0xdb)) / 0x4) + parseInt(__DECODE_0__(0xdd)) / 0x5 + -parseInt(__DECODE_0__(0xe0)) / 0x6 * (-parseInt(__DECODE_0__(0xdc)) / 0x7) + parseInt(__DECODE_0__(0xda)) / 0x8 * (parseInt(__DECODE_0__(0xd9)) / 0x9) + parseInt(__DECODE_0__(0xd8)) / 0xa * (parseInt(__DECODE_0__(0xe1)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x2dc98);
function __STRING_ARRAY__() {
  var _0x13b850 = ['315203DbIMZP', '726890owhSle', 'split', 'indexOf', '6yMfAcq', '55979kXFqLz', '655526NaOFAJ', 'map', '337138dumAyG', '/dev/stdin', 'length', 'readFileSync', 'utf8', 'push', '158073RyFrfa', '650PHHHNt', '9gtTArG', '206512cCJASQ', '28PEQand'];
  __STRING_ARRAY__ = function () {
    return _0x13b850;
  };
  return __STRING_ARRAY__();
}
function Main(input) {
  input = input[__DECODE_0__(0xde)]('\x0a');
  var [n, q] = input[0x0][__DECODE_0__(0xde)]('\x20')[__DECODE_0__(0xd0)](a => parseInt(a, 0xa));
  var colors = input[0x1][__DECODE_0__(0xde)]('\x20');
  for (var i = 0x0; i < q; i++) {
    var [start, end] = input[i + 0x2][__DECODE_0__(0xde)]('\x20')[__DECODE_0__(0xd0)](a => parseInt(a, 0xa));
    var cs = [];
    for (var j = start - 0x1; j < end; j++) {
      var color = colors[j];
      if (cs[__DECODE_0__(0xdf)](color) === -0x1) {
        cs[__DECODE_0__(0xd6)](color);
      }
    }
    console['log'](cs[__DECODE_0__(0xd3)]);
  }
}
Main(require('fs')[__DECODE_0__(0xd4)](__DECODE_0__(0xd2), __DECODE_0__(0xd5)));
