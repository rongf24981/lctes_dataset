function __STRING_ARRAY__() {
  const _0x656a8f = ['fromCharCode', 'readFileSync', '1156968FPErpD', 'utf8', '54002Ekzuou', '27lqofsF', '184074vVwcgy', '/dev/stdin', '10yTcmgL', '2748429lyKoCC', '11612348HVvlTn', '864927DoKaln', '6vLVeEQ', '1598365FttimN', 'split', '24RUUbOV'];
  __STRING_ARRAY__ = function () {
    return _0x656a8f;
  };
  return __STRING_ARRAY__();
}
const a0_0x14a88b = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  const _0x2879ee = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(_0x2879ee(0x19a)) / 0x1 + parseInt(_0x2879ee(0x198)) / 0x2 * (-parseInt(_0x2879ee(0x199)) / 0x3) + -parseInt(_0x2879ee(0x196)) / 0x4 + parseInt(_0x2879ee(0x1a1)) / 0x5 * (-parseInt(_0x2879ee(0x1a0)) / 0x6) + parseInt(_0x2879ee(0x19f)) / 0x7 * (parseInt(_0x2879ee(0x1a3)) / 0x8) + parseInt(_0x2879ee(0x19d)) / 0x9 * (-parseInt(_0x2879ee(0x19c)) / 0xa) + parseInt(_0x2879ee(0x19e)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x6ea00);
function Main(inputs) {
  const _0x549121 = __DECODE_0__;
  const inputline = inputs[_0x549121(0x1a2)]('\x0a')['map'](x => parseInt(x, 0xa));
  const line = inputline[0x0];
  function base26(number) {
    const _0x4eaf96 = _0x549121;
    let remainder26 = number % 0x1a;
    let division26 = Math['floor'](number / 0x1a);
    let output = remainder26 != 0x0 ? String[_0x4eaf96(0x1a4)](0x40 + remainder26) : (--division26, 'Z');
    return output = division26 != 0x0 ? base26(division26) + output : output;
  }
  console['log'](base26(line)['toLowerCase']());
}
function __DECODE_0__(tqbwyB, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x195;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(tqbwyB, key);
}
Main(require('fs')[a0_0x14a88b(0x195)](a0_0x14a88b(0x19b), a0_0x14a88b(0x197)));
