(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xa0)) / 0x1 * (parseInt(__DECODE_0__(0x97)) / 0x2) + -parseInt(__DECODE_0__(0x98)) / 0x3 * (parseInt(__DECODE_0__(0x9c)) / 0x4) + parseInt(__DECODE_0__(0x93)) / 0x5 * (parseInt(__DECODE_0__(0x9d)) / 0x6) + parseInt(__DECODE_0__(0x9b)) / 0x7 + parseInt(__DECODE_0__(0xa1)) / 0x8 + -parseInt(__DECODE_0__(0x94)) / 0x9 * (-parseInt(__DECODE_0__(0x95)) / 0xa) + parseInt(__DECODE_0__(0x9a)) / 0xb * (-parseInt(__DECODE_0__(0x9f)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x3ac7d);
var input = require('fs')[__DECODE_0__(0x96)](__DECODE_0__(0x92), 'utf8');
var [w, h, c] = input[__DECODE_0__(0xa2)]()['split']('\x20');
function __STRING_ARRAY__() {
  var _0x18a844 = ['/dev/stdin', '197485dlUQEc', '9GynOGU', '3870350gdicYm', 'readFileSync', '4pJFAgh', '442899JLXFPx', 'repeat', '11aOKwem', '3112326lapUDa', '4bsoxOS', '6qOIGQa', 'push', '9590208YJrcpd', '40759ZSZpfI', '3183600MUnscp', 'trim'];
  __STRING_ARRAY__ = function () {
    return _0x18a844;
  };
  return __STRING_ARRAY__();
}
w = w - 0x0;
h = h - 0x0;
var ans = [];
ans['push']('+' + '-'[__DECODE_0__(0x99)](w - 0x2) + '+');
for (var i = 0x0; i < h - 0x2; i++) {
  ans['push']('|' + '.'['repeat'](w - 0x2) + '|');
}
function __DECODE_0__(vUtjRZ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x92;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(vUtjRZ, key);
}
ans[__DECODE_0__(0x9e)]('+' + '-'[__DECODE_0__(0x99)](w - 0x2) + '+');
ans[Math['floor'](h / 0x2)] = '|' + '.'[__DECODE_0__(0x99)]((w - 0x3) / 0x2) + c + '.'[__DECODE_0__(0x99)]((w - 0x3) / 0x2) + '|';
console['log'](ans['join']('\x0a')[__DECODE_0__(0xa2)]());
