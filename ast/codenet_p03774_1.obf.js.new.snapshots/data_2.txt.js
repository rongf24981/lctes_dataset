'use strict';

function __STRING_ARRAY__() {
  const _0x30f0aa = ['6094110iKAphk', '13610sWONId', 'push', '1020355BVvCcE', 'map', 'split', 'slice', '/dev/stdin', '8hHfTsr', '179036HymGGn', 'utf-8', 'log', '16138PcvDap', 'forEach', '14NmzMFT', '138975Rjnkmq', '390vmntVC', '549540ZmGwbz'];
  __STRING_ARRAY__ = function () {
    return _0x30f0aa;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x10d)) / 0x1 * (-parseInt(__DECODE_0__(0x10f)) / 0x2) + parseInt(__DECODE_0__(0x110)) / 0x3 + -parseInt(__DECODE_0__(0x10a)) / 0x4 + parseInt(__DECODE_0__(0x114)) / 0x5 * (-parseInt(__DECODE_0__(0x111)) / 0x6) + -parseInt(__DECODE_0__(0x116)) / 0x7 + -parseInt(__DECODE_0__(0x109)) / 0x8 * (parseInt(__DECODE_0__(0x112)) / 0x9) + parseInt(__DECODE_0__(0x113)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x1be50);
function __DECODE_0__(djqJRp, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x109;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(djqJRp, key);
}
const main = input => {
  input = input[__DECODE_0__(0x118)]('\x0a');
  const N = parseInt(input[0x0][__DECODE_0__(0x118)]('\x20')[0x0]);
  const M = parseInt(input[0x0]['split']('\x20')[0x1]);
  let arr = input[__DECODE_0__(0x119)](0x1, N + 0x1);
  let points = input['slice'](N + 0x1, M + N + 0x1);
  const parse = v => {
    let temp = v[__DECODE_0__(0x118)]('\x20')[__DECODE_0__(0x117)](vv => parseInt(vv));
    return {
      'x': temp[0x0],
      'y': temp[0x1]
    };
  };
  arr = arr['map'](parse);
  points = points[__DECODE_0__(0x117)](parse);
  let indexArr = [];
  arr[__DECODE_0__(0x10e)]((v, i) => {
    let minDist = 0x3b9aca00;
    let index = 0x0;
    points[__DECODE_0__(0x10e)]((w, j) => {
      let dist = Math['abs'](v['x'] - w['x']) + Math['abs'](v['y'] - w['y']);
      if (dist < minDist) {
        minDist = dist;
        index = j;
      }
    });
    indexArr[__DECODE_0__(0x115)](index);
  });
  indexArr[__DECODE_0__(0x10e)](v => console[__DECODE_0__(0x10c)](v + 0x1));
};
main(require('fs')['readFileSync'](__DECODE_0__(0x11a), __DECODE_0__(0x10b)));
