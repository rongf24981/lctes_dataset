function __DECODE_0__(ifsVBc, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1ea;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ifsVBc, key);
}
function __STRING_ARRAY__() {
  var _0x33319e = ['673542VRemeg', 'log', 'toFixed', '80MSDGQK', '372276zzvOgc', '5BNWbGE', '2328954MWtXSu', '224791nESXiU', '18110SvwIos', '2518648UhHQRQ', 'sqrt', '4598toRSwY', '1XCMVBK', '468VlAcGM', '254724BLsKfq', '120DjuTBw', 'stdin'];
  __STRING_ARRAY__ = function () {
    return _0x33319e;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1f9)) / 0x1 * (-parseInt(__DECODE_0__(0x1f1)) / 0x2) + -parseInt(__DECODE_0__(0x1f3)) / 0x3 + parseInt(__DECODE_0__(0x1f6)) / 0x4 * (-parseInt(__DECODE_0__(0x1f2)) / 0x5) + -parseInt(__DECODE_0__(0x1eb)) / 0x6 * (parseInt(__DECODE_0__(0x1f4)) / 0x7) + parseInt(__DECODE_0__(0x1f0)) / 0x8 * (parseInt(__DECODE_0__(0x1ed)) / 0x9) + -parseInt(__DECODE_0__(0x1f5)) / 0xa * (-parseInt(__DECODE_0__(0x1f8)) / 0xb) + parseInt(__DECODE_0__(0x1ea)) / 0xc * (parseInt(__DECODE_0__(0x1fa)) / 0xd);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x63798);
var reader = require('readline')['createInterface']({
  'input': process[__DECODE_0__(0x1ec)],
  'output': process['stdout']
});
reader['on']('line', function (line) {
  var a = line['split']('\x20');
  var b = parseInt(a[0x0], 0xa);
  var c = parseInt(a[0x1], 0xa);
  var d = parseInt(a[0x2], 0xa);
  var e = parseInt(a[0x3], 0xa);
  b = Math[__DECODE_0__(0x1f7)]((b - d) * (b - d) + (c - e) * (c - e));
  console[__DECODE_0__(0x1ee)](b[__DECODE_0__(0x1ef)](0x8));
  process['exit']();
});
process['stdin']['on']('end', function () {});
