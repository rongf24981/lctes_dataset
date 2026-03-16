'use strict';

function __DECODE_0__(VCKPwH, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xca;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(VCKPwH, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0xd0)) / 0x1 + parseInt(__DECODE_0__(0xca)) / 0x2 + -parseInt(__DECODE_0__(0xd1)) / 0x3 + parseInt(__DECODE_0__(0xd5)) / 0x4 * (-parseInt(__DECODE_0__(0xcf)) / 0x5) + parseInt(__DECODE_0__(0xcd)) / 0x6 + -parseInt(__DECODE_0__(0xce)) / 0x7 + -parseInt(__DECODE_0__(0xd6)) / 0x8 * (-parseInt(__DECODE_0__(0xd3)) / 0x9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x2b5c4);
function main(input) {
  const args = input['trim']()[__DECODE_0__(0xd2)]('\x0a')[__DECODE_0__(0xd8)](_ => _[__DECODE_0__(0xd2)]('\x20')['map'](x => parseInt(x, 0xa)));
  const k = args[0x0][0x1];
  const arr = args['slice'](0x1);
  let cnt = 0x0;
  let i = 0x0;
  while (cnt < k) {
    cnt += arr[i][0x1];
    i++;
  }
  console[__DECODE_0__(0xd4)](arr[i - 0x1][0x0]);
}
function __STRING_ARRAY__() {
  const _0x2c05bd = ['log', '4VaGkRy', '16xmsSrH', '/dev/stdin', 'map', '615286NoVrfk', 'utf8', 'readFileSync', '1624638ZKIrYY', '2287628pMPBQT', '1691025AGXGVV', '29817TtOadI', '872760hssvwv', 'split', '2632203arOUDU'];
  __STRING_ARRAY__ = function () {
    return _0x2c05bd;
  };
  return __STRING_ARRAY__();
}
main(require('fs')[__DECODE_0__(0xcc)](__DECODE_0__(0xd7), __DECODE_0__(0xcb)));
