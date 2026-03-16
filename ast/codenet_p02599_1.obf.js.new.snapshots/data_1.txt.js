function __DECODE_0__(CHsckY, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xcf;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(CHsckY, key);
}
var a0_0x239d1c = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0xd3038b = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(_0xd3038b(0xd1)) / 0x1 + -parseInt(_0xd3038b(0xcf)) / 0x2 + parseInt(_0xd3038b(0xd7)) / 0x3 * (-parseInt(_0xd3038b(0xdb)) / 0x4) + parseInt(_0xd3038b(0xdd)) / 0x5 + -parseInt(_0xd3038b(0xe0)) / 0x6 * (-parseInt(_0xd3038b(0xdc)) / 0x7) + parseInt(_0xd3038b(0xda)) / 0x8 * (parseInt(_0xd3038b(0xd9)) / 0x9) + parseInt(_0xd3038b(0xd8)) / 0xa * (parseInt(_0xd3038b(0xe1)) / 0xb);
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
  var _0x266943 = __DECODE_0__;
  input = input[_0x266943(0xde)]('\x0a');
  var [n, q] = input[0x0][_0x266943(0xde)]('\x20')[_0x266943(0xd0)](a => parseInt(a, 0xa));
  var colors = input[0x1][_0x266943(0xde)]('\x20');
  for (var i = 0x0; i < q; i++) {
    var [start, end] = input[i + 0x2][_0x266943(0xde)]('\x20')[_0x266943(0xd0)](a => parseInt(a, 0xa));
    var cs = [];
    for (var j = start - 0x1; j < end; j++) {
      var color = colors[j];
      if (cs[_0x266943(0xdf)](color) === -0x1) {
        cs[_0x266943(0xd6)](color);
      }
    }
    console['log'](cs[_0x266943(0xd3)]);
  }
}
Main(require('fs')[a0_0x239d1c(0xd4)](a0_0x239d1c(0xd2), a0_0x239d1c(0xd5)));
