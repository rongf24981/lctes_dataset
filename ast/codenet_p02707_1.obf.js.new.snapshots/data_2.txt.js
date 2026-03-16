function __DECODE_0__(MsdkyN, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x8e;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(MsdkyN, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x99)) / 0x1 + -parseInt(__DECODE_0__(0x9e)) / 0x2 * (-parseInt(__DECODE_0__(0x96)) / 0x3) + -parseInt(__DECODE_0__(0x93)) / 0x4 + -parseInt(__DECODE_0__(0x92)) / 0x5 + -parseInt(__DECODE_0__(0x9b)) / 0x6 + -parseInt(__DECODE_0__(0x8e)) / 0x7 + parseInt(__DECODE_0__(0x9d)) / 0x8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x53284);
function __STRING_ARRAY__() {
  const _0x5daab4 = ['355882IjmVxY', '3235533rjbUOx', 'readFileSync', 'indexOf', 'filter', '618405Lgfgof', '709120XrNbhO', 'split', 'length', '3roEqsu', 'push', 'join', '563803HwUYqG', '/dev/stdin', '1428690HiEDqZ', 'utf8', '4801304IlIgWh'];
  __STRING_ARRAY__ = function () {
    return _0x5daab4;
  };
  return __STRING_ARRAY__();
}
const Main = input => {
  const tmp = input['trim']()[__DECODE_0__(0x94)]('\x0a');
  const employees = parseInt(tmp[0x0]);
  const subordinateArray = tmp[0x1]['split']('\x20');
  const subordinateCount = {};
  const distinctSubordinate = subordinateArray[__DECODE_0__(0x91)]((x, i, self) => self[__DECODE_0__(0x90)](x) === i);
  subordinateArray['forEach'](elem => {
    subordinateCount[elem] = subordinateCount[elem] ? subordinateCount[elem] + 0x1 : 0x1;
  });
  let result = [];
  distinctSubordinate['forEach'](elem => {
    return result[__DECODE_0__(0x97)](subordinateCount[elem]);
  });
  const zeroCount = employees - distinctSubordinate[__DECODE_0__(0x95)];
  if (zeroCount > 0x0) {
    for (let index = 0x0; index < zeroCount; index++) {
      result[__DECODE_0__(0x97)](0x0);
    }
  }
  result = result[__DECODE_0__(0x98)]('\x0a');
  console['log'](result);
  return result;
};
Main(require('fs')[__DECODE_0__(0x8f)](__DECODE_0__(0x9a), __DECODE_0__(0x9c)));
