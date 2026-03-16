var a0_0x7fa966 = __DECODE_0__;
function __STRING_ARRAY__() {
  var _0x273ceb = ['log', 'readFileSync', 'indexOf', '/dev/stdin', '1000536YMqKBc', '9593630LuqzVC', 'length', 'sort', '2898057zZBdPk', 'input', '4132062enOzLm', '4jSjcoK', '7TSSFYO', '24865aQydMr', '57383TuGPNS', '180VSdkxw', '564HUEWEe', 'map', '210288zQbgAe', 'ascii', 'concat', 'split'];
  __STRING_ARRAY__ = function () {
    return _0x273ceb;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var _0x263581 = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(_0x263581(0xe5)) / 0x1 * (-parseInt(_0x263581(0xe2)) / 0x2) + parseInt(_0x263581(0xf5)) / 0x3 + parseInt(_0x263581(0xe7)) / 0x4 * (parseInt(_0x263581(0xe4)) / 0x5) + -parseInt(_0x263581(0xf1)) / 0x6 * (parseInt(_0x263581(0xe3)) / 0x7) + parseInt(_0x263581(0xe9)) / 0x8 * (-parseInt(_0x263581(0xe6)) / 0x9) + -parseInt(_0x263581(0xf2)) / 0xa + parseInt(_0x263581(0xe1)) / 0xb;
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
  'input': a0_0x7fa966(0xf0),
  'newline': '\x0a'
};
line = require('fs')[a0_0x7fa966(0xee)](config[a0_0x7fa966(0xf6)], a0_0x7fa966(0xea))[a0_0x7fa966(0xec)](config['newline'], 0x2);
w = line[0x1][a0_0x7fa966(0xec)]('\x20')[a0_0x7fa966(0xe8)](Number);
sorted = [][a0_0x7fa966(0xeb)](w);
sorted[a0_0x7fa966(0xf4)](function (a, b) {
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
for (i = w[a0_0x7fa966(0xf3)] - 0x1; i >= 0x0; i--) {
  idx = w[a0_0x7fa966(0xef)](sorted[i]);
  if (idx === i) {
    continue;
  }
  cost += w[i] + w[idx];
  tmp = w[i];
  w[i] = w[idx];
  w[idx] = tmp;
}
console[a0_0x7fa966(0xed)](cost);
