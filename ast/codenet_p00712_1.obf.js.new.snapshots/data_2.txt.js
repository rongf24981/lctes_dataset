(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x7d)) / 0x1 * (parseInt(__DECODE_0__(0x7f)) / 0x2) + parseInt(__DECODE_0__(0x73)) / 0x3 + parseInt(__DECODE_0__(0x6f)) / 0x4 + parseInt(__DECODE_0__(0x79)) / 0x5 + parseInt(__DECODE_0__(0x76)) / 0x6 * (parseInt(__DECODE_0__(0x75)) / 0x7) + -parseInt(__DECODE_0__(0x70)) / 0x8 + -parseInt(__DECODE_0__(0x7e)) / 0x9 * (parseInt(__DECODE_0__(0x71)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xe416f);
var input = require('fs')[__DECODE_0__(0x78)]('/dev/stdin', __DECODE_0__(0x74));
var arr = input[__DECODE_0__(0x77)]()['split']('\x0a');
while (!![]) {
  var pqan = arr['shift']()['split']('\x20')[__DECODE_0__(0x7c)](Number);
  if (pqan[__DECODE_0__(0x7a)]('\x20') == __DECODE_0__(0x7b)) {
    break;
  }
  var p = pqan[0x0];
  var q = pqan[0x1];
  var a = pqan[0x2];
  var n = pqan[0x3];
  var ans = 0x0;
  function loop(start, P, Q, A, cnt) {
    if (cnt > 0x0) {
      if (cnt > n) {
        return;
      }
      if (p * Q == P * q) {
        ans++;
        return;
      } else {
        if (p * Q < P * q) {
          return;
        }
      }
    }
    for (var i = start; A * i <= a; i++) {
      loop(i, 0x1 * Q + i * P, Q * i, A * i, cnt + 0x1);
    }
  }
  loop(0x1, 0x0, 0x1, 0x1, 0x0);
  console[__DECODE_0__(0x72)](ans);
}
function __DECODE_0__(entvIN, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x6f;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(entvIN, key);
}
function __STRING_ARRAY__() {
  var _0x287a3a = ['utf8', '7oxhOrJ', '10414158fTYhLy', 'trim', 'readFileSync', '6140950oQyljF', 'join', '0\x200\x200\x200', 'map', '85OWBcFT', '15111yBdsmB', '21022oNFErX', '6823580eDRGSn', '2119696oBlsYd', '31580gFvOLf', 'log', '2814858tcOYqg'];
  __STRING_ARRAY__ = function () {
    return _0x287a3a;
  };
  return __STRING_ARRAY__();
}
