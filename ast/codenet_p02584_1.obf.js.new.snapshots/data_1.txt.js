const a0_0x5de767 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  const _0x5cee56 = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(_0x5cee56(0xe4)) / 0x1 + -parseInt(_0x5cee56(0xdf)) / 0x2 * (parseInt(_0x5cee56(0xd7)) / 0x3) + -parseInt(_0x5cee56(0xe0)) / 0x4 * (-parseInt(_0x5cee56(0xe2)) / 0x5) + -parseInt(_0x5cee56(0xda)) / 0x6 * (-parseInt(_0x5cee56(0xd6)) / 0x7) + -parseInt(_0x5cee56(0xdc)) / 0x8 * (-parseInt(_0x5cee56(0xdb)) / 0x9) + -parseInt(_0x5cee56(0xde)) / 0xa + parseInt(_0x5cee56(0xe5)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xc4350);
const input = require('fs')['readFileSync']('/dev/stdin', a0_0x5de767(0xe3));
const lines = input[a0_0x5de767(0xdd)]('\x0a');
let [X, K, D] = lines[0x0][a0_0x5de767(0xdd)]('\x20')[a0_0x5de767(0xe1)](Number);
X = Math[a0_0x5de767(0xd8)](X);
const div = Math[a0_0x5de767(0xd9)](Math[a0_0x5de767(0xe6)](X / D), K);
let x = X - div * D;
function __STRING_ARRAY__() {
  const _0xa136d0 = ['200epoLaE', 'split', '8157720IyGYAa', '250970LyrFMq', '5103996CfUrhi', 'map', '5xWOonP', 'utf8', '232648WFUmyP', '8973657FrxHKe', 'floor', '742hQUEXf', '15ozcwTd', 'abs', 'min', '21198NZmich', '4761KAxXWM'];
  __STRING_ARRAY__ = function () {
    return _0xa136d0;
  };
  return __STRING_ARRAY__();
}
let k = K - div;
for (let i = 0x0; i < k; i++) {
  x -= D;
  if (x <= 0x0) {
    if (!((k - i) % 0x2)) {
      x += D;
    }
    break;
  }
}
function __DECODE_0__(Pbspxb, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xd6;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(Pbspxb, key);
}
console['log'](Math[a0_0x5de767(0xd8)](x));
