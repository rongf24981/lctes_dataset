function __STRING_ARRAY__() {
  const _0x2ec6fc = ['6193ffIdLA', '279937CugODf', '1629455jBLPwV', '22870aRcCJu', '294dgQVai', '8dCArPD', 'map', '23335cwuKqy', 'log', '/dev/stdin', '54cZLlcB', '4068YzQLZA', 'length', '14574SoLciU', '277512vyoXvb', '12590DsQEVx', '1421qmMNta'];
  __STRING_ARRAY__ = function () {
    return _0x2ec6fc;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(DpykFD, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xe6;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(DpykFD, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0xeb)) / 0x1 + -parseInt(__DECODE_0__(0xe8)) / 0x2 * (-parseInt(__DECODE_0__(0xee)) / 0x3) + parseInt(__DECODE_0__(0xef)) / 0x4 * (-parseInt(__DECODE_0__(0xec)) / 0x5) + -parseInt(__DECODE_0__(0xe6)) / 0x6 * (-parseInt(__DECODE_0__(0xe9)) / 0x7) + parseInt(__DECODE_0__(0xe7)) / 0x8 * (-parseInt(__DECODE_0__(0xf4)) / 0x9) + -parseInt(__DECODE_0__(0xed)) / 0xa * (-parseInt(__DECODE_0__(0xea)) / 0xb) + parseInt(__DECODE_0__(0xf5)) / 0xc * (-parseInt(__DECODE_0__(0xf1)) / 0xd);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x9e804);
function Main(input) {
  let [l, ...valArr] = input['split']('\x0a');
  valArr = valArr[__DECODE_0__(0xf0)](e => parseFloat(e));
  let result = [];
  for (let ele of valArr) {
    let temp = valArr[__DECODE_0__(0xf0)](e => {
      if (e !== ele && e * ele % 0x1 === 0x0 && ele < e) {
        return [ele, e];
      }
    });
    temp = temp['filter'](e => e !== undefined);
    if (temp[__DECODE_0__(0xf6)]) {
      result = [...result, ...temp];
    }
  }
  console[__DECODE_0__(0xf2)](result[__DECODE_0__(0xf6)]);
}
Main(require('fs')['readFileSync'](__DECODE_0__(0xf3), 'utf8'));
