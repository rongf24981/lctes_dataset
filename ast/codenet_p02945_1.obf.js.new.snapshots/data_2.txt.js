'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x198)) / 0x1 * (-parseInt(__DECODE_0__(0x192)) / 0x2) + parseInt(__DECODE_0__(0x199)) / 0x3 * (parseInt(__DECODE_0__(0x19a)) / 0x4) + parseInt(__DECODE_0__(0x193)) / 0x5 * (parseInt(__DECODE_0__(0x197)) / 0x6) + parseInt(__DECODE_0__(0x195)) / 0x7 * (-parseInt(__DECODE_0__(0x19c)) / 0x8) + -parseInt(__DECODE_0__(0x196)) / 0x9 + -parseInt(__DECODE_0__(0x19d)) / 0xa + parseInt(__DECODE_0__(0x19e)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x2d24f);
function __DECODE_0__(dqedYc, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x192;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(dqedYc, key);
}
function __STRING_ARRAY__() {
  const _0x248eb3 = ['915852dpUWQM', '4oZCfNd', 'log', '139192kUbgYA', '3683860BkRneZ', '1409551lyNspi', '555932HEiYXP', '245510yFOoZa', 'readFileSync', '77BTgpev', '1026099jLOCeH', '18YQPEGU', '1AehXKs'];
  __STRING_ARRAY__ = function () {
    return _0x248eb3;
  };
  return __STRING_ARRAY__();
}
const main = input => {
  const args = input['split']('\x0a')['map'](arg => arg['split']('\x20'));
  const A = parseInt(args[0x0][0x0], 0xa);
  const B = parseInt(args[0x0][0x1], 0xa);
  console[__DECODE_0__(0x19b)](Math['max'](A + B, A - B, A * B) + 0x0);
};
main(require('fs')[__DECODE_0__(0x194)]('/dev/stdin', 'utf8'));
