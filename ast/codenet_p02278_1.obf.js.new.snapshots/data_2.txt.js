function __STRING_ARRAY__() {
  var _0x273ceb = ['log', 'readFileSync', 'indexOf', '/dev/stdin', '1000536YMqKBc', '9593630LuqzVC', 'length', 'sort', '2898057zZBdPk', 'input', '4132062enOzLm', '4jSjcoK', '7TSSFYO', '24865aQydMr', '57383TuGPNS', '180VSdkxw', '564HUEWEe', 'map', '210288zQbgAe', 'ascii', 'concat', 'split'];
  __STRING_ARRAY__ = function () {
    return _0x273ceb;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xe5)) / 0x1 * (-parseInt(__DECODE_0__(0xe2)) / 0x2) + parseInt(__DECODE_0__(0xf5)) / 0x3 + parseInt(__DECODE_0__(0xe7)) / 0x4 * (parseInt(__DECODE_0__(0xe4)) / 0x5) + -parseInt(__DECODE_0__(0xf1)) / 0x6 * (parseInt(__DECODE_0__(0xe3)) / 0x7) + parseInt(__DECODE_0__(0xe9)) / 0x8 * (-parseInt(__DECODE_0__(0xe6)) / 0x9) + -parseInt(__DECODE_0__(0xf2)) / 0xa + parseInt(__DECODE_0__(0xe1)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x7b7b5);
config = {
  'input': __DECODE_0__(0xf0),
  'newline': '\x0a'
};
line = require('fs')[__DECODE_0__(0xee)](config[__DECODE_0__(0xf6)], __DECODE_0__(0xea))[__DECODE_0__(0xec)](config['newline'], 0x2);
w = line[0x1][__DECODE_0__(0xec)]('\x20')[__DECODE_0__(0xe8)](Number);
sorted = [][__DECODE_0__(0xeb)](w);
sorted[__DECODE_0__(0xf4)](function (a, b) {
  return a - b;
});
function __DECODE_0__(tIyGGx, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xe1;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(tIyGGx, key);
}
cost = 0x0;
for (i = w[__DECODE_0__(0xf3)] - 0x1; i >= 0x0; i--) {
  idx = w[__DECODE_0__(0xef)](sorted[i]);
  if (idx === i) {
    continue;
  }
  cost += w[i] + w[idx];
  tmp = w[i];
  w[i] = w[idx];
  w[idx] = tmp;
}
console[__DECODE_0__(0xed)](cost);
