'use strict';

function __STRING_ARRAY__() {
  const _0x433d60 = ['6xLQhfz', '37042iumPoR', '88891reDCan', '70UiWynn', 'log', 'map', 'push', '1426475yJmUAV', '167316FPQSkd', 'readFileSync', '/dev/stdin', 'utf8', '618579YHzkbb', '6LtRoXa', '8mnOpFc', 'trim', 'join', 'split', '143656GcAjDt', '2130611JBoXRH'];
  __STRING_ARRAY__ = function () {
    return _0x433d60;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x18b)) / 0x1 * (parseInt(__DECODE_0__(0x183)) / 0x2) + -parseInt(__DECODE_0__(0x17e)) / 0x3 + parseInt(__DECODE_0__(0x188)) / 0x4 + parseInt(__DECODE_0__(0x17d)) / 0x5 * (parseInt(__DECODE_0__(0x18a)) / 0x6) + -parseInt(__DECODE_0__(0x189)) / 0x7 + parseInt(__DECODE_0__(0x184)) / 0x8 * (parseInt(__DECODE_0__(0x182)) / 0x9) + -parseInt(__DECODE_0__(0x18d)) / 0xa * (-parseInt(__DECODE_0__(0x18c)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x30370);
function __DECODE_0__(evRnde, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x17d;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(evRnde, key);
}
const main = arg => {
  arg = arg[__DECODE_0__(0x185)]()['split']('\x0a');
  const N = parseInt(arg[0x0]);
  const A = arg[0x1][__DECODE_0__(0x187)]('\x20')[__DECODE_0__(0x18f)](n => parseInt(0x2 * n));
  let offset = 0x0;
  for (let i = 0x0; i < N; i++) {
    offset = A[i] - offset;
  }
  let x = offset / 0x2;
  let cur = x;
  let answer = [];
  for (let i = 0x0; i < N; i++) {
    answer[__DECODE_0__(0x190)](cur);
    cur = A[i] - cur;
  }
  console[__DECODE_0__(0x18e)](answer[__DECODE_0__(0x186)]('\x20'));
};
main(require('fs')[__DECODE_0__(0x17f)](__DECODE_0__(0x180), __DECODE_0__(0x181)));
