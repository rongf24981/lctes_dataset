(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x1cd)) / 0x1 * (-parseInt(__DECODE_0__(0x1c9)) / 0x2) + -parseInt(__DECODE_0__(0x1ce)) / 0x3 + parseInt(__DECODE_0__(0x1d1)) / 0x4 + parseInt(__DECODE_0__(0x1c4)) / 0x5 + parseInt(__DECODE_0__(0x1d2)) / 0x6 * (parseInt(__DECODE_0__(0x1cc)) / 0x7) + -parseInt(__DECODE_0__(0x1d0)) / 0x8 * (parseInt(__DECODE_0__(0x1c5)) / 0x9) + -parseInt(__DECODE_0__(0x1d3)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xed394);
function Main(input) {
  input = input['split']('\x0a');
  var a = parseInt(input[0x0]['split']('\x20')[0x0], 0xa);
  var b = parseInt(input[0x0][__DECODE_0__(0x1c6)]('\x20')[0x1], 0xa);
  var s = input[0x1];
  var regex = new RegExp(__DECODE_0__(0x1ca) + a + __DECODE_0__(0x1c3) + b + '}$', 'g');
  var f = s[__DECODE_0__(0x1c8)](regex);
  console[__DECODE_0__(0x1c7)](f == null ? 'No' : __DECODE_0__(0x1cf));
}
function __DECODE_0__(FChRcd, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1c3;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(FChRcd, key);
}
function __STRING_ARRAY__() {
  var _0xdec6f5 = ['7159250xYIHeX', '18QWunpN', 'split', 'log', 'match', '6bctfFC', '^[0-9]{', 'readFileSync', '3269TqTogA', '237159kMNWpM', '2222589IkhSYn', 'Yes', '3005512xGalco', '3366760ZFDPao', '13698DkCZVG', '1643150ipbwyS', '}-[0-9]{'];
  __STRING_ARRAY__ = function () {
    return _0xdec6f5;
  };
  return __STRING_ARRAY__();
}
Main(require('fs')[__DECODE_0__(0x1cb)]('/dev/stdin', 'utf8'));
