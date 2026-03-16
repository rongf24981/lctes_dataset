'use strict';

function __DECODE_0__(lgGxxS, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x9e;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(lgGxxS, key);
}
function __STRING_ARRAY__() {
  const _0x5a1a08 = ['60650LIFZIh', '59694RDHilm', '1886076jHBkEd', '32NrUelp', 'readFileSync', '20487pcLrWo', 'utf8', '145mSnNmf', '267465UepbMA', '1YbIOoB', '16AgRELU', '1591280zIbGxG', '624211UEjauz', 'split', 'map', '/dev/stdin', 'log'];
  __STRING_ARRAY__ = function () {
    return _0x5a1a08;
  };
  return __STRING_ARRAY__();
}
const a0_0x458a03 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  const _0x2dcce3 = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(_0x2dcce3(0x9f)) / 0x1 * (parseInt(_0x2dcce3(0xa7)) / 0x2) + parseInt(_0x2dcce3(0xac)) / 0x3 * (parseInt(_0x2dcce3(0xaa)) / 0x4) + parseInt(_0x2dcce3(0xae)) / 0x5 * (parseInt(_0x2dcce3(0xa8)) / 0x6) + -parseInt(_0x2dcce3(0xa2)) / 0x7 * (parseInt(_0x2dcce3(0xa0)) / 0x8) + parseInt(_0x2dcce3(0xa9)) / 0x9 + -parseInt(_0x2dcce3(0xa1)) / 0xa + parseInt(_0x2dcce3(0x9e)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x33151);
const main = arg => {
  const _0x2deab4 = __DECODE_0__;
  arg = arg['trim']()[_0x2deab4(0xa3)]('\x0a');
  const N = parseInt(arg[0x0]);
  const P = arg[0x1]['split']('\x20')[_0x2deab4(0xa4)](n => parseInt(n));
  let answer = 0x0;
  for (let i in P) {
    if (parseInt(i) + 0x1 === P[i]) {
      let temp = P[i];
      P[i] = P[parseInt(i) + 0x1];
      P[parseInt(i) + 0x1] = temp;
      answer++;
    }
  }
  console[_0x2deab4(0xa6)](answer);
};
main(require('fs')[a0_0x458a03(0xab)](a0_0x458a03(0xa5), a0_0x458a03(0xad)));
