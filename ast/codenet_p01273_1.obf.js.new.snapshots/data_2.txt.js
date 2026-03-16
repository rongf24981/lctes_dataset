function __DECODE_0__(PhPBnd, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x138;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(PhPBnd, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x143)) / 0x1 * (-parseInt(__DECODE_0__(0x138)) / 0x2) + -parseInt(__DECODE_0__(0x146)) / 0x3 * (parseInt(__DECODE_0__(0x14b)) / 0x4) + -parseInt(__DECODE_0__(0x13f)) / 0x5 * (parseInt(__DECODE_0__(0x13a)) / 0x6) + parseInt(__DECODE_0__(0x13d)) / 0x7 + parseInt(__DECODE_0__(0x14a)) / 0x8 * (-parseInt(__DECODE_0__(0x149)) / 0x9) + parseInt(__DECODE_0__(0x13c)) / 0xa + parseInt(__DECODE_0__(0x13e)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xb51ea);
var data = require('fs')[__DECODE_0__(0x144)](__DECODE_0__(0x139), __DECODE_0__(0x142));
var input = data[__DECODE_0__(0x140)]()[__DECODE_0__(0x148)]('\x0a');
var line = 0x0;
function __STRING_ARRAY__() {
  var _0x55f2ef = ['14410670ZuuNtK', '5375818lrivtG', '11927894twbuXM', '230CukKyz', 'trim', 'push', 'utf8', '2455qjHHEi', 'readFileSync', 'forEach', '34218PZYOVP', 'sort', 'split', '367542brWziY', '248DBjRbT', '356WAkUoF', '90sbjNcV', '/dev/stdin', '20862HRzHSc', 'map'];
  __STRING_ARRAY__ = function () {
    return _0x55f2ef;
  };
  return __STRING_ARRAY__();
}
while (!![]) {
  var nm = input[line][__DECODE_0__(0x148)]('\x20')[__DECODE_0__(0x13b)](Number);
  line++;
  var n = nm[0x0];
  var m = nm[0x1];
  if (n == 0x0 && m == 0x0) {
    break;
  }
  var infected = [];
  for (var i = 0x0; i < n; i++) {
    infected[i] = !![];
  }
  infected[0x0] = ![];
  var tsd = [];
  for (var i = 0x0; i < m; i++) {
    var packet = input[line][__DECODE_0__(0x148)]('\x20')[__DECODE_0__(0x13b)](Number);
    line++;
    tsd[__DECODE_0__(0x141)]([packet[0x0], packet[0x1] - 0x1, packet[0x2] - 0x1]);
  }
  tsd[__DECODE_0__(0x147)](function (a, b) {
    return a[0x0] - b[0x0];
  });
  tsd[__DECODE_0__(0x145)](function (packet) {
    var s = packet[0x1];
    var d = packet[0x2];
    if (!infected[s]) {
      infected[d] = ![];
    }
  });
  var answer = 0x0;
  infected[__DECODE_0__(0x145)](function (packet) {
    if (!packet) {
      answer++;
    }
  });
  console['log'](answer);
}
