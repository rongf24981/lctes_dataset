'use strict';

function __DECODE_0__(wSZrry, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x121;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(wSZrry, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x12b)) / 0x1 * (parseInt(__DECODE_0__(0x125)) / 0x2) + -parseInt(__DECODE_0__(0x124)) / 0x3 * (-parseInt(__DECODE_0__(0x130)) / 0x4) + parseInt(__DECODE_0__(0x127)) / 0x5 + parseInt(__DECODE_0__(0x123)) / 0x6 * (-parseInt(__DECODE_0__(0x132)) / 0x7) + parseInt(__DECODE_0__(0x12f)) / 0x8 + parseInt(__DECODE_0__(0x12e)) / 0x9 * (-parseInt(__DECODE_0__(0x12d)) / 0xa) + -parseInt(__DECODE_0__(0x131)) / 0xb * (parseInt(__DECODE_0__(0x122)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x497ee);
function __STRING_ARRAY__() {
  const _0x172f9b = ['fill', '83357XPteVC', 'utf8', '10LZQbYz', '4067748jYIpWa', '598576NGBCSx', '12wIheAW', '792omqfNj', '3731LodnVL', 'filter', 'map', '/dev/stdin', '82644oegOfG', '1434bJuRNf', '577251GVDySn', '10wozjTH', 'length', '1537015owArej', 'shift', 'split'];
  __STRING_ARRAY__ = function () {
    return _0x172f9b;
  };
  return __STRING_ARRAY__();
}
function main(stdin) {
  const input = stdin[__DECODE_0__(0x129)]('\x0a');
  const N = input[__DECODE_0__(0x128)]()['split']('\x20')[__DECODE_0__(0x134)](v => parseInt(v, 0xa))[0x0];
  const gates = input[__DECODE_0__(0x134)](g => g['split']('\x20')['map'](v => parseInt(v, 0xa)));
  const cards = new Array(N)[__DECODE_0__(0x12a)](!![]);
  gates['forEach'](g => {
    for (let i = 0x0; i < g[0x0] - 0x1; ++i) {
      cards[i] = ![];
    }
    for (let i = g[0x1]; i < N; ++i) {
      cards[i] = ![];
    }
  });
  console['log'](cards[__DECODE_0__(0x133)](c => c)[__DECODE_0__(0x126)]);
}
main(require('fs')['readFileSync'](__DECODE_0__(0x121), __DECODE_0__(0x12c)));
