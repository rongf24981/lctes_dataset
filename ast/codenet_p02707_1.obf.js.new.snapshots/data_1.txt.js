function __DECODE_0__(MsdkyN, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x8e;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(MsdkyN, key);
}
const a0_0xd63683 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  const _0x483ccb = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(_0x483ccb(0x99)) / 0x1 + -parseInt(_0x483ccb(0x9e)) / 0x2 * (-parseInt(_0x483ccb(0x96)) / 0x3) + -parseInt(_0x483ccb(0x93)) / 0x4 + -parseInt(_0x483ccb(0x92)) / 0x5 + -parseInt(_0x483ccb(0x9b)) / 0x6 + -parseInt(_0x483ccb(0x8e)) / 0x7 + parseInt(_0x483ccb(0x9d)) / 0x8;
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
  const _0x1978c8 = __DECODE_0__;
  const tmp = input['trim']()[_0x1978c8(0x94)]('\x0a');
  const employees = parseInt(tmp[0x0]);
  const subordinateArray = tmp[0x1]['split']('\x20');
  const subordinateCount = {};
  const distinctSubordinate = subordinateArray[_0x1978c8(0x91)]((x, i, self) => self[_0x1978c8(0x90)](x) === i);
  subordinateArray['forEach'](elem => {
    subordinateCount[elem] = subordinateCount[elem] ? subordinateCount[elem] + 0x1 : 0x1;
  });
  let result = [];
  distinctSubordinate['forEach'](elem => {
    const _0x9ea44f = _0x1978c8;
    return result[_0x9ea44f(0x97)](subordinateCount[elem]);
  });
  const zeroCount = employees - distinctSubordinate[_0x1978c8(0x95)];
  if (zeroCount > 0x0) {
    for (let index = 0x0; index < zeroCount; index++) {
      result[_0x1978c8(0x97)](0x0);
    }
  }
  result = result[_0x1978c8(0x98)]('\x0a');
  console['log'](result);
  return result;
};
Main(require('fs')[a0_0xd63683(0x8f)](a0_0xd63683(0x9a), a0_0xd63683(0x9c)));
