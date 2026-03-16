(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x13d)) / 0x1 + parseInt(__DECODE_0__(0x140)) / 0x2 + parseInt(__DECODE_0__(0x13b)) / 0x3 * (-parseInt(__DECODE_0__(0x138)) / 0x4) + parseInt(__DECODE_0__(0x13c)) / 0x5 + parseInt(__DECODE_0__(0x13e)) / 0x6 + parseInt(__DECODE_0__(0x135)) / 0x7 + -parseInt(__DECODE_0__(0x134)) / 0x8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xbad6e);
function __STRING_ARRAY__() {
  const _0x2c6dea = ['1914228blySXZ', 'length', '1866610bijEBY', 'utf8', 'indexOf', '2494736IPoClE', '5573414VxAdkx', '/dev/stdin', 'log', '2020hqGZow', 'split', 'readFileSync', '5565vLsSAm', '4694080dWQKJu', '973450CvsChg'];
  __STRING_ARRAY__ = function () {
    return _0x2c6dea;
  };
  return __STRING_ARRAY__();
}
function Main(input) {
  input = input[__DECODE_0__(0x139)]('\x0a');
  let target = parseInt(input[0x0]['split']('\x20')[0x0]);
  let zerocheck = parseInt(input[0x0]['split']('\x20')[0x1]);
  if (zerocheck == 0x0) {
    console[__DECODE_0__(0x137)](target);
  } else {
    let str = input[0x1][__DECODE_0__(0x139)]('\x20');
    for (let i = 0x0; i < str[__DECODE_0__(0x13f)]; i++) {
      let num = parseInt(str[i]);
      str[i] = target - num;
    }
    for (let ite = 0x1; ite <= 0x64; ite++) {
      const isp = str[__DECODE_0__(0x142)](ite);
      const isn = str['indexOf'](-ite);
      if (isp == -0x1) {
        console[__DECODE_0__(0x137)](target - ite);
        break;
      }
      if (isn == -0x1) {
        console['log'](target + ite);
        break;
      }
    }
  }
}
function __DECODE_0__(OpedKx, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x134;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(OpedKx, key);
}
Main(require('fs')[__DECODE_0__(0x13a)](__DECODE_0__(0x136), __DECODE_0__(0x141)));
