(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xb6)) / 0x1 + parseInt(__DECODE_0__(0xb2)) / 0x2 + -parseInt(__DECODE_0__(0xb7)) / 0x3 + -parseInt(__DECODE_0__(0xb1)) / 0x4 * (parseInt(__DECODE_0__(0xbf)) / 0x5) + parseInt(__DECODE_0__(0xb3)) / 0x6 + parseInt(__DECODE_0__(0xba)) / 0x7 + parseInt(__DECODE_0__(0xc0)) / 0x8 * (-parseInt(__DECODE_0__(0xb0)) / 0x9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xcb237);
var input = require('fs')[__DECODE_0__(0xb9)](__DECODE_0__(0xb5), __DECODE_0__(0xb4));
function __STRING_ARRAY__() {
  var _0x1670c4 = ['join', 'split', '245925dLhimp', '21688onnCfP', 'shift', 'trim', 'log', '4509QnLuTV', '36VAVIzg', '1193026ODoGBw', '3338094zulCgQ', 'utf8', '/dev/stdin', '1331379gzoRmS', '906153faFoYZ', 'repeat', 'readFileSync', '3155187ZXToAs', 'replace', 'map'];
  __STRING_ARRAY__ = function () {
    return _0x1670c4;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(esWNBS, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xae;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(esWNBS, key);
}
var data = input[__DECODE_0__(0xae)]()['split']('\x0a');
while (!![]) {
  var str = data[__DECODE_0__(0xc1)]();
  if (str == '#') {
    break;
  }
  str = str[__DECODE_0__(0xbb)](/\d/g, function (v) {
    return 'n'[__DECODE_0__(0xb8)](v - 0x0);
  });
  var arr = str[__DECODE_0__(0xbe)]('/');
  arr = arr[__DECODE_0__(0xbc)](v => v['split'](''));
  var [a, b, c, d] = data['shift']()[__DECODE_0__(0xbe)]('\x20')[__DECODE_0__(0xbc)](Number);
  arr[a - 0x1][b - 0x1] = 'n';
  arr[c - 0x1][d - 0x1] = 'b';
  arr = arr['map'](v => v[__DECODE_0__(0xbd)](''));
  str = arr[__DECODE_0__(0xbd)]('/');
  str = str[__DECODE_0__(0xbb)](/n+/g, function (v) {
    return v['length'];
  });
  console[__DECODE_0__(0xaf)](str);
}
