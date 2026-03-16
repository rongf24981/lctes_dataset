(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xd9)) / 0x1 + -parseInt(__DECODE_0__(0xd7)) / 0x2 * (parseInt(__DECODE_0__(0xd5)) / 0x3) + -parseInt(__DECODE_0__(0xcf)) / 0x4 * (parseInt(__DECODE_0__(0xd6)) / 0x5) + parseInt(__DECODE_0__(0xcc)) / 0x6 + -parseInt(__DECODE_0__(0xd4)) / 0x7 + -parseInt(__DECODE_0__(0xd8)) / 0x8 + parseInt(__DECODE_0__(0xd3)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xd5d82);
var obj = {};
for (var i = 0x0; i <= 0x19; i++) {
  for (var j = 0x0; j <= 0x10; j++) {
    for (var k = 0x0; k <= 0xa; k++) {
      var weight = 0xc8 * i + 0x12c * j + 0x1f4 * k;
      if (weight > 0x1388) {
        continue;
      }
      var money = 0x0;
      money += 0x17c * 0x5 * 0.8 * Math[__DECODE_0__(0xd2)](i / 0x5);
      money += 0x226 * 0x4 * 0.85 * Math[__DECODE_0__(0xd2)](j / 0x4);
      money += 0x352 * 0x3 * 0.88 * Math[__DECODE_0__(0xd2)](k / 0x3);
      money += 0x17c * (i % 0x5);
      money += 0x226 * (j % 0x4);
      money += 0x352 * (k % 0x3);
      if (obj[__DECODE_0__(0xdb)](weight)) {
        obj[weight] = Math[__DECODE_0__(0xd0)](obj[weight], money);
      } else {
        obj[weight] = money;
      }
    }
  }
}
function __DECODE_0__(QRXHOd, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xcc;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(QRXHOd, key);
}
var input = require('fs')[__DECODE_0__(0xda)](__DECODE_0__(0xcd), 'utf8');
var Arr = input['trim']()[__DECODE_0__(0xce)]('\x0a');
function __STRING_ARRAY__() {
  var _0x113935 = ['2745cQgfzK', '10eMtgNr', '6644392TOxrym', '958983nudqFs', 'readFileSync', 'hasOwnProperty', '2377428yULNYT', '/dev/stdin', 'split', '2452sjNZeY', 'min', 'shift', 'floor', '21489309hQFIjq', '7803040suwcVs', '351126yExyvU'];
  __STRING_ARRAY__ = function () {
    return _0x113935;
  };
  return __STRING_ARRAY__();
}
while (!![]) {
  var n = Arr[__DECODE_0__(0xd1)]() - 0x0;
  if (n == 0x0) {
    break;
  }
  console['log'](obj[n]);
}
