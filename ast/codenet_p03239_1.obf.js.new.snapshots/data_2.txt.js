function __STRING_ARRAY__() {
  var _0x98a8d4 = ['614428BruOSj', 'split', 'stdin', 'log', '2821zvVlmy', '64834yIHIzC', '562836aVwgKf', '7605064PWgNbV', '2712vEYmkA', 'min', '163989PElMpl', 'close', 'createInterface', '5uxoddt', '3002DYblTQ', 'map', '2080Abcpqk', '3hXaiLy', 'TLE', 'readline'];
  __STRING_ARRAY__ = function () {
    return _0x98a8d4;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x97)) / 0x1 * (-parseInt(__DECODE_0__(0x94)) / 0x2) + parseInt(__DECODE_0__(0x8c)) / 0x3 + -parseInt(__DECODE_0__(0x9a)) / 0x4 * (parseInt(__DECODE_0__(0x93)) / 0x5) + -parseInt(__DECODE_0__(0x8e)) / 0x6 * (-parseInt(__DECODE_0__(0x8a)) / 0x7) + -parseInt(__DECODE_0__(0x8d)) / 0x8 + -parseInt(__DECODE_0__(0x90)) / 0x9 + parseInt(__DECODE_0__(0x96)) / 0xa * (parseInt(__DECODE_0__(0x8b)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x74a42);
var lines = [];
function __DECODE_0__(XSAVyi, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x8a;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(XSAVyi, key);
}
var result = Infinity;
var readline = require(__DECODE_0__(0x99));
var rl = readline[__DECODE_0__(0x92)]({
  'input': process[__DECODE_0__(0x9c)],
  'output': process['stdout']
});
rl['on']('line', function (x) {
  lines['push'](x);
});
rl['on'](__DECODE_0__(0x91), function () {
  var N = Number(lines[0x0][__DECODE_0__(0x9b)]('\x20')[0x0]);
  var T = Number(lines[0x0][__DECODE_0__(0x9b)]('\x20')[0x1]);
  lines['shift']();
  var array = lines['map'](value => value[__DECODE_0__(0x9b)]('\x20')[__DECODE_0__(0x95)](value => Number(value)));
  for (var i of array) {
    if (i[0x1] <= T) {
      result = Math[__DECODE_0__(0x8f)](result, i[0x0]);
    }
  }
  result !== Infinity ? console[__DECODE_0__(0x9d)](result) : console['log'](__DECODE_0__(0x98));
});
