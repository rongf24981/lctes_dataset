function __STRING_ARRAY__() {
  const _0x11e37a = ['825949tNmElX', '5327615cZLezZ', '287ghRPMy', '30wfDelu', '3986382qQVhzM', '4aoKIwW', '24753751uXYCaH', 'readFileSync', '79986tfCNYh', '2zNGZTE', 'split', '15002480iBEbPo', 'log', '4074507Uracwq', 'utf8'];
  __STRING_ARRAY__ = function () {
    return _0x11e37a;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(xfwmha, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x18c;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(xfwmha, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x18d)) / 0x1 * (-parseInt(__DECODE_0__(0x196)) / 0x2) + -parseInt(__DECODE_0__(0x191)) / 0x3 + parseInt(__DECODE_0__(0x192)) / 0x4 * (parseInt(__DECODE_0__(0x18e)) / 0x5) + parseInt(__DECODE_0__(0x195)) / 0x6 * (-parseInt(__DECODE_0__(0x18f)) / 0x7) + parseInt(__DECODE_0__(0x198)) / 0x8 + parseInt(__DECODE_0__(0x19a)) / 0x9 * (parseInt(__DECODE_0__(0x190)) / 0xa) + -parseInt(__DECODE_0__(0x193)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xf3f4d);
function Main(input) {
  let inputs = input[__DECODE_0__(0x197)]('\x20');
  let K = Number(inputs[0x0]);
  let S = Number(inputs[0x1]);
  let count = 0x0;
  for (let X = 0x0; X <= K; X++) {
    for (let Y = 0x0; Y <= K; Y++) {
      for (let Z = 0x0; Z <= K; Z++) {
        if (X + Y + Z === S) {
          count++;
        }
      }
    }
  }
  console[__DECODE_0__(0x199)](count);
}
Main(require('fs')[__DECODE_0__(0x194)]('/dev/stdin', __DECODE_0__(0x18c)));
