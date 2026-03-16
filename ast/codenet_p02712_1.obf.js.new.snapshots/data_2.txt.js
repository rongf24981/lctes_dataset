(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0xb2)) / 0x1 * (-parseInt(__DECODE_0__(0xb0)) / 0x2) + parseInt(__DECODE_0__(0xad)) / 0x3 * (-parseInt(__DECODE_0__(0xb4)) / 0x4) + -parseInt(__DECODE_0__(0xb6)) / 0x5 + -parseInt(__DECODE_0__(0xb3)) / 0x6 + -parseInt(__DECODE_0__(0xb5)) / 0x7 + parseInt(__DECODE_0__(0xac)) / 0x8 + parseInt(__DECODE_0__(0xaf)) / 0x9 * (parseInt(__DECODE_0__(0xb8)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x30b43);
function __STRING_ARRAY__() {
  const _0xc4fc80 = ['split', '1619984rHegpS', '62661jTLxfT', 'log', '9TTdMLg', '97562DirJDO', 'push', '5shzaku', '1125186cLSaqT', '68mFNlNx', '14959YWryqw', '1597560ykbLnK', 'reduce', '11051570TVmwWQ'];
  __STRING_ARRAY__ = function () {
    return _0xc4fc80;
  };
  return __STRING_ARRAY__();
}
function Main(input) {
  inputs = input[__DECODE_0__(0xb9)]('\x0a');
  const N = Number(inputs[0x0]);
  const arr = [];
  for (let i = 0x1; i <= N; i++) {
    if (i % 0x3 !== 0x0 && i % 0x5 !== 0x0) {
      arr[__DECODE_0__(0xb1)](i);
    }
  }
  const sum = arr[__DECODE_0__(0xb7)]((prev, current) => {
    return prev + current;
  });
  console[__DECODE_0__(0xae)](sum);
}
function __DECODE_0__(NpaDBS, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xac;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(NpaDBS, key);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
