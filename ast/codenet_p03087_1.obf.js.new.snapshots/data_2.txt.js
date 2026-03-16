(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xcb)) / 0x1 * (-parseInt(__DECODE_0__(0xd0)) / 0x2) + -parseInt(__DECODE_0__(0xd8)) / 0x3 + -parseInt(__DECODE_0__(0xd2)) / 0x4 + -parseInt(__DECODE_0__(0xd4)) / 0x5 + -parseInt(__DECODE_0__(0xca)) / 0x6 * (parseInt(__DECODE_0__(0xd9)) / 0x7) + -parseInt(__DECODE_0__(0xd1)) / 0x8 * (parseInt(__DECODE_0__(0xd6)) / 0x9) + parseInt(__DECODE_0__(0xcd)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x6d3b9);
var input = require('fs')['readFileSync'](__DECODE_0__(0xce), __DECODE_0__(0xcf));
var arr = input[__DECODE_0__(0xcc)]('\x0a');
var nq = arr[0x0][__DECODE_0__(0xcc)]('\x20')[__DECODE_0__(0xd5)](Number);
var str = arr[0x1];
var a = [0x0, 0x0];
var cnt = 0x0;
function __STRING_ARRAY__() {
  var _0x2a93d0 = ['168Jjqbba', '1291552qRVAYL', 'push', '384255oiYmNA', 'map', '369153NDiAGG', 'join', '1617138CTrjKm', '5558049WWDasG', '6sdyXkB', '739994dqsxkl', 'split', '23015720REIYVK', '/dev/stdin', 'utf8', '2dgeLMC'];
  __STRING_ARRAY__ = function () {
    return _0x2a93d0;
  };
  return __STRING_ARRAY__();
}
for (var i = 0x1; i < str['length']; i++) {
  if (str[i] == 'C' && str[i - 0x1] == 'A') {
    cnt++;
  }
  a['push'](cnt);
}
var ans = [];
for (var i = 0x2, len = nq[0x1] + 0x2; i < len; i++) {
  var lr = arr[i]['split']('\x20');
  ans[__DECODE_0__(0xd3)](a[lr[0x1] - 0x0] - a[lr[0x0] - 0x0]);
}
function __DECODE_0__(yfrwyh, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xca;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(yfrwyh, key);
}
console['log'](ans[__DECODE_0__(0xd7)]('\x0a'));
