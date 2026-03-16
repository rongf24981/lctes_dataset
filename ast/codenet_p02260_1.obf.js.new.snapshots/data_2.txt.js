(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x93)) / 0x1 * (parseInt(__DECODE_0__(0x94)) / 0x2) + parseInt(__DECODE_0__(0x9b)) / 0x3 * (parseInt(__DECODE_0__(0x99)) / 0x4) + parseInt(__DECODE_0__(0x98)) / 0x5 * (-parseInt(__DECODE_0__(0x9e)) / 0x6) + -parseInt(__DECODE_0__(0x9a)) / 0x7 * (-parseInt(__DECODE_0__(0x96)) / 0x8) + parseInt(__DECODE_0__(0x91)) / 0x9 * (-parseInt(__DECODE_0__(0x8e)) / 0xa) + parseInt(__DECODE_0__(0x8c)) / 0xb + -parseInt(__DECODE_0__(0x9c)) / 0xc;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xea98c);
let inputString = '';
function __STRING_ARRAY__() {
  const _0xc61127 = ['3478383xUwIVG', 'data', '92867LzMejk', '14AQSDdQ', 'map', '392kXLeBd', 'length', '57515blnsCY', '312020OYGuvT', '188041dycSXf', '48nHvliT', '23634684wvInqc', 'split', '114lwjCMe', '16285874eEdLkq', 'stdin', '40NEpebl', 'end', 'log'];
  __STRING_ARRAY__ = function () {
    return _0xc61127;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(gJmhjk, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x8c;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(gJmhjk, key);
}
process[__DECODE_0__(0x8d)]['on'](__DECODE_0__(0x92), inputStdin => {
  inputString += inputStdin;
});
process['stdin']['on'](__DECODE_0__(0x8f), function () {
  inputString = inputString['replace'](/\s*$/, '')[__DECODE_0__(0x9d)]('\x0a')['map'](str => str['replace'](/\s*$/, ''));
  selectionSort(inputString[0x1][__DECODE_0__(0x9d)]('\x20')[__DECODE_0__(0x95)](str => Number(str)));
});
const selectionSort = arr => {
  let swap = 0x0;
  for (let i = 0x0; i < arr[__DECODE_0__(0x97)]; i++) {
    let minj = i;
    for (let j = i; j < arr['length']; j++) {
      if (arr[j] < arr[minj]) {
        minj = j;
      }
    }
    const a = arr[i];
    const b = arr[minj];
    if (a !== b) {
      arr[minj] = a;
      arr[i] = b;
      swap++;
    }
  }
  console['log'](arr['join']('\x20'));
  console[__DECODE_0__(0x90)](swap);
};
