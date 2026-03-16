'use strict';

function __STRING_ARRAY__() {
  const _0x294e67 = ['3045969yNSvGV', '516422ZojBtf', 'utf8', '/dev/stdin', '9662845KxbXFI', 'shift', 'pow', '7563654JRMTqF', '4zjfACm', '1046694bhiRZW', 'ceil', 'trim', '3eVUzfF', '461149kFLSlT', '18165WkMdPk', 'readFileSync', 'map', 'split', 'push', '4304ArkzRD', '40sQxEyq'];
  __STRING_ARRAY__ = function () {
    return _0x294e67;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x1c6)) / 0x1 + -parseInt(__DECODE_0__(0x1ba)) / 0x2 * (parseInt(__DECODE_0__(0x1c5)) / 0x3) + parseInt(__DECODE_0__(0x1c1)) / 0x4 * (-parseInt(__DECODE_0__(0x1bd)) / 0x5) + parseInt(__DECODE_0__(0x1c0)) / 0x6 + parseInt(__DECODE_0__(0x1c7)) / 0x7 * (parseInt(__DECODE_0__(0x1b7)) / 0x8) + -parseInt(__DECODE_0__(0x1b9)) / 0x9 + parseInt(__DECODE_0__(0x1b8)) / 0xa * (parseInt(__DECODE_0__(0x1c2)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xeca2f);
function main(input) {
  input = input[__DECODE_0__(0x1c4)]()[__DECODE_0__(0x1b5)]('\x0a');
  const DG = input[__DECODE_0__(0x1be)]()[__DECODE_0__(0x1b5)]('\x20')[__DECODE_0__(0x1b4)](v => Number(v));
  input = input[__DECODE_0__(0x1b4)](v => v['split']('\x20')[__DECODE_0__(0x1b4)](v => Number(v)));
  const calc = (a, r) => {
    let count = [Math[__DECODE_0__(0x1bf)](0xa, 0x8)];
    for (let i = 0x0; i < DG[0x0]; i++) {
      const cur = Math['pow'](0x2, i);
      if ((a & cur) === cur) {
        const points = (i + 0x1) * 0x64;
        let max = points * input[i][0x0] + input[i][0x1];
        let num = Math[__DECODE_0__(0x1c3)](r / points);
        if (max < r) {
          count[__DECODE_0__(0x1b6)](input[i][0x0] + calc(a - cur, r - max));
        } else {
          count[__DECODE_0__(0x1b6)](num < input[i][0x0] ? num : input[i][0x0]);
        }
      }
    }
    return Math['min'](...count);
  };
  console['log'](calc(Math[__DECODE_0__(0x1bf)](0x2, DG[0x0]) - 0x1, DG[0x1]));
}
function __DECODE_0__(ySXOio, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1b3;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ySXOio, key);
}
main(require('fs')[__DECODE_0__(0x1b3)](__DECODE_0__(0x1bc), __DECODE_0__(0x1bb)));
