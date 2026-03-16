(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x82)) / 0x1 + parseInt(__DECODE_0__(0x7b)) / 0x2 + -parseInt(__DECODE_0__(0x80)) / 0x3 * (-parseInt(__DECODE_0__(0x83)) / 0x4) + parseInt(__DECODE_0__(0x7a)) / 0x5 + -parseInt(__DECODE_0__(0x7d)) / 0x6 * (parseInt(__DECODE_0__(0x79)) / 0x7) + -parseInt(__DECODE_0__(0x7e)) / 0x8 + parseInt(__DECODE_0__(0x7f)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x5d867);
function __STRING_ARRAY__() {
  var _0x5d0792 = ['2789925JJdRqs', '673424FzhTib', 'forEach', '3078ydBpao', '3751016smqbBO', '2306565WnFOWs', '3LqXlCo', 'shift', '136272lvvusS', '74828lhXHtS', 'map', '/dev/stdin', 'readFileSync', 'trim', 'split', '6195iewzNh'];
  __STRING_ARRAY__ = function () {
    return _0x5d0792;
  };
  return __STRING_ARRAY__();
}
var input = require('fs')[__DECODE_0__(0x86)](__DECODE_0__(0x85), 'utf8');
function __DECODE_0__(sshQQZ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x77;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(sshQQZ, key);
}
var arr = input[__DECODE_0__(0x77)]()[__DECODE_0__(0x78)]('\x0a');
var nq = arr[__DECODE_0__(0x81)]()[__DECODE_0__(0x78)]('\x20')[__DECODE_0__(0x84)](Number);
var player = [];
var maxValue = 0x0;
var maxId = 0x0;
for (var i = 0x0; i < nq[0x0]; i++) {
  player[i] = 0x0;
}
arr[__DECODE_0__(0x7c)](function (V) {
  var av = V[__DECODE_0__(0x78)]('\x20')[__DECODE_0__(0x84)](Number);
  var a = av[0x0] - 0x1;
  var v = av[0x1];
  player[a] += v;
  if (a == maxId && v >= 0x0) {
    maxValue += v;
  } else {
    if (maxValue == player[a] && maxId > a) {
      maxId = a;
    } else {
      if (maxValue < player[a]) {
        maxValue = player[a];
        maxId = a;
      } else {
        if (a == maxId && v < 0x0) {
          var max = -0x1 * Infinity;
          player[__DECODE_0__(0x7c)](function (value, index) {
            if (max < value) {
              max = value;
              maxValue = value;
              maxId = index;
            }
          });
        }
      }
    }
  }
  console['log'](maxId + 0x1 + '\x20' + maxValue);
});
