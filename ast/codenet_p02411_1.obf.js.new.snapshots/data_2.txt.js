function __DECODE_0__(iazjtb, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xbb;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(iazjtb, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0xc7)) / 0x1 * (-parseInt(__DECODE_0__(0xbc)) / 0x2) + parseInt(__DECODE_0__(0xc1)) / 0x3 + parseInt(__DECODE_0__(0xc8)) / 0x4 * (parseInt(__DECODE_0__(0xbd)) / 0x5) + -parseInt(__DECODE_0__(0xc5)) / 0x6 + parseInt(__DECODE_0__(0xc4)) / 0x7 * (-parseInt(__DECODE_0__(0xbf)) / 0x8) + -parseInt(__DECODE_0__(0xbb)) / 0x9 * (-parseInt(__DECODE_0__(0xc3)) / 0xa) + parseInt(__DECODE_0__(0xc0)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x59176);
let input = require('fs')['readFileSync'](__DECODE_0__(0xbe), __DECODE_0__(0xc9));
function __STRING_ARRAY__() {
  const _0x1e0fe4 = ['split', '25474haaNNs', '1869988VJyfma', 'UTF-8', '1638XsDueh', '48hduBNZ', '5IjrIVy', '/dev/stdin', '8mdsvOa', '68178aTqiqK', '282864xzEJxJ', 'map', '20630eEuwQK', '3500602UaQDUD', '4138926lENXcB'];
  __STRING_ARRAY__ = function () {
    return _0x1e0fe4;
  };
  return __STRING_ARRAY__();
}
let array = input[__DECODE_0__(0xc6)]('\x0a');
let result = '';
for (let i = 0x0; i < array['length']; i++) {
  let data = array[i]['split']('\x20')[__DECODE_0__(0xc2)](Number);
  let fScore = data[0x0];
  let lScore = data[0x1];
  let retest = data[0x2];
  if (fScore === -0x1 && lScore === -0x1 && retest === -0x1) {
    break;
  }
  if (i !== 0x0) {
    result += '\x0a';
  }
  if (fScore === -0x1 || lScore === -0x1) {
    result += 'F';
  } else {
    let sum = fScore + lScore;
    switch (!![]) {
      case sum >= 0x50:
        result += 'A';
        break;
      case 0x41 <= sum && sum < 0x50:
        result += 'B';
        break;
      case 0x32 <= sum && sum < 0x41:
        result += 'C';
        break;
      case 0x1e <= sum && sum < 0x32:
        result += retest >= 0x32 ? 'C' : 'D';
        break;
      default:
        result += 'F';
    }
    ;
  }
}
console['log'](result);
