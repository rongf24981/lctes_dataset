(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0xe3)) / 0x1 + -parseInt(__DECODE_0__(0xde)) / 0x2 + -parseInt(__DECODE_0__(0xdb)) / 0x3 * (parseInt(__DECODE_0__(0xd8)) / 0x4) + -parseInt(__DECODE_0__(0xe1)) / 0x5 + parseInt(__DECODE_0__(0xe4)) / 0x6 + -parseInt(__DECODE_0__(0xd7)) / 0x7 * (-parseInt(__DECODE_0__(0xda)) / 0x8) + parseInt(__DECODE_0__(0xdd)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xb0b83);
function Main(input) {
  input = input[__DECODE_0__(0xdf)]('\x0a');
  const N = input[0x0][__DECODE_0__(0xd6)]();
  const values = input[0x1][__DECODE_0__(0xdf)]('\x20');
  for (let i = 0x0; i < N; i++) {
    if (values[i] == 0x0) {
      console[__DECODE_0__(0xe0)]('0');
      return;
    }
  }
  let result = BigInt(0x1);
  for (let i = 0x0; i < N; i++) {
    const nextVal = BigInt(values[i]);
    if (nextVal > BigInt(0xde0b6b3a7640000)) {
      console[__DECODE_0__(0xe0)]('-1');
      return;
    }
    result = result * nextVal;
    if (result > BigInt(0xde0b6b3a7640000)) {
      console['log']('-1');
      return;
    }
  }
  console[__DECODE_0__(0xe0)](Number(result)[__DECODE_0__(0xd9)]());
}
function __STRING_ARRAY__() {
  const _0x4d7b17 = ['/dev/stdin', 'trim', '9287194bYidev', '4515328RZuewi', 'toString', '8RJbujC', '3ZvMxaJ', 'utf8', '20804472PKFzmX', '1892906vtRpHo', 'split', 'log', '2164975mkIKQs', 'readFileSync', '1177577BZcBGl', '4628100iopUww'];
  __STRING_ARRAY__ = function () {
    return _0x4d7b17;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(xzjkNa, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xd6;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(xzjkNa, key);
}
Main(require('fs')[__DECODE_0__(0xe2)](__DECODE_0__(0xe5), __DECODE_0__(0xdc)));
