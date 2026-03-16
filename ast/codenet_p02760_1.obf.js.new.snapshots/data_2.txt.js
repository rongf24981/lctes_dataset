(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x7b)) / 0x1 + -parseInt(__DECODE_0__(0x7a)) / 0x2 + -parseInt(__DECODE_0__(0x81)) / 0x3 * (-parseInt(__DECODE_0__(0x82)) / 0x4) + -parseInt(__DECODE_0__(0x7e)) / 0x5 * (parseInt(__DECODE_0__(0x7c)) / 0x6) + parseInt(__DECODE_0__(0x86)) / 0x7 * (parseInt(__DECODE_0__(0x88)) / 0x8) + -parseInt(__DECODE_0__(0x85)) / 0x9 + parseInt(__DECODE_0__(0x83)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x534ff);
function __DECODE_0__(gmSoWi, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x78;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(gmSoWi, key);
}
function Main(input) {
  var n = input[0x3];
  var ansmap = [[![], ![], ![]], [![], ![], ![]], [![], ![], ![]]];
  var chk = [];
  for (var i = 0x4; i < n + 0x4; i++) {
    chk[__DECODE_0__(0x7f)](input[i] - 0x0);
  }
  var map = [input[0x0][__DECODE_0__(0x79)]('\x20')[__DECODE_0__(0x80)](v => chk[__DECODE_0__(0x84)](v - 0x0) >= 0x0), input[0x1][__DECODE_0__(0x79)]('\x20')[__DECODE_0__(0x80)](v => chk['indexOf'](v - 0x0) >= 0x0), input[0x2][__DECODE_0__(0x79)]('\x20')[__DECODE_0__(0x80)](v => chk[__DECODE_0__(0x84)](v - 0x0) >= 0x0)];
  var flg = ![];
  if (map[0x0][0x0] && map[0x0][0x1] && map[0x0][0x2]) {
    flg = !![];
  }
  if (map[0x1][0x0] && map[0x1][0x1] && map[0x1][0x2]) {
    flg = !![];
  }
  if (map[0x2][0x0] && map[0x2][0x1] && map[0x2][0x2]) {
    flg = !![];
  }
  if (map[0x0][0x0] && map[0x1][0x0] && map[0x2][0x0]) {
    flg = !![];
  }
  if (map[0x0][0x1] && map[0x1][0x1] && map[0x2][0x1]) {
    flg = !![];
  }
  if (map[0x0][0x2] && map[0x1][0x2] && map[0x2][0x2]) {
    flg = !![];
  }
  if (map[0x0][0x0] && map[0x1][0x1] && map[0x2][0x2]) {
    flg = !![];
  }
  if (map[0x0][0x2] && map[0x1][0x1] && map[0x2][0x0]) {
    flg = !![];
  }
  console[__DECODE_0__(0x7d)](flg ? __DECODE_0__(0x87) : 'No');
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8')[__DECODE_0__(0x78)]()[__DECODE_0__(0x79)]('\x0a'));
function __STRING_ARRAY__() {
  var _0x436a41 = ['599924DGiTfV', '3787870NPeptl', 'indexOf', '2788659DSVoee', '70Yenqhg', 'Yes', '71080qEqeJY', 'trim', 'split', '639094tFohWS', '204627HzAOfn', '9486JtIVMY', 'log', '5fkqAHg', 'push', 'map', '6oqkIgc'];
  __STRING_ARRAY__ = function () {
    return _0x436a41;
  };
  return __STRING_ARRAY__();
}
